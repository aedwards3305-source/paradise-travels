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
  title: "ParadiseTravels | Caribbean Travel Agency",
  description:
    "Your gateway to unforgettable Caribbean adventures. Discover pristine beaches, vibrant culture, and luxury travel packages to Jamaica, Bahamas, Barbados, and more.",
  keywords: "travel agency, Caribbean, Jamaica, Bahamas, vacation, holiday, travel packages, all inclusive",
  openGraph: {
    title: "ParadiseTravels | Caribbean Travel Agency",
    description: "Discover paradise with hand-crafted Caribbean travel packages.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark text-foreground`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
