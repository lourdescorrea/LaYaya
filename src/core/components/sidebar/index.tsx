import { HiX } from "react-icons/hi";

import { useMobileView, useSidebarContext } from "../../hooks";
import { cn } from "../../utils";
import { Links, Title, VersionCard } from "./components";

export const Sidebar = () => {
  const { isMobile } = useMobileView();
  const { openSidebar, setOpenSidebar } = useSidebarContext();

  const closeSidebar = () => setOpenSidebar(false);

  const rootBase = "bg-[#000] bg-opacity-70 absolute inset-0 z-50";
  const rootVariant =
    openSidebar && isMobile ? "block w-screen h-full" : "hidden";

  const barBase =
    "bg-card sm:none w-[250px] duration-175 linear fixed !z-50 flex min-h-full flex-col pb-10 shadow-2xl shadow-white/5 transition-all md:!z-50 lg:!z-50 xl:!z-0";
  const barVariant = openSidebar ? "translate-x-0" : "-translate-x-96";

  return (
    <>
      <div className={cn(rootBase, rootVariant)} onClick={closeSidebar} />
      <div className={cn(barBase, barVariant)}>
        <span
          className="absolute right-4 top-4 block cursor-pointer xl:hidden"
          onClick={closeSidebar}
        >
          <HiX />
        </span>

        <Title />

        <Links onClickRoute={isMobile ? closeSidebar : undefined} />

        <VersionCard />
      </div>
    </>
  );
};
