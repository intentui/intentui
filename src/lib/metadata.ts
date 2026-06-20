import type { Metadata } from 'next'
import { app } from '@/config/app'
import { ogImage } from '@/lib/og'

export interface CreateMetadataOptions {
  title: string
  description: string
  path?: string
  image?: string | null
  keywords?: string[]
  noindex?: boolean
  type?: 'website' | 'article'
}

export function createMetadata({
  title,
  description,
  path = '',
  image,
  keywords = [],
  noindex = false,
  type = 'website',
}: CreateMetadataOptions): Metadata {
  const url = `${app.url}${path}`
  const isHomePage = title === app.name
  const fullTitle = isHomePage ? title : `${title} / ${app.name}`

  const shouldIncludeImage = image !== null
  const ogImageUrl = image === null ? undefined : image || ogImage({ title, description })

  return {
    title: isHomePage ? { absolute: title } : title,
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
      locale: 'en_US',
      ...(shouldIncludeImage && ogImageUrl && { images: [{ url: ogImageUrl }] }),
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      ...(shouldIncludeImage && ogImageUrl && { images: [ogImageUrl] }),
      site: '@intentui',
      creator: `@${app.author.username}`,
    },
    ...(noindex && { robots: { index: false, follow: false } }),
  }
}
