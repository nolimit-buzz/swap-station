import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import SiteShell from "../components/SiteShell";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SwapStation | Africa's Clean Energy Swapping Network",
  description:
    "SwapStation Mobility is building Africa's clean energy swapping backbone for commercial fleets, logistics operators and last-mile delivery.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "SwapStation | Africa's Clean Energy Swapping Network",
    description:
      "Track SwapStation Mobility's latest milestones, partnerships and product updates powering Africa's energy transition.",
    type: "website",
    url: "https://swapstation.mobility",
    siteName: "SwapStation Mobility",
  },
  twitter: {
    card: "summary_large_image",
    title: "SwapStation | Africa's Clean Energy Swapping Network",
    description:
      "SwapStation Mobility is building Africa's clean energy swapping backbone for commercial fleets and last-mile logistics.",
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
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}