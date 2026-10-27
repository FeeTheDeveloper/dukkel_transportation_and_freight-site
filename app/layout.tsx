import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed, Public_Sans } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { MotionProvider } from "@/components/shared/motion-provider";
import { siteConfig } from "@/lib/site";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap"
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Mission-Driven Freight & Logistics`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "freight transportation",
    "government logistics",
    "veteran owned transportation",
    "contract-based transportation",
    "dedicated hauling",
    "priority freight"
  ],
  openGraph: {
    title: `${siteConfig.name} | Mission-Driven Freight & Logistics`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Navy semi-truck at a loading dock at dusk"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Mission-Driven Freight & Logistics`,
    description: siteConfig.description,
    images: ["/og-image.jpg"]
  }
};

export const viewport: Viewport = {
  themeColor: "#060F1C"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${publicSans.variable} ${barlow.variable} ${barlowCondensed.variable} font-sans antialiased`}>
        <a
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-navy"
          href="#main"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
