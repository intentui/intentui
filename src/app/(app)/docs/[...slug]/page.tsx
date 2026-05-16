import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Ads } from "@/components/ads"
import { DocRefs } from "@/components/doc-refs"
import { JsonLd } from "@/components/json-ld"
import { mdxComponents } from "@/components/mdx-components"
import { OpenIn } from "@/components/open-in"
import { Pager } from "@/components/pager"
import { Toc } from "@/components/toc"
import { Text } from "@/components/ui/text"
import { app } from "@/config/app"
import { ogImage } from "@/lib/og"
import { source } from "@/lib/source"
import { title } from "@/lib/utils"

export interface DocPageProps {
  params: Promise<{
    slug: string[]
  }>
}

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

export function generateStaticParams() {
  return source.generateParams()
}

function extractSegment(str: string): string | null {
  const segments = str.split("/")
  return segments.length === 4 ? title(segments[2]!) : title(segments[3]!)
}

export async function generateMetadata(props: DocPageProps): Promise<Metadata> {
  const params = await props.params
  const page = source.getPage(params.slug)

  if (!page) {
    return {}
  }
  const doc = page.data

  const ogSearchParams = new URLSearchParams()
  ogSearchParams.set("title", page.data.title)

  return {
    title: doc.title,
    description: doc.description,
    alternates: {
      canonical: `${app.url}${page.url}`,
    },
    openGraph: {
      title: `${doc.title} / Intent UI`,
      description: doc.description,
      type: "article",
      url: `${app.url}${page.url}`,
      siteName: app.name,
      locale: "en_US",
      images: [{ url: ogImage({ title: doc.title, description: doc.description }) }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${doc.title} / Intent UI`,
      description: doc.description,
      images: [{ url: ogImage({ title: doc.title, description: doc.description }) }],
      site: "@intentui",
      creator: `@${app.author.username}`,
    },
    authors: [
      {
        name: app.author.name,
        url: app.author.url,
      },
    ],
  }
}

function generateBreadcrumbs(slug: string[], pageTitle: string) {
  const items = [
    { name: "Home", url: app.url },
    { name: "Docs", url: `${app.url}/docs` },
  ]

  let path = "/docs"
  for (let i = 0; i < slug.length - 1; i++) {
    path += `/${slug[i]}`
    items.push({ name: title(slug[i]!), url: `${app.url}${path}` })
  }

  items.push({ name: pageTitle, url: `${app.url}${path}/${slug[slug.length - 1]}` })

  return items
}

export default async function Page(props: DocPageProps) {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page) {
    notFound()
  }
  const doc = page.data
  const MDX = doc.body
  const pageText = await doc.getText("raw")

  const breadcrumbs = generateBreadcrumbs(params.slug, doc.title)

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        headline: doc.title,
        description: doc.description,
        url: `${app.url}${page.url}`,
        author: {
          "@type": "Person",
          name: app.author.name,
          url: app.author.url,
        },
        publisher: {
          "@type": "Organization",
          name: app.name,
          url: app.url,
          logo: {
            "@type": "ImageObject",
            url: `${app.url}/icon.svg`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${app.url}${page.url}`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      },
    ],
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="min-w-0 max-w-3xl flex-auto px-4 py-8 sm:py-14 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-14">
        <div className="prose prose-blue dark:prose-invert prose-headings:mb-[0.3rem] max-w-[inherit] prose-headings:scroll-mt-24 prose-img:rounded-lg prose-pre:p-0">
          <div className="mx-auto max-w-2xl">
            <div className="not-prose mb-6 space-y-4 sm:space-y-6">
              <div className="font-mono text-primary-subtle-fg text-xs uppercase">
                {extractSegment(page.url)}
              </div>
              <div className="flex w-full items-center justify-between">
                <h1 className="flex-1 font-semibold text-3xl tracking-tight">{doc.title}</h1>
              </div>
              {doc.description ? (
                <Text className="max-w-2xl sm:text-base/6">{doc.description}</Text>
              ) : null}

              <div className="flex items-center gap-x-1.5">
                {doc.references && doc.references?.length > 0 && (
                  <DocRefs references={doc.references} />
                )}
                <OpenIn page={pageText} tree={source.pageTree} url={page.url} />
              </div>
            </div>
            <MDX components={mdxComponents} />

            <Ads className="mt-4 md:hidden" />

            <Pager tree={source.pageTree} url={page.url} />
          </div>
        </div>
      </div>
      <div className="hidden flex-col xl:flex">
        <div className="flex-1">
          <Toc items={page.data.toc} />
        </div>
        <Ads className="sticky right-0 bottom-8 mb-16 self-start" />
      </div>
    </>
  )
}
