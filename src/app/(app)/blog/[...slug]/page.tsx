import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { blog } from '#site/content'
import type { DocPageProps } from '@/app/(docs)/docs/[...slug]/page'
import { JsonLd } from '@/components/json-ld'
import { mdxComponents } from '@/components/docs/mdx-components'
import { Toc } from '@/components/toc'
import { app } from '@/config/app'
import { formatDate } from '@/lib/date'
import { ogImage } from '@/lib/og'
import { PageContainer } from '@/components/page-container'
import { Header, HeaderDescription, HeaderInner, HeaderTitle } from '@/components/header'

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
      <Header className="border-b">
        <HeaderInner>
          {article.published && (
            <div className="font-mono text-blue-600 text-xs uppercase dark:text-blue-400">
              {formatDate(article.published)}
            </div>
          )}
          <HeaderTitle className="mt-6">{article.title}</HeaderTitle>
          <HeaderDescription>{article.description ? article.description : null}</HeaderDescription>
        </HeaderInner>
      </Header>
      <PageContainer>
        <div className="xl:border-x border-page gap-16">
          <div className="flex items-start w-full min-w-0">
            <Toc
              className="sticky top-14 hidden shrink-0 py-6 xl:block"
              context="blog"
              items={article.toc}
            />
            <div className="typeset w-full min-w-0 xl:border-l border-page xl:pl-32 xl:pr-84 xl:pt-4 xl:pb-12 typeset-docs">
              <MDX components={mdxComponents} />
            </div>
          </div>
        </div>
      </PageContainer>
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
