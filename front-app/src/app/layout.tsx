"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import {
  Footer,
  MovieProvider,
  AuthProvider,
  Header,
  CinemaProvider,
  OrderProvider,
  ShowtimeProvider,
  ComingsoonProvider,
  EventProvider,
  MovieContext,
} from "@/components";
import { PasswordRecoverProvider } from "@/components/contexts/passwordrecover";
import Loader from "@/common/loader";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 250);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <PasswordRecoverProvider>
            <MovieProvider>
              <ComingsoonProvider>
                <EventProvider>
                  <CinemaProvider>
                    <ShowtimeProvider>
                      <OrderProvider>
                        <Header />
                        {loading ? (
                          <Loader />
                        ) : (
                          <div>
                            {children}
                            <Toaster />
                            <Footer />
                          </div>
                        )}
                      </OrderProvider>
                    </ShowtimeProvider>
                  </CinemaProvider>
                </EventProvider>
              </ComingsoonProvider>
            </MovieProvider>
          </PasswordRecoverProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
