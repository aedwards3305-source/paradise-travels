import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ParadiseTravels | Luxury Caribbean Travel Experiences",
  description:
    "Bespoke Caribbean travel experiences crafted with care. Pristine beaches, vibrant culture, and luxury packages to Jamaica, Bahamas, Barbados, and beyond.",
  keywords: "luxury travel, Caribbean, Jamaica, Bahamas, bespoke travel, all inclusive, vacation",
  openGraph: {
    title: "ParadiseTravels | Luxury Caribbean Travel Experiences",
    description: "Bespoke Caribbean travel. Discover paradise your way.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-navy text-cream`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
