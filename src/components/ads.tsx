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
        "not-prose group block w-full rounded-3xl bg-blue-600 p-4 text-white sm:w-60",
        className,
      )}
    >
      <span className="mb-1.5 block font-medium text-base/6">
        Unlock the full power of <br /> Design Intent UI
      </span>
      <div className="mb-1 block text-pretty text-blue-100 text-sm/5">
        Build modern web apps faster with{" "}
        <strong className="font-semibold text-white">350+ blocks</strong> and polished templates
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
