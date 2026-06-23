"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import { pageToPath, type SitePage } from "../lib/site-routes";

function getPageFromPath(pathname: string): SitePage {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/services")) return "services";
  if (pathname.startsWith("/products")) return "products";
  if (pathname.startsWith("/lease-to-own")) return "lease-to-own";
  if (pathname.startsWith("/contact")) return "contact";
  if (pathname.startsWith("/team")) return "team";
  if (pathname.startsWith("/careers")) return "careers";
  if (pathname.startsWith("/privacy")) return "privacy";
  if (pathname.startsWith("/terms")) return "terms";
  if (pathname.startsWith("/locator")) return "locator";
  if (pathname.startsWith("/news")) return "news";
  return "home";
}

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const currentPage = getPageFromPath(pathname);
  const isLocatorPage = currentPage === "locator";
  const isSingleNewsPage = pathname.startsWith("/news/") && !pathname.startsWith("/news/category/") && pathname !== "/news";
  const headerPage = isSingleNewsPage
    ? "news"
    : currentPage === "privacy" || currentPage === "terms"
      ? "home"
      : currentPage;

  return (
    <div className="min-h-screen selection:bg-emerald-600 selection:text-white antialiased bg-[#020617]">
      <Header
        scrolled={isLocatorPage ? true : scrolled}
        currentPage={headerPage as any}
        onNavigate={(page) => router.push(pageToPath(page as SitePage))}
        showThemeToggle={false}
        isDarkMode={false}
        onToggleTheme={() => {}}
      />
      <main className="relative">{children}</main>
      {!isLocatorPage && <Footer onNavigate={(page) => router.push(pageToPath(page as SitePage))} />}
    </div>
  );
}