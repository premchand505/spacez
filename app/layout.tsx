import type { Metadata } from "next";

import { Open_Sans } from "next/font/google"; 
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spacez Offers",
  description: "SDE Task for Spacez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${openSans.className} bg-gray-50`}>{children}</body>
    </html>
  );
}