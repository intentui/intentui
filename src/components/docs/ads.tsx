'use client'

import Image from 'next/image'
import { cn } from 'cn'

export function Ads({ className }: { className?: string }) {
  return (
    <div className={cn('not-typeset', className)}>
      <a
        target="_blank"
        href="https://design.intentui.com/?utm_source=intentui.com&utm_medium=referral&utm_campaign=docs_intentui"
        className="not-typeset block border-page border-t bg-blue-600/20"
        rel="noopener"
      >
        <Image
          loading="eager"
          className="size-full"
          width="512"
          height="512"
          src="/images/ads/ads-design.png"
          alt="Design"
        />
      </a>
    </div>
  )
}
