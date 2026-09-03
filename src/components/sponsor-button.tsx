'use client'

import { cn } from 'cn'
import { buttonStyles } from '@/components/ui/button'
import { Link } from '@/components/ui/link'

export function SponsorButton({ className }: { className?: string }) {
  return (
    <Link
      href="/sponsor"
      className={buttonStyles({
        size: 'sm',
        intent: 'outline',
        className: cn(
          'rounded-sm border-fg bg-fg text-bg hover:bg-fg *:data-[slot=icon]:text-zinc-300 dark:*:data-[slot=icon]:text-zinc-600',
          className
        ),
      })}
    >
      Sponsor
    </Link>
  )
}
