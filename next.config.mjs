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
