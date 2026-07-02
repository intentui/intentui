import { JsonLd } from '@/components/json-ld'
import { PageContainer } from '@/components/page-container'
import { app } from '@/config/app'
import { createMetadata } from '@/lib/metadata'
import { Showcases } from '@/app/(app)/showcase/showcases'
import { Header, HeaderDescription, HeaderInner, HeaderTitle } from '@/components/header'
import { Cta } from '@/app/(app)/showcase/cta'

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
      <Header className="border-page border-b">
        <HeaderInner>
          <HeaderTitle>Intent UI in the Wild</HeaderTitle>
          <HeaderDescription>
            Real websites, apps, and products built with Intent UI.
          </HeaderDescription>
        </HeaderInner>
      </Header>
      <PageContainer>
        <Showcases />
        <div className="border-x border-t p-6">
          <Cta />
        </div>
      </PageContainer>
    </>
  )
}
