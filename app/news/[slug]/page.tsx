"use client";

import { use, useEffect, useMemo, useState } from "react";
import SingleNewsPage from "../../../components/SingleNewsPage";
import {
  GENERATED_NEWS,
  transformApiData,
  type NewsItem,
} from "../../../components/NewsPage";
import { useSiteNavigation } from "../../../components/useSiteNavigation";
import { slugify } from "../../../lib/site-routes";

interface ApiNewsResponse {
  data?: Array<{
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    featured_image: string;
    terms: Array<{
      name: string;
      slug: string;
      term_id: number;
      term_group: number;
      term_taxonomy_id: number;
      taxonomy: string;
      description: string;
      parent: number;
      count: number;
      filter: string;
    }>;
    custom_fields: Record<string, string[]>;
  }>;
}

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { navigate, navigateArticle, navigateCategory } = useSiteNavigation();
  const { slug } = use(params);
  const [article, setArticle] = useState<NewsItem | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const loadArticle = async () => {
      try {
        const response = await fetch(
          "https://nolimit.buzz/headless/swapstation/wp-json/headless/v1/db?datatype=post&taxonomy=category"
        );

        if (!response.ok) {
          throw new Error("Failed to load news list");
        }

        const data: ApiNewsResponse = await response.json();
        const items: NewsItem[] = Array.isArray(data.data)
          ? data.data.map(transformApiData)
          : GENERATED_NEWS;

        const match =
          items.find((item) => item.slug === slug) ??
          items.find((item) => slugify(item.title) === slug) ??
          GENERATED_NEWS.find((item) => slugify(item.title) === slug) ??
          GENERATED_NEWS[0];

        if (!cancelled) {
          setArticle(match);
        }
      } catch {
        if (!cancelled) {
          const fallback =
            GENERATED_NEWS.find((item) => slugify(item.title) === slug) ??
            GENERATED_NEWS[0];
          setArticle(fallback);
        }
      }
    };

    loadArticle();

    return () => {
      cancelled = true;
    };
  }, [slug]);

  const resolvedArticle = useMemo(
    () =>
      article ??
      GENERATED_NEWS.find((item) => slugify(item.title) === slug) ??
      GENERATED_NEWS[0],
    [article, slug]
  );

  return (
    <SingleNewsPage
      article={resolvedArticle}
      onNavigate={navigate as any}
      onReadArticle={navigateArticle}
      onNavigateToCategory={navigateCategory}
      isDarkMode={isDarkMode}
      onToggleTheme={() => setIsDarkMode((prev) => !prev)}
    />
  );
}