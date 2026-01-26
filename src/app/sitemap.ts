import type { MetadataRoute } from "next"
import { app } from "@/config/app"
import { source } from "@/lib/source"

export default function sitemap(): MetadataRoute.Sitemap {
  const docs = source.pageTree
  const lastModified = new Date()
  return [
    {
      url: app.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${app.url}/components`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${app.url}/icons`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${app.url}/colors`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${app.url}/blocks`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${app.url}/blocks/navbar`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${app.url}/blocks/sidebar`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${app.url}/blocks/auth`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${app.url}/blocks/chart`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${app.url}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${app.url}/showcase`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${app.url}/sponsor`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    // @ts-expect-error
    ...extractUrls(docs.children).map((i) => ({
      ...i,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
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
        url: `${app.url}${node.url}`,
      })
    }
    if (node.children?.length) {
      node.children.forEach(traverse)
    }
  }

  data.forEach(traverse)

  return urls
}
