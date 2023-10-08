import { routes } from "../../../configs";
import { cn } from "../../../utils";
import { DashIcon } from "../../icons/DashIcon";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import type { MouseEvent } from "react";

interface LinksProps {
  onClickRoute?: (e: MouseEvent<HTMLElement>) => any;
}

export function Links({ onClickRoute }: LinksProps) {
  const { pathname } = useRouter();
  const { data } = useSession();

  const activeRoute = (routeName: string) => {
    return pathname.includes(routeName);
  };

  return (
    <ul className="mb-auto pt-1">
      {routes.map((route, index: number) => {
        const isActive = activeRoute(route.path);

        if (!route.allowedRoles.includes(data?.user?.role ?? "")) return null;

        return (
          <Link
            className=" text-white"
            key={index}
            href={route.path}
            onClick={onClickRoute}
          >
            <div className="relative mb-3 flex hover:cursor-pointer">
              <li
                className="my-[3px] flex cursor-pointer items-center px-8"
                key={index}
              >
                <span className={isActive ? "font-bold" : "font-medium"}>
                  {route.icon ? route.icon : <DashIcon />}
                </span>
                <p
                  className={cn(
                    "leading-1 ml-4 flex",
                    isActive ? "font-bold" : "font-medium"
                  )}
                >
                  {route.name}
                </p>
              </li>
              {isActive && (
                <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-white" />
              )}
            </div>
          </Link>
        );
      })}
    </ul>
  );
}
