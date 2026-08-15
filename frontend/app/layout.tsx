import { DM_Sans, Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/component/header/Header";

const dmSans = DM_Sans({
  variable: "--font-family-dm-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-family-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className={`${inter.variable}`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}