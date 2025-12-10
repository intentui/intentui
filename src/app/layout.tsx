import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Providers } from "@/components/providers"
import { META_THEME_COLORS, siteConfig } from "@/config/site"
import "@/styles/app.css"
import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"
import { Suspense } from "react"
import { AurelieAnalytics } from "@/components/aurelie-analytics"
import { Toast } from "@/components/ui/toast"

export const metadata: Metadata = {
  metadataBase: new URL("https://intentui.com"),
  title: {
    default: `${siteConfig.name}`,
    template: `%s / ${siteConfig.name}`,
  },

  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: "https://intentui.com",
    siteName: siteConfig.name,
  },
  description: siteConfig.description,
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
    "Intent",
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
    "Intent Laravel",
    "Intent Inertia",
    "Intent UI",
  ],
  manifest: "/manifest.json",
  authors: [
    {
      name: "irsyad",
      url: "https://x.com/irsyad",
    },
  ],
  creator: "irsyad",
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

const fontMono = localFont({
  src: [
    {
      path: "./fonts/GeistMono[wght].woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-geist-mono",
})

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<Props>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Intent UI",
    url: "https://intentui.com",
    logo: "https://intentui.com/icon.svg",
  }

  return (
    <html
      dir="ltr"
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script defer src="https://assets.onedollarstats.com/stonks.js" />
        <script
          async
          src={process.env.NEXT_PUBLIC_AURELIE_URL ?? "https://app.useaurelie.com/florin.js?v1"}
          data-site-key={process.env.NEXT_PUBLIC_AURELIE_PUBLIC_KEY}
        ></script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
                if (localStorage.layout) {
                  document.documentElement.classList.add('layout-' + localStorage.layout)
                }
              } catch (_) {}
            `,
          }}
        />
        <meta name="theme-color" content={META_THEME_COLORS.light} />
      </head>
      <body className="min-h-svh font-sans antialiased">
        <Providers>
          <Toast />
          <main>{children}</main>
        </Providers>
        <Suspense>
          <AurelieAnalytics />
        </Suspense>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
