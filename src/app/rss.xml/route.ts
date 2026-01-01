import { generateRegistryRssFeed } from "@wandry/analytics-sdk"
import type { NextRequest } from "next/server"

export const revalidate = 3600

export async function GET(request: NextRequest) {
  const baseUrl = new URL(request.url).origin

  const rssXml = await generateRegistryRssFeed({
    baseUrl,
    rss: {
      title: "@intentui",
      description: "Subscribe to @intentui updates",
      link: "https://intentui.com",
      pubDateStrategy: "githubLastEdit",
    },
    github: {
      owner: "your-username",
      repo: "your-repo",
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
