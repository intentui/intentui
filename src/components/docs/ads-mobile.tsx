'use client'

import Image from 'next/image'

export function AdsMobile() {
  return (
    <a
      target="_blank"
      href="https://design.intentui.com/?utm_source=intentui.com&utm_medium=referral&utm_campaign=docs_intentui"
      className="not-typeset block rounded-3xl overflow-hidden mt-6 bg-blue-600/20"
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
  )
}
