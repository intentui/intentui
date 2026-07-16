import Link from 'next/link'
import { blog } from '#site/content'
import { JsonLd } from '@/components/json-ld'
import { PageContainer } from '@/components/page-container'
import { Avatar } from '@/components/ui/avatar'
import { app } from '@/config/app'
import { formatDate } from '@/lib/date'
import { createMetadata } from '@/lib/metadata'
import { Header, HeaderInner, HeaderTitle } from '@/components/header'
import { Text } from '@/components/ui/text'

export const metadata = createMetadata({
  title: 'Blog',
  description:
    'Articles about React, Next.js, UI design patterns, and building accessible web interfaces with Intent UI components.',
  path: '/blog',
  keywords: [
    'blog',
    'react tutorials',
    'nextjs articles',
    'ui design',
    'web development',
    'intent ui',
    'intentui',
  ],
})

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: app.url },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${app.url}/blog` },
    ],
  }

  return (
    <div>
      <JsonLd data={jsonLd} />
      <Header className="border-b border-page">
        <HeaderInner>
          <HeaderTitle>Blog</HeaderTitle>
        </HeaderInner>
      </Header>
      <PageContainer>
        <div className="border-x border-page">
          <div className="mx-auto flex flex-col">
            <div className="grid gap-px bg-page grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
              {blog
                .sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime())
                .map((item) => (
                  <div
                    className="relative aspect-16/17 flex flex-col bg-bg p-6 hover:bg-muted"
                    key={item.title}
                  >
                    <Link
                      href={`/blog/${item.info.path.replace('.mdx', '')}`}
                      className="absolute inset-0 size-full"
                    />
                    <div className="flex-1">
                      <h3 className="mb-2 tracking-tight text-2xl">{item.title}</h3>
                      <Text>
                        {item.description || 'No description available for this blog post.'}
                      </Text>
                    </div>
                    <div className="mt-4">
                      <div className="flex w-full items-center justify-between gap-x-2">
                        <div className="flex items-center gap-x-2">
                          <Avatar
                            alt={item.author}
                            src={`https://github.com/${item.author}.png`}
                            size="sm"
                          />
                          <strong className="font-semibold text-sm">{item.author}</strong>
                        </div>
                        <span className="font-mono text-muted-fg text-sm">
                          {formatDate(item.published)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}
