import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}