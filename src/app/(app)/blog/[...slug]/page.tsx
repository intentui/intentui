import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { blog } from '#site/content'
import type { DocPageProps } from '@/app/(app)/docs/[...slug]/page'
import { JsonLd } from '@/components/json-ld'
import { mdxComponents } from '@/components/mdx-components'
import { Toc } from '@/components/toc'
import { app } from '@/config/app'
import { formatDate } from '@/lib/date'
import { ogImage } from '@/lib/og'

export default async function Page(props: DocPageProps) {
  const { slug } = await props.params
  const article = blog.find((i) => i.info.path.replace('.mdx', '') === slug[0])

  if (!article) {
    notFound()
  }

  const MDX = article.body
  const articleUrl = `${app.url}/blog/${slug[0]}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        url: articleUrl,
        datePublished: article.published,
        author: {
          '@type': 'Person',
          name: article.author,
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
          '@id': articleUrl,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: app.url },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${app.url}/blog` },
          { '@type': 'ListItem', position: 3, name: article.title, item: articleUrl },
        ],
      },
    ],
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="min-w-0 max-w-2xl flex-auto px-4 pt-16 pb-32 lg:max-w-none lg:pr-0">
        <main className="prose prose-blue dark:prose-invert prose-headings:mb-[0.3rem] max-w-[inherit] prose-headings:scroll-mt-24 prose-img:rounded-lg prose-pre:p-0">
          <div className="-mx-4 sm:mx-0">
            <div className="not-prose relative inset-shadow-xs isolate -mt-8 overflow-hidden p-4 ring-1 ring-fg/5 sm:mt-0 sm:rounded-xl sm:p-10 sm:ring-inset dark:ring-fg/10">
              {article.published && (
                <div className="font-mono text-blue-600 text-xs uppercase dark:text-blue-400">
                  {formatDate(article.published)}
                </div>
              )}

              <h1 className="mt-2 font-semibold text-2xl tracking-tight sm:text-3xl">
                {article.title}
              </h1>
              {article.description ? (
                <p className="mt-2.5 text-pretty text-base text-fg/60 leading-relaxed">
                  {article.description}
                </p>
              ) : null}
            </div>
          </div>

          <Toc className="mt-4 block sm:mt-8 xl:hidden" items={article.toc} />
          <MDX components={mdxComponents} />
        </main>
      </div>
      <Toc className="hidden xl:block" items={article.toc} />
    </>
  )
}

export async function generateMetadata(props: DocPageProps): Promise<Metadata> {
  const { slug } = await props.params
  const article = blog.find((i) => i.info.path.replace('.mdx', '') === slug[0])

  if (!article) {
    return {}
  }

  const articleUrl = `${app.url}/blog/${slug[0]}`
  const ogImageUrl = ogImage({ title: article.title, description: article.description })

  return {
    title: article.title,
    description: article.description,
    applicationName: app.name,
    category: 'Blog',
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: `${article.title} / Intent UI`,
      description: article.description,
      type: 'article',
      url: articleUrl,
      siteName: app.name,
      locale: 'en_US',
      publishedTime:
        article.published instanceof Date ? article.published.toISOString() : article.published,
      ...(article.author && { authors: [article.author] }),
      images: [{ url: ogImageUrl }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} / Intent UI`,
      description: article.description,
      images: [ogImageUrl],
      site: '@intentui',
      creator: `@${app.author.username}`,
    },
    keywords: [
      article.title,
      'react',
      'next.js',
      'tailwind css',
      'ui components',
      'intent ui',
      'intentui',
    ],
  }
}
