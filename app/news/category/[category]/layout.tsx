import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildMetadata, humanizeSlug } from "../../../../lib/seo";

type RouteProps = {
  params: Promise<{
    category: string;
  }>;
};

export async function generateMetadata({
  params,
}: RouteProps): Promise<Metadata> {
  const { category } = await params;
  const label = humanizeSlug(category);

  return buildMetadata({
    title: "Category: " + label,
    description: "Browse SwapStation Mobility news in the " + label + " category.",
    path: "/news/category/" + category,
  });
}

export default function NewsCategoryLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
