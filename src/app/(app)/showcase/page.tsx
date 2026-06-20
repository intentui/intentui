import { JsonLd } from '@/components/json-ld'
import { PageContainer } from '@/components/page-container'
import { Heading } from '@/components/ui/heading'
import { app } from '@/config/app'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Showcase',
  description:
    'Discover projects and websites built with Intent UI. Explore real-world applications showcasing our accessible React components and design patterns.',
  path: '/showcase',
  keywords: [
    'showcase',
    'examples',
    'projects',
    'websites',
    'intent ui showcase',
    'react projects',
    'intent ui',
    'intentui',
  ],
})

export default async function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: app.url },
      { '@type': 'ListItem', position: 2, name: 'Showcase', item: `${app.url}/showcase` },
    ],
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="border-b bg-muted/50 py-6 sm:py-12">
        <PageContainer>
          <div className="flex items-center justify-between">
            <Heading>Showcase</Heading>
          </div>
        </PageContainer>
      </div>

      <PageContainer className="py-4 sm:py-16">Coming soon</PageContainer>
    </>
  )
}
