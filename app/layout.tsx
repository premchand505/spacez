import type { Metadata } from "next";
import { Open_Sans } from "next/font/google"; 
import "./globals.css";

// --- FIX: Add the 'weight' array to load all needed styles ---
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // 400=Regular, 500=Medium, 600=Semibold, 700=Bold
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
      {/* This className now provides all the font weights (400, 500, 600, 700)
        to your entire application. Tailwind's utilities like
        font-regular (400), font-medium (500), font-semibold (600), 
        and font-bold (700) will now work perfectly.
      */}
      <body className={`${openSans.className} bg-gray-50`}>{children}</body>
    </html>
  );
}