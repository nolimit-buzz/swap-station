import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildMetadata, humanizeSlug } from "../../../lib/seo";

type RouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const humanTitle = humanizeSlug(slug);

  return buildMetadata({
    title: "News: " + humanTitle,
    description:
      "Read " + humanTitle + " and other updates from SwapStation Mobility.",
    path: "/news/" + slug,
  });
}

export default function NewsArticleLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
