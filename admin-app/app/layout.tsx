"use client";
import "./globals.css";
import "./data-tables-css.css";
import "./satoshi.css";
import { useState, useEffect } from "react";
import Loader from "@/components/common/Loader";
import { ToastContainer } from "react-toastify";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header";
import { Theme, ThemePanel } from "@radix-ui/themes";
import {
  MovieProvider,
  ComingsoonProvider,
  EventProvider,
  CinemaProvider,
  AuthProvider,
} from "@/context";

import "react-toastify/dist/ReactToastify.css";
import {
  PasswordRecoverContext,
  PasswordRecoverProvider,
} from "@/context/passwordrecover";
import { ShowtimeProvider } from "@/context/showtime";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 100);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <AuthProvider>
          <PasswordRecoverProvider>
            <CinemaProvider>
              <MovieProvider>
                <ComingsoonProvider>
                  <EventProvider>
                    <ShowtimeProvider>
                      <Theme>
                        <div className="dark:bg-black dark:text-bodydark">
                          {loading ? (
                            <Loader />
                          ) : (
                            <div className="flex h-screen overflow-hidden">
                              <Sidebar />

                              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                                <Header
                                  sidebarOpen={sidebarOpen}
                                  setSidebarOpen={setSidebarOpen}
                                />

                                <main>
                                  <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                                    {children}
                                  </div>
                                  {/* <ThemePanel /> */}
                                  <ToastContainer />
                                </main>
                              </div>
                            </div>
                          )}
                        </div>
                      </Theme>
                    </ShowtimeProvider>
                  </EventProvider>
                </ComingsoonProvider>
              </MovieProvider>
            </CinemaProvider>
          </PasswordRecoverProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
