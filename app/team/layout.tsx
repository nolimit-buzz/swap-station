import type { ReactNode } from "react";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "Team",
  description:
    "Meet the founders and operators leading SwapStation Mobility's clean energy transformation.",
  path: "/team",
});

export default function TeamLayout({ children }: { children: ReactNode }) {
  return children;
}
