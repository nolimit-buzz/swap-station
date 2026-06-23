export type SitePage =
  | "home"
  | "about"
  | "services"
  | "contact"
  | "locator"
  | "team"
  | "products"
  | "news"
  | "privacy"
  | "terms"
  | "lease-to-own"
  | "careers";

const pagePathMap: Record<SitePage, string> = {
  home: "/",
  about: "/about",
  services: "/services",
  contact: "/contact",
  locator: "/locator",
  team: "/team",
  products: "/products",
  news: "/news",
  privacy: "/privacy",
  terms: "/terms",
  "lease-to-own": "/lease-to-own",
  careers: "/careers",
};

export const pageToPath = (page: SitePage) => pagePathMap[page];

export const slugify = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[\'"`]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const categorySlugToLabel = (slug: string) =>
  decodeURIComponent(slug)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (match) => match.toUpperCase());
