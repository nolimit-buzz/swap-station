import type { ReactNode } from "react";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "Careers",
  description:
    "Join SwapStation Mobility and help build Africa's clean energy swapping infrastructure.",
  path: "/careers",
});

export default function CareersLayout({ children }: { children: ReactNode }) {
  return children;
}
