import { AppBootstrap } from "@/components/app-bootstrap"
import { DeferredAnalytics } from "@/components/deferred-analytics"
import { JsonLd } from "@/components/json-ld"
import { app, META_THEME_COLORS } from "@/config/app"
import "@/styles/app.css"
import type { Metadata, Viewport } from "next"
import { JetBrains_Mono } from "next/font/google"
import localFont from "next/font/local"
import { headers } from "next/headers"
import { Suspense } from "react"
import { AurelieAnalytics } from "@/components/aurelie-analytics"
import { Providers } from "@/components/providers"
import { Toast } from "@/components/ui/toast"

export const metadata: Metadata = {
  metadataBase: new URL(app.url),
  title: {
    default: `${app.name}`,
    template: `%s / ${app.name}`,
  },
  alternates: {
    canonical: "./",
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
    "Intent UI",
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
    "Laravel Inertia Intent",
    "Laravel Intent",
    "Intent Components",
    "Intent UI Components",
    "Intent UI Kit",
    "Intent UI Library",
    "Intent UI Framework",
    "Intent Laravel Inertia",
    "intent ui laravel",
    "Intent UI Inertia",
    "Intent UI",
  ],
  manifest: "/manifest.json",
  authors: [
    {
      name: app.author.name,
      url: app.author.url,
    },
  ],
  creator: app.author.username,
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
}

const fontSans = localFont({
  src: [
    {
      path: "./fonts/InterVariable.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/InterVariable-Italic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-inter",
})

const fontMono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-docs-mono",
})

interface Props {
  children: React.ReactNode
}

export default async function RootLayout({ children }: Readonly<Props>) {
  const acceptLanguage = (await headers()).get("accept-language")
  const lang = acceptLanguage?.split(/[,;]/)[0] || "en-US"

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${app.url}/#organization`,
        name: app.name,
        url: app.url,
        logo: {
          "@type": "ImageObject",
          url: `${app.url}/icon.svg`,
        },
        description: app.description,
        sameAs: [app.links.twitter, app.links.github, app.links.discord],
      },
      {
        "@type": "WebSite",
        "@id": `${app.url}/#website`,
        url: app.url,
        name: app.name,
        publisher: { "@id": `${app.url}/#organization` },
      },
      {
        "@type": "SoftwareSourceCode",
        name: app.name,
        description: app.description,
        codeRepository: app.repo.url,
        programmingLanguage: ["TypeScript", "React"],
        runtimePlatform: "Node.js",
        license: "https://opensource.org/licenses/MIT",
      },
    ],
  }

  return (
    <html
      dir="ltr"
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <JsonLd data={structuredData} />
        <meta name="theme-color" content={META_THEME_COLORS.light} />
      </head>
      <body className="min-h-svh font-sans antialiased">
        <Providers lang={lang}>
          <AppBootstrap />
          <Toast />
          <main>{children}</main>
        </Providers>
        <Suspense>
          <AurelieAnalytics />
        </Suspense>
        <DeferredAnalytics />
      </body>
    </html>
  )
}
