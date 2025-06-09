import { createMDX } from "fumadocs-mdx/next"
const versionOneUrl = process.env.NEXT_PUBLIC_APP_V1_URL || "http://localhost:3000"

const withMDX = createMDX()
/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  // devIndicators: false,
  experimental: {
    reactCompiler: true,
  },
  async rewrites() {
    return [
      {
        source: "/docs/1.x/:slug*",
        destination: `${versionOneUrl}/docs/1.x/:slug*`,
      },
    ]
  },
  async redirects() {
    return [
      {
        source: "/docs/:slug((?![12]\\.x/).*)",
        missing: [
          {
            type: "header",
            key: "x-no-redirect",
          },
        ],
        destination: "/docs/3.x/:slug*",
        permanent: false,
      },
      {
        source: "/docs/3.x/components/layouts/aside",
        destination: "/docs/3.x/components/layouts/sidebar",
        permanent: true,
      },
      {
        source: "/docs/3.x/components/charts/setup",
        destination: "/docs/3.x/components/charts/area-chart",
        permanent: true,
      },
      {
        source: "/docs/3.x/components/surfaces/chart",
        destination: "/docs/3.x/components/charts/area-chart",
        permanent: true,
      },
      {
        source: "/docs/3.x/components/collections/accordion",
        destination: "/docs/3.x/components/navigation/disclosure-group",
        permanent: true,
      },
    ]
  },
}

export default withMDX(config)
