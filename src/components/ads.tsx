"use client"

import { twMerge } from "tailwind-merge"

export function Ads({ className }: { className?: string }) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href="https://dub.sh/designiui"
      className={twMerge(
        "not-prose group block w-full rounded-lg border bg-muted p-4 sm:w-60 sm:rounded-xl",
        className,
      )}
    >
      <span className="mb-1.5 block font-semibold text-sm/5">
        Unlock the full power of <br /> Design Intent UI
      </span>
      <div className="mb-1 block text-pretty text-[0.83rem]/5 text-muted-fg">
        Build modern web apps faster with{" "}
        <strong className="font-semibold text-fg">500+ blocks</strong> and polished{" "}
        <strong className="font-semibold text-fg">templates</strong> crafted for you.
      </div>
    </a>
  )
}
