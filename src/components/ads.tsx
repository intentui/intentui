"use client"

import { IconOpenLink } from "@intentui/icons"
import { twMerge } from "tailwind-merge"
import { buttonStyles } from "@/components/ui/button"

export function Ads({ className }: { className?: string }) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href="https://dub.sh/designiui"
      className={twMerge(
        "not-prose group block w-full rounded-lg bg-linear-to-br from-blue-700 via-blue-600 to-sky-500 p-4 text-white sm:w-60 sm:rounded-xl",
        className,
      )}
    >
      <span className="mb-1.5 block font-medium text-base/6">
        Unlock the full power of <br /> Design Intent UI
      </span>
      <div className="mb-1 block text-pretty text-[0.83rem]/5 text-blue-100">
        Build modern web apps faster with{" "}
        <strong className="font-semibold text-white">400+ blocks</strong> and polished templates
        crafted for professionals.
      </div>

      <div>
        <span
          className={buttonStyles({
            size: "sm",
            className:
              "inset-ring-transparent mt-2 bg-white text-zinc-900 shadow-md hover:bg-white group-hover:shadow-none",
          })}
        >
          Explore
          <IconOpenLink className="text-zinc-500!" />
        </span>
      </div>
    </a>
  )
}
