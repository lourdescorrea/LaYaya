import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { FiAlignJustify } from "react-icons/fi";

import { en } from "yaya/shared";
import { routes } from "../../configs";
import { useSidebarContext } from "../../hooks";
import { Dropdown } from "../dropdown";
import Avatar from "/public/img/avatars/logo.png";

export const Navbar = () => {
  const { pathname } = useRouter();
  const { setOpenSidebar } = useSidebarContext();
  const [currentRoute, setCurrentRoute] = useState(routes[0]!);

  const logOut = () => signOut();

  const getActiveRoute = useCallback(() => {
    const activeRoute = routes.find((route) => pathname.includes(route.path));

    if (activeRoute) {
      setCurrentRoute(activeRoute);
    }

    return activeRoute;
  }, [pathname]);

  useEffect(() => {
    getActiveRoute();
  }, [getActiveRoute, pathname]);

  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-navbar p-2 backdrop-blur-xl">
      <div className="ml-[6px]">
        <p className="shrink text-[33px] capitalize">
          <Link href={currentRoute.path} className="font-bold capitalize">
            {currentRoute.name}
          </Link>
        </p>
      </div>

      <div className="relative mt-[3px] flex h-[61px] w-[200px] items-center justify-around gap-2 rounded-full bg-card px-2 py-2 shadow-xl shadow-shadow-500 dark:shadow-none md:w-[200px] md:flex-grow-0 md:gap-1 xl:w-[150px] xl:gap-2">
        <span
          className="flex cursor-pointer text-xl xl:hidden"
          onClick={() => setOpenSidebar(true)}
        >
          <FiAlignJustify className="h-5 w-5" />
        </span>

        <Dropdown
          button={
            <Image
              className="h-10 w-10 cursor-pointer rounded-full"
              src={Avatar}
              alt="Elon Musk"
            />
          }
          className="-left-[180px] top-8 w-max py-2"
        >
          <div className="flex w-56 flex-col justify-start rounded-[20px] bg-popover bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:shadow-none">
            <div className="p-4">
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold">
                  👋 <span className="ml-1">{currentRoute.allowedRoles}</span>
                </p>
              </div>
            </div>
            <div className="h-px w-full bg-gray-200 dark:bg-white/20" />

            <div className="flex flex-col p-4">
              <button
                // todo test this
                onClick={() => void logOut()}
                className="text-sm font-medium text-destructive"
              >
                {en.common.logout}
              </button>
            </div>
          </div>
        </Dropdown>
      </div>
    </nav>
  );
};
