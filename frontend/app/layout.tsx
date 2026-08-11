import { DM_Sans } from "next/font/google";
import "@/styles/globals.css";
import React from "react";

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: "swap"
})

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html
      lang="en"
      className={`${dmSans.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
