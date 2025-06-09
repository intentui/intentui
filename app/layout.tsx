import React from "react"

import { Providers } from "@/components/providers"
import { siteConfig } from "@/resources/config/site"
import { cn } from "@/resources/lib/utils"
import "@/resources/styles/app.css"
import { OpenpanelProvider } from "@openpanel/nextjs"
import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
  title: {
    default: `${siteConfig.name}`,
    template: `%s / ${siteConfig.name}`
  },
  description: siteConfig.description,
  alternates: {
    canonical: "./"
  },
  keywords: [
    "React",
    "Next.js",
    "Inertia.js",
    "Tailwind CSS",
    "UI Components",
    "UI Kit",
    "UI Library",
    "UI Framework",
    "Justd",
    "React Aria",
    "React Aria Components",
    "Server Components",
    "React Components",
    "Next UI Components",
    "UI Design System",
    "UI for Laravel Inertia",
    "Laravel Inertia UI",
    "Laravel Inertia Components",
    "Laravel Inertia UI Components",
    "Laravel Inertia UI Kit",
    "Laravel Inertia UI Library",
    "Laravel Inertia UI Framework",
    "Laravel Inertia Justd",
    "Laravel Justd",
    "Justd Components",
    "Justd UI Components",
    "Justd UI Kit",
    "Justd UI Library",
    "Justd UI Framework",
    "Justd Laravel Inertia",
    "Justd Laravel",
    "Justd Inertia"
  ],
  manifest: "/manifest.json",
  authors: [
    {
      name: "irsyadadl",
      url: "https://x.com/irsyadadl"
    }
  ],
  creator: "irsyadadl"
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ],
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1
}

const fontSans = localFont({
  src: [{ path: "./fonts/Inter.woff2" }],
  variable: "--font-sans"
})

const fontMono = localFont({
  src: [{ path: "./fonts/GeistMonoVF.woff" }, { path: "./fonts/GeistMonoVF.woff2" }],
  variable: "--font-mono"
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html dir="ltr" lang="en" suppressHydrationWarning>
      <head>
        <script
          defer
          data-site-id="1x.intentui.com"
          src="https://assets.onedollarstats.com/tracker.js"
        ></script>
      </head>
      <body
        className={cn(
          "min-h-screen bg-bg font-sans antialiased",
          fontSans.variable,
          fontMono.variable
        )}
      >
        <Providers>
          {children}
          {process.env.NODE_ENV === "production" && (
            <OpenpanelProvider
              url={process.env.ANALYTICS_CLIENT_URL as string}
              clientSecret={process.env.ANALYTICS_CLIENT_SECRET as string}
              clientId={process.env.ANALYTICS_CLIENT_ID as string}
              trackScreenViews={true}
              trackAttributes={true}
            />
          )}
        </Providers>
      </body>
    </html>
  )
}
