'use client'

import { Link } from '@/components/ui/link'
import { Text } from '@/components/ui/text'
import { buttonStyles } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'

export function Cta() {
  return (
    <section>
      <Heading level={2}>Get your site featured</Heading>
      <Text className="max-w-lg">
        Showcase your product to the world and let people discover what you built with Intent UI.
      </Text>
      <div className="mt-6">
        <Link
          className={buttonStyles({
            intent: 'primary',
            size: 'lg',
            className: 'bg-fg hover:bg-fg/90 text-bg',
          })}
          href="/sponsor"
        >
          Get featured{' '}
        </Link>
      </div>
    </section>
  )
}
