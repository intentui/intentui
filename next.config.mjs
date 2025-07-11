import { createMDX } from "fumadocs-mdx/next"
const withMDX = createMDX()
/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  devIndicators: false,
  experimental: {
    reactCompiler: true,
  },
  async redirects() {
    return [
      {
        source: "/docs/2.x/:path*",
        destination: "/docs/:path*",
        permanent: true,
      },
      {
        source: "/docs/components/layouts/aside",
        destination: "/docs/components/layouts/sidebar",
        permanent: true,
      },
      {
        source: "/docs/components/charts/setup",
        destination: "/docs/components/charts/area-chart",
        permanent: true,
      },
      {
        source: "/docs/components/surfaces/chart",
        destination: "/docs/components/charts/area-chart",
        permanent: true,
      },
      {
        source: "/docs/components/collections/accordion",
        destination: "/docs/components/navigation/disclosure-group",
        permanent: true,
      },
       {
        source: '/blocks/:path*',
        destination: '/pre-blocks/:path*',
        permanent: true,
      },
    ]
  },
}

export default withMDX(config)
