import type { ReactNode } from "react";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Discover SwapStation Mobility services for infrastructure, battery swapping, fleet enablement, and asset management.",
  path: "/services",
});

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return children;
}
