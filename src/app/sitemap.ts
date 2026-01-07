import type { MetadataRoute } from "next"
import { siteConfig } from "@/config/site"
import { source } from "@/lib/source"

export default function sitemap(): MetadataRoute.Sitemap {
  const docs = source.pageTree
  const lastModified = new Date()
  return [
    {
      url: siteConfig.url,
      lastModified,
    },
    {
      url: `${siteConfig.url}/components`,
      lastModified,
    },
    {
      url: `${siteConfig.url}/icons`,
      lastModified,
    },
    {
      url: `${siteConfig.url}/colors`,
      lastModified,
    },
    {
      url: `${siteConfig.url}/blocks`,
      lastModified,
    },
    //   @ts-expect-error
    ...extractUrls(docs.children).map((i) => ({
      ...i,
      lastModified,
    })),
  ]
}

type DocNode = {
  type: string
  name: string
  url?: string
  lastModified: Date
  children: DocNode[]
  $ref?: Record<string, any>
}

function extractUrls(data: DocNode[]): { url: string }[] {
  const urls: { url: string }[] = []

  const traverse = (node: DocNode): void => {
    if (node.type === "page" && node.url) {
      urls.push({
        url: `${siteConfig.url}${node.url}`,
      })
    }
    if (node.children?.length) {
      node.children.forEach(traverse)
    }
  }

  data.forEach(traverse)

  return urls
}
