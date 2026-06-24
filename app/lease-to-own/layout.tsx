import type { ReactNode } from "react";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "Lease to Own",
  description:
    "Explore flexible lease-to-own financing for electric fleets and commercial mobility operations.",
  path: "/lease-to-own",
});

export default function LeaseToOwnLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
