import Link from 'next/link'
import { blog } from '#site/content'
import { JsonLd } from '@/components/json-ld'
import { PageContainer } from '@/components/page-container'
import { Avatar } from '@/components/ui/avatar'
import { app } from '@/config/app'
import { formatDate } from '@/lib/date'
import { createMetadata } from '@/lib/metadata'

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
      <PageContainer className="py-6 sm:pb-12">
        <div className="mx-auto flex max-w-2xl flex-col">
          <h1 className="-mt-8 py-8 font-semibold text-2xl sm:px-6 sm:text-5xl md:mt-0">
            Bl
            <span className="text-muted-fg">og</span>
          </h1>
          {blog
            .sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime())
            .map((item) => (
              <div
                className="relative mb-12 flex flex-col rounded-2xl sm:p-8 md:mb-0 md:hover:bg-secondary"
                key={item.title}
              >
                <Link
                  href={`/blog/${item.info.path.replace('.mdx', '')}`}
                  className="absolute inset-0 size-full"
                />
                <div>
                  <h3 className="mb-2 font-semibold text-2xl">{item.title}</h3>
                  <p className="text-pretty text-muted-fg text-sm/6">
                    {item.description || 'No description available for this blog post.'}
                  </p>
                </div>
                <div className="mt-4 sm:mt-6">
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
      </PageContainer>
    </div>
  )
}
