import type { MetadataRoute } from "next"
import { siteConfig } from "@/config/site"
import { source } from "@/lib/source"

export default function sitemap(): MetadataRoute.Sitemap {
  const docs = source.pageTree
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}/components`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}/icons`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}/colors`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}/themes`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}/blocks`,
      lastModified: new Date(),
    },
    //   @ts-ignore
    ...extractUrls(docs.children[0].children).map((i) => ({ ...i, lastModified: new Date() })),
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
    } else if (node.children) {
      node.children.forEach(traverse)
    }
  }

  data.forEach(traverse)

  return urls
}
