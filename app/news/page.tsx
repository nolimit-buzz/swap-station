"use client";

import NewsPage from "../../components/NewsPage";
import { useSiteNavigation } from "../../components/useSiteNavigation";

export default function Page() {
  const { navigate, navigateArticle, navigateCategory } = useSiteNavigation();
  return (
    <NewsPage
      onNavigate={navigate as any}
      onReadArticle={navigateArticle}
      onNavigateToCategory={navigateCategory}
    />
  );
}