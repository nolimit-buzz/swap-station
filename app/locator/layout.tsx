import type { ReactNode } from "react";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "Station Locator",
  description:
    "Find the nearest SwapStation hub, station, or swap point and plan your route with confidence.",
  path: "/locator",
});

export default function LocatorLayout({ children }: { children: ReactNode }) {
  return children;
}
