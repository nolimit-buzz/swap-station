import type { Metadata } from "next";

export const siteName = "SwapStation Mobility";
export const siteUrl = "https://swapstation.mobility";
export const siteMetadataBase = new URL(siteUrl);
export const defaultSocialImage = "/swapstation.jpg";

type BuildMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  absoluteTitle?: boolean;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path: routePath,
  image = defaultSocialImage,
  absoluteTitle = false,
  noIndex = false,
}: BuildMetadataOptions): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: routePath,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
    openGraph: {
      title,
      description,
      url: routePath,
      siteName,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function humanizeSlug(value: string) {
  return decodeURIComponent(value)
    .replace(/-/g, " ")
    .replace(/w/g, (character) => character.toUpperCase());
}
