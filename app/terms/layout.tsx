import type { ReactNode } from "react";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Read the terms and conditions that govern SwapStation Mobility's website and services.",
  path: "/terms",
  noIndex: true,
});

export default function TermsLayout({ children }: { children: ReactNode }) {
  return children;
}
