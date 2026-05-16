"use client"

import Link from "next/link"
import { BrandReactjsIcon } from "@/components/icons/brand-reactjs-icon"
import { buttonStyles } from "@/components/ui/button"

export function DocComposed({
  components,
  text,
}: {
  components: string[]
  text?: string | React.ReactNode
}) {
  return (
    <div className="not-prose">
      {!text ? (
        <>
          <p className="mb-6">
            When you install this component via the CLI, it automatically loads all composed
            components, so you don’t need to add them individually.
          </p>
        </>
      ) : (
        <p className="mb-4">{text}</p>
      )}
      <div className="flex flex-wrap gap-1.5">
        {components.map((item, i) => (
          <Link
            key={i}
            href={`/${item}`}
            className={buttonStyles({ intent: "outline", className: "capitalize" })}
          >
            <BrandReactjsIcon className="text-cyan-500 dark:text-cyan-400" />
            {item.replaceAll("-", " ")}
          </Link>
        ))}
      </div>
    </div>
  )
}
