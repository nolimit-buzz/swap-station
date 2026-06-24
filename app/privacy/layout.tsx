import type { ReactNode } from "react";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Review SwapStation Mobility's privacy policy, data handling practices, and user rights.",
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyLayout({ children }: { children: ReactNode }) {
  return children;
}
