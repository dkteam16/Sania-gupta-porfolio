import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Sania Gupta | eCommerce & B2B CRO Strategist | Shopify CRO Expert India",
  description: "Sania Gupta is an eCommerce & B2B CRO strategist helping Shopify and D2C brands improve conversions through smarter UX, strategy, and store revamps.",
  verification: {
    google: "JbjxbYEIltrJU97cltt4CTaHnLpDmzRLAaokpzG0ugs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
