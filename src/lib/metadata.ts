import type { Metadata } from "next"
import { app } from "@/config/app"
import { ogImage } from "@/lib/og"

export interface CreateMetadataOptions {
  title: string
  description: string
  path?: string
  image?: string
  keywords?: string[]
  noindex?: boolean
  type?: "website" | "article"
}

export function createMetadata({
  title,
  description,
  path = "",
  image,
  keywords = [],
  noindex = false,
  type = "website",
}: CreateMetadataOptions): Metadata {
  const url = `${app.url}${path}`
  const ogImageUrl = image || ogImage({ title, description })
  const fullTitle = title === app.name ? title : `${title} / ${app.name}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    keywords: keywords.length > 0 ? keywords : undefined,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: app.name,
      images: [{ url: ogImageUrl }],
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImageUrl],
      creator: `@${app.author.username}`,
    },
    ...(noindex && { robots: { index: false, follow: false } }),
  }
}
