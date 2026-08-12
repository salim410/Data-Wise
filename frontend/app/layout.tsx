import { DM_Sans, Inter } from "next/font/google";
import "@/styles/globals.css";
import React from "react";

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: "swap"
})

const inter = Inter({
  subsets: ['latin'],
  display: "swap"
})

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html
      lang="en"
      className={`${dmSans.className} ${inter.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
