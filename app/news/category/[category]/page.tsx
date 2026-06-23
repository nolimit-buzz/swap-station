"use client";

import { use } from "react";
import NewsCategoryPage from "../../../../components/NewsCategoryPage";
import { useSiteNavigation } from "../../../../components/useSiteNavigation";
import { categorySlugToLabel } from "../../../../lib/site-routes";

export default function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { navigate, navigateArticle } = useSiteNavigation();
  const { category } = use(params);
  const categoryLabel = categorySlugToLabel(category);

  return (
    <NewsCategoryPage
      category={categoryLabel}
      onNavigate={navigate as any}
      onReadArticle={navigateArticle}
    />
  );
}