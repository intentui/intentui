import { Sandbox } from '@/app/(app)/blocks/sandbox'
import { JsonLd } from '@/components/json-ld'
import { app } from '@/config/app'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Blocks of Auth',
  description:
    'Browse polished, accessible authentication design blocks for login, registration, and password reset. Copy, customize, and ship faster with ready-to-use layouts.',
  path: '/blocks/auth',
  type: 'article',
  keywords: [
    'authentication blocks',
    'login forms',
    'registration forms',
    'password reset',
    'auth ui',
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
      { '@type': 'ListItem', position: 3, name: 'Auth', item: `${app.url}/blocks/auth` },
    ],
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="**:data-[slot=registry-viewer]:mt-0">
        <Sandbox registries={['auth-01', 'auth-02', 'auth-03']} />
      </div>
    </>
  )
}
