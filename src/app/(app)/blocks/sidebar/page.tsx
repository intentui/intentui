import { Sandbox } from '@/app/(app)/blocks/sandbox'
import { JsonLd } from '@/components/json-ld'
import { app } from '@/config/app'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Blocks of Sidebar',
  description:
    'Discover flexible sidebar design blocks built for dashboards and complex apps. Mix sections, icons, and nested menus, then tailor the layout to your product fast.',
  path: '/blocks/sidebar',
  type: 'article',
  keywords: [
    'sidebar blocks',
    'navigation sidebar',
    'dashboard sidebar',
    'responsive sidebar',
    'react sidebar',
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
      { '@type': 'ListItem', position: 2, name: 'Blocks', item: `${app.url}/blocks` },
      { '@type': 'ListItem', position: 3, name: 'Sidebar', item: `${app.url}/blocks/sidebar` },
    ],
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <Sandbox
        registries={[
          'sidebar-01',
          'sidebar-02',
          'sidebar-03',
          'sidebar-04',
          'sidebar-05',
          'sidebar-06',
          'sidebar-07',
          'sidebar-09',
          'sidebar-12',
          'sidebar-15',
          'sidebar-16',
          'sidebar-17',
          'sidebar-18',
          'sidebar-19',
        ]}
      />
    </>
  )
}
