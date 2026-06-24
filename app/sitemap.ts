import type { MetadataRoute } from "next";
import { siteUrl } from "../lib/seo";

const routes = [
  "/",
  "/about",
  "/careers",
  "/contact",
  "/lease-to-own",
  "/locator",
  "/news",
  "/privacy",
  "/products",
  "/services",
  "/team",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: siteUrl + route,
    lastModified,
    changeFrequency: route === "/news" ? "daily" : "weekly",
    priority: route === "/" ? 1 : route === "/news" ? 0.8 : 0.7,
  }));
}
