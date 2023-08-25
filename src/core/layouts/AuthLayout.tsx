import type { PropsWithChildren } from "react";

import { FooterAuth } from "../components";
import { APP_NAME } from "../configs";

export function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <div className="relative float-right h-full min-h-screen w-full">
        <main className="mx-auto min-h-screen">
          <div className="relative flex">
            <div className="mx-auto flex min-h-full w-full flex-col justify-start md:max-w-[75%] lg:h-screen lg:max-w-[1013px] lg:px-8 lg:pt-0 xl:h-[100vh] xl:max-w-[1383px] xl:px-0 xl:pl-[70px]">
              <div className="mb-auto flex flex-col pl-5 pr-5 md:pl-12 md:pr-0 lg:max-w-[48%] lg:pl-0 xl:max-w-full">
                {children}

                <div className="absolute right-0 hidden h-full min-h-screen md:block lg:w-[49vw] 2xl:w-[44vw]">
                  <div className="absolute flex h-full w-full items-end justify-center bg-[url('/img/auth/notAuthorized.jpg')] bg-cover bg-center lg:rounded-bl-[120px] xl:rounded-bl-[200px]" />
                  <h4
                    style={{
                      textShadow:
                        "0px 0px 20px #3fa9fe, 0px 0px 15px #627ff8, 0px 0px 5px #7f7cff",
                    }}
                    className="absolute left-1/2 top-20 mb-60 hidden -translate-x-1/2 self-center text-6xl font-bold text-[#f8fff2] lg:block"
                  >
                    {APP_NAME}
                  </h4>
                </div>
              </div>
              <FooterAuth />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
