import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  description:
    "Sania Gupta is an eCommerce & B2B CRO strategist helping Shopify and D2C brands improve conversions through smarter UX, strategy, and store revamps.",
  verification: {
    google: "JbjxbYEIltrJU97cltt4CTaHnLpDmzRLAaokpzG0ugs",
  },
};

const personJsonLd = {
  "@context": "https://schema.org/",
  "@type": "Person",
  name: "Sania Gupta",
  url: "https://www.saniagupta.com/",
  image:
    "https://saniagupta.com/extracted_60ec7261-46fe-454a-aa51-5d355901dde5.webp",
  sameAs: "https://in.linkedin.com/in/saniagupta",
  jobTitle: "Sania Gupta - Founder, Cart Potato & Digital Kangaroos",
  worksFor: {
    "@type": "Organization",
    name: "Cart Potato & Digital Kangaroos",
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
      <body className="min-h-full flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VQR9G09FBD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VQR9G09FBD');
          `}
        </Script>
        <Script
          id="person-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}