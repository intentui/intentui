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
    },
    {
      url: `${app.url}/components`,
      lastModified,
    },
    {
      url: `${app.url}/icons`,
      lastModified,
    },
    {
      url: `${app.url}/colors`,
      lastModified,
    },
    {
      url: `${app.url}/blocks`,
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
