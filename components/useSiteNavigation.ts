"use client";

import { useRouter } from "next/navigation";
import { pageToPath, slugify, type SitePage } from "../lib/site-routes";
import type { NewsItem } from "./NewsPage";

export function useSiteNavigation() {
  const router = useRouter();

  const navigate = (page: SitePage | "privacy" | "terms") => {
    router.push(pageToPath(page as SitePage));
  };

  const navigateArticle = (article: NewsItem) => {
    const slug = article.slug || slugify(article.title);
    router.push(`/news/${slug}`);
  };

  const navigateCategory = (category: string) => {
    router.push(`/news/category/${slugify(category)}`);
  };

  return { navigate, navigateArticle, navigateCategory };
}
