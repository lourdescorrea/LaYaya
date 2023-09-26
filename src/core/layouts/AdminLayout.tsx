import type { PropsWithChildren } from "react";

import { FooterDashboard, Navbar, Sidebar } from "../components";
import { SidebarProvider } from "../providers";

export function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      <section className="flex h-full min-h-[100vh] w-full">
        <Sidebar />

        {/* Navbar & Main Content */}
        <div className="h-full min-h-[100vh] w-full">
          {/* Main Content */}
          <main className="mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]">
            {/* Routes */}
            <div className="h-full">
              <Navbar />

              <div className=" jutify-center mx-auto mb-auto flex h-full min-h-[82vh] flex-col items-center p-2 pt-5 md:pr-2">
                {children}
              </div>

              <div className="p-3">
                <FooterDashboard />
              </div>
            </div>
          </main>
        </div>
      </section>
    </SidebarProvider>
  );
}
