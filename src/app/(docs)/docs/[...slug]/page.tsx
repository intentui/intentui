import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Ads } from '@/components/docs/ads'
import { DocRefs } from '@/components/docs/doc-refs'
import { JsonLd } from '@/components/json-ld'
import { mdxComponents } from '@/components/docs/mdx-components'
import { OpenIn } from '@/components/docs/open-in'
import { Pager } from '@/components/docs/pager'
import { Toc } from '@/components/toc'
import { app } from '@/config/app'
import { ogImage } from '@/lib/og'
import { source } from '@/lib/source'
import { title } from '@/lib/utils'

export interface DocPageProps {
  params: Promise<{
    slug: string[]
  }>
}

export const revalidate = false
export const dynamic = 'force-static'
export const dynamicParams = false

export function generateStaticParams() {
  return source.generateParams()
}

export async function generateMetadata(props: DocPageProps): Promise<Metadata> {
  const params = await props.params
  const page = source.getPage(params.slug)

  if (!page) {
    return {}
  }
  const doc = page.data

  const ogSearchParams = new URLSearchParams()
  ogSearchParams.set('title', page.data.title)

  return {
    title: doc.title,
    description: doc.description,
    alternates: {
      canonical: `${app.url}${page.url}`,
    },
    openGraph: {
      title: `${doc.title} / Intent UI`,
      description: doc.description,
      type: 'article',
      url: `${app.url}${page.url}`,
      siteName: app.name,
      locale: 'en_US',
      images: [{ url: ogImage({ title: doc.title, description: doc.description }) }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${doc.title} / Intent UI`,
      description: doc.description,
      images: [{ url: ogImage({ title: doc.title, description: doc.description }) }],
      site: '@intentui',
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
    { name: 'Home', url: app.url },
    { name: 'Docs', url: `${app.url}/docs` },
  ]

  let path = '/docs'
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
  const pageText = await doc.getText('raw')

  const breadcrumbs = generateBreadcrumbs(params.slug, doc.title)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        headline: doc.title,
        description: doc.description,
        url: `${app.url}${page.url}`,
        author: {
          '@type': 'Person',
          name: app.author.name,
          url: app.author.url,
        },
        publisher: {
          '@type': 'Organization',
          name: app.name,
          url: app.url,
          logo: {
            '@type': 'ImageObject',
            url: `${app.url}/icon.svg`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${app.url}${page.url}`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      },
    ],
  }

  return (
    <div className="flex w-full items-start">
      <JsonLd data={jsonLd} />
      {/* Center */}
      <div className="w-full min-w-0 border-page py-8 sm:pb-24 sm:pt-10 xl:border-x">
        <div className="mx-auto xl:max-w-3xl sm:px-6">
          <div className="mb-3 flex flex-col justify-between sm:flex-row gap-6 sm:items-center sm:mb-12">
            <h1 className="flex-1 font-normal text-3xl tracking-tight">{doc.title}</h1>
            <div className="flex items-center gap-x-1.5">
              {doc.references && doc.references?.length > 0 && (
                <DocRefs references={doc.references} />
              )}
              <OpenIn page={pageText} url={page.url} />
            </div>
          </div>
          <div className="typeset typeset-docs">
            <MDX components={mdxComponents} />
          </div>

          <Ads className="xl:hidden mt-6 *:rounded-3xl *:overflow-hidden *:border-t-0" />

          <Pager tree={source.pageTree} url={page.url} />
        </div>
      </div>

      {/* Right side */}
      <div className="sticky top-16 hidden flex-1 flex-col xl:flex">
        <Toc items={page.data.toc} />
        <Ads />
      </div>
    </div>
  )
}
