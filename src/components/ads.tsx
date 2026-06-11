"use client"

import Image from "next/image"
import { twMerge } from "tailwind-merge"

export function Ads({ className }: { className?: string }) {
  return (
    <div className="-mx-4 sm:mx-0">
      <a
        target="_blank"
        href="https://design.intentui.com/?utm_source=intentui.com&utm_medium=referral&utm_campaign=docs_intentui"
        className={twMerge(
          "not-prose block border-page border-t border-b bg-blue-600/20 sm:border-b-0",
          className,
        )}
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
