import { createMDX } from "fumadocs-mdx/next"
const withMDX = createMDX()
/** @type {import("next").NextConfig} */
const config = {
  reactCompiler: true,
  experimental: {
    viewTransition: true,
  },
  devIndicators: false,
  outputFileTracingIncludes: {
    "/**": ["./src/content/**", "./content/**"]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        "node:fs": false,
        path: false,
      }
    }
    return config
  },
  async rewrites() {
    return [
      { source: "/r/:slug", destination: "/r/:slug.json" },
      { source: "/r/hooks/:slug", destination: "/r/:slug.json" },
      { source: "/r/lib/:slug", destination: "/r/:slug.json" },
      {
        source: "/docs/:path*.md",
        destination: "/llm/:path*",
      },
    ]
  },
  async redirects() {
    return [
      {
        source: "/radio",
        destination: "/docs/components/forms/radio-group",
        permanent: true,
      },
      {
        source: "/docs/components/charts/area-chart",
        destination: "/docs/components/visualizations/area-chart",
        permanent: true,
      },
      {
        source: "/themes",
        destination: "https://design.intentui.com/themes",
        permanent: true,
      },
      {
        source: "/docs",
        destination: "/docs/getting-started/installation",
        permanent: false,
      },
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
        source: "/docs/components/collections/choicebox",
        destination: "/docs/components/collections/choice-box",
        permanent: true,
      },
      {
        source: "/choicebox",
        destination: "/docs/components/collections/choice-box",
        permanent: true,
      },
      {
        source: "/docs/components/charts/setup",
        destination: "/docs/components/visualizations/area-chart",
        permanent: true,
      },
      {
        source: "/docs/components/surfaces/chart",
        destination: "/docs/components/visualizations/area-chart",
        permanent: true,
      },
      {
        source: "/docs/components/collections/accordion",
        destination: "/docs/components/navigation/disclosure-group",
        permanent: true,
      }
    ]
  },
}

export default withMDX(config)
