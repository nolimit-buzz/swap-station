import type { ReactNode } from "react";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "Products",
  description:
    "Explore SwapStation Mobility products, electric vehicles, and battery technology built for commercial fleets.",
  path: "/products",
});

export default function ProductsLayout({ children }: { children: ReactNode }) {
  return children;
}
