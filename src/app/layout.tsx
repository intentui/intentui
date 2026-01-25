import { DeferredAnalytics } from "@/components/deferred-analytics"
import { Providers } from "@/components/providers"
import { app, META_THEME_COLORS } from "@/config/app"
import "@/styles/app.css"
import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"
import { Suspense } from "react"
import { AurelieAnalytics } from "@/components/aurelie-analytics"
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
    name: app.name,
    url: app.url,
    logo: `${app.url}/icon.svg`,
  }

  return (
    <html
      dir="ltr"
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <head>
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
        <DeferredAnalytics />
      </body>
    </html>
  )
}
