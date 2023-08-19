import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

export interface SidebarContextInterface {
  openSidebar: boolean;
  setOpenSidebar: (state: boolean) => void;
}

export const SidebarContext = createContext({} as SidebarContextInterface);

export function SidebarProvider({ children }: PropsWithChildren) {
  const [openSidebar, setOpenSidebar] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpenSidebar(false) : setOpenSidebar(true)
    );

    return () => {
      window.removeEventListener("resize", () => ({}));
    };
  }, []);

  return (
    <SidebarContext.Provider
      value={{
        openSidebar,
        setOpenSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
