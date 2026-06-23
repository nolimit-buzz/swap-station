"use client";

import { useRouter } from "next/navigation";
import Hero from "./Hero";
import PainSolution from "./PainSolution";
import WhatBuilding from "./WhatBuilding";
import HowItWorks from "./HowItWorks";
import Services from "./Services";
import MetricsSection from "./MetricsSection";
import GetStartedSection from "./GetStarted";
import Ecosystem from "./Ecosystem";
import NewsSection from "./NewsSection";
import { pageToPath, slugify, type SitePage } from "../lib/site-routes";
import type { NewsItem } from "./NewsPage";

export default function HomePage() {
  const router = useRouter();

  const navigate = (page: SitePage | "privacy" | "terms") => {
    router.push(pageToPath(page as SitePage));
  };

  const handleReadArticle = (article: NewsItem) => {
    const slug = article.slug || slugify(article.title);
    router.push(`/news/${slug}`);
  };

  const handleNavigateToCategory = (category: string) => {
    router.push(`/news/category/${slugify(category)}`);
  };

  return (
    <div className="bg-[#020617]">
      <Hero />
      <WhatBuilding />
      <HowItWorks />
      <PainSolution />
      <Services />
      <MetricsSection onNavigate={(page) => navigate(page as SitePage)} />
      <NewsSection
        onReadArticle={handleReadArticle}
        onNavigate={(page) => navigate(page as SitePage)}
        onNavigateToCategory={handleNavigateToCategory}
      />
      <GetStartedSection onNavigate={(page) => navigate(page as SitePage)} />
      <Ecosystem />
    </div>
  );
}