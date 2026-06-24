import type { Metadata } from "next";
import HomePage from "../components/HomePage";
import { buildMetadata } from "../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "SwapStation Mobility | Africa's Clean Energy Swapping Network",
  description:
    "SwapStation Mobility is building Africa's clean energy swapping backbone for commercial fleets, logistics operators and last-mile delivery.",
  path: "/",
  absoluteTitle: true,
});

export default function Page() {
  return <HomePage />;
}
