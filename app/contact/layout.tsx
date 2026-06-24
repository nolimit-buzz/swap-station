import type { ReactNode } from "react";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact SwapStation Mobility to discuss partnerships, fleet deployments, station rollouts, and investment opportunities.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
