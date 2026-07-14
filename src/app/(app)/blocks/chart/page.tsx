import { Sandbox } from '@/app/(app)/blocks/sandbox'
import { JsonLd } from '@/components/json-ld'
import { app } from '@/config/app'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Blocks of Charts',
  description:
    'Explore ready-to-use chart blocks for Area, Bar, Line, and more. Swap data, tweak options, and copy the code to ship dashboards faster.',
  path: '/blocks/chart',
  type: 'article',
  keywords: [
    'chart blocks',
    'data visualization',
    'react charts',
    'dashboard charts',
    'area charts',
    'bar charts',
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
      { '@type': 'ListItem', position: 3, name: 'Charts', item: `${app.url}/blocks/chart` },
    ],
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="**:data-[slot=registry-viewer]:mt-0">
        <Sandbox registries={['chart-01', 'chart-02', 'chart-03']} />
      </div>
    </>
  )
}
