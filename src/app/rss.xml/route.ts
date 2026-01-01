import { generateRegistryRssFeed, type UrlResolverByItem } from "@wandry/analytics-sdk"
import type { NextRequest } from "next/server"
import { docs } from "#site/content"

export const revalidate = 3600

export async function GET(request: NextRequest) {
  const baseUrl = new URL(request.url).origin

  const rssXml = await generateRegistryRssFeed({
    baseUrl,
    componentsUrl: ((item) => {
      const originalUrl = docs
        .map((i) => i.info.path)
        .find((i) => i?.split("/").at(-1)?.split(".")[0] === item.title)
        ?.replace(".mdx", "")
      return `/docs/${originalUrl?.toLowerCase()}`
    }) as UrlResolverByItem,

    excludeItemTypes: ["registry:style", "registry:block", "registry:page"],
    rss: {
      title: "@intentui",
      description: "Subscribe to @intentui updates",
      link: "https://intentui.com",
      pubDateStrategy: "githubLastEdit",
    },
    github: {
      owner: "intentui",
      repo: "intentui",
      token: process.env.GITHUB_TOKEN,
    },
  })

  if (!rssXml) {
    return new Response("RSS feed not available", {
      status: 404,
      headers: { "Content-Type": "text/plain" },
    })
  }

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  })
}
