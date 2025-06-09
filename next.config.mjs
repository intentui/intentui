import { createMDX } from "fumadocs-mdx/next"
const withMDX = createMDX()
/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  // devIndicators: false,
  experimental: {
    reactCompiler: true,
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
        destination: "/docs/2.x/:slug*",
        permanent: false,
      },
      {
        source: "/docs/2.x/components/layouts/aside",
        destination: "/docs/2.x/components/layouts/sidebar",
        permanent: true,
      },
      {
        source: "/docs/2.x/components/charts/setup",
        destination: "/docs/2.x/components/charts/area-chart",
        permanent: true,
      },
      {
        source: "/docs/2.x/components/surfaces/chart",
        destination: "/docs/2.x/components/charts/area-chart",
        permanent: true,
      },
      {
        source: "/docs/2.x/components/collections/accordion",
        destination: "/docs/2.x/components/navigation/disclosure-group",
        permanent: true,
      },
    ]
  },
}

export default withMDX(config)
