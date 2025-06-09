import React from "react"

import { IconBullet, IconBulletFill } from "@intentui/icons"
import { useQueryString } from "hooks/use-query-string"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "ui"

import type { SearchParamsProps } from "../icons-list"
import { Install } from "./install"
import { Search } from "./search"
import { SelectSize } from "./select-size"

export function Controller({ searchParams }: SearchParamsProps) {
  const router = useRouter()
  const pathname = usePathname()
  const { t } = searchParams
  const [isSelected, setSelected] = React.useState<"solid" | "regular">(
    (t as "solid" | "regular") || "regular"
  )

  const { createQueryString } = useQueryString()

  const onFilter = (type: "solid" | "regular") => {
    router.push(pathname + "?" + createQueryString("t", type), {
      scroll: false
    })
    setSelected(type)
  }

  return (
    <div className="lg:sticky lg:top-20 z-10">
      <div className="relative">
        <div className="flex flex-col relative z-20 sm:flex-row items-center justify-between gap-2 mb-6 sm:mb-12">
          <Install />
          <div className="flex gap-2 items-center">
            <Search />
            <Button
              aria-label={`Change filter to ${isSelected === "solid" ? "regular" : "solid"}`}
              appearance="outline"
              className="size-10"
              size="square-petite"
              onPress={() => onFilter(isSelected === "solid" ? "regular" : "solid")}
            >
              {isSelected === "solid" ? <IconBulletFill /> : <IconBullet />}
            </Button>
            <SelectSize />
          </div>
        </div>

        <div className="md:block hidden pointer-events-none z-0 absolute inset-x-0 top-0 -mt-5 h-24 bg-gradient-to-b from-bg via-bg/90 to-transparent" />
      </div>
    </div>
  )
}
