import "./globals.css";

import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import { PropsWithChildren } from "react";
import GlobalClientProvider from "@/components/GlobalClientProvider";
import GlobalServerProvider from "@/components/GlobalServerProvider";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simple E-Commerce",
  description: "A simple e-commerce application built with Next.js",
};

type Props = Readonly<PropsWithChildren>;

export default function Layout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${robotoMono.variable}`}>
        <GlobalServerProvider>
          <GlobalClientProvider>{children}</GlobalClientProvider>
        </GlobalServerProvider>
      </body>
    </html>
  );
}
