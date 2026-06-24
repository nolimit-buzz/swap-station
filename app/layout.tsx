import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import SiteShell from "../components/SiteShell";
import { siteMetadataBase, siteName, siteUrl } from "../lib/seo";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteMetadataBase,
  title: {
    default: siteName,
    template: "%s | " + siteName,
  },
  description:
    "SwapStation Mobility is building Africa's clean energy swapping backbone for commercial fleets, logistics operators and last-mile delivery.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: siteName,
    description:
      "Track SwapStation Mobility's latest milestones, partnerships and product updates powering Africa's energy transition.",
    type: "website",
    url: siteUrl,
    siteName,
    images: [
      {
        url: "/swapstation.jpg",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description:
      "SwapStation Mobility is building Africa's clean energy swapping backbone for commercial fleets and last-mile logistics.",
    images: ["/swapstation.jpg"],
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
      data-scroll-behavior="smooth"
      className={outfit.variable + " h-full antialiased"}
    >
      <body className="min-h-full flex flex-col">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
