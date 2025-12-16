import { IconBullet, IconBulletFill } from "@intentui/icons"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"

import { useQueryString } from "@/hooks/use-query-string"
import type { SearchParamsProps } from "../icons-list"
import { InstallIcon } from "./install-icon"
import { Search } from "./search"
import { SelectSize } from "./select-size"

export function Controller({ searchParams }: SearchParamsProps) {
  const router = useRouter()
  const pathname = usePathname()
  const { t } = searchParams
  const [isSelected, setSelected] = useState<"solid" | "regular">(
    (t as "solid" | "regular") || "regular",
  )

  const { createQueryString } = useQueryString()

  const onFilter = (type: "solid" | "regular") => {
    router.push(`${pathname}?${createQueryString("t", type)}`, {
      scroll: false,
    })
    setSelected(type)
  }

  return (
    <div className="z-10 lg:sticky lg:top-20">
      <div className="relative">
        <div className="relative z-20 mb-6 flex flex-col items-center justify-between gap-2 sm:mb-12 sm:flex-row">
          <InstallIcon />
          <div className="flex items-center gap-1.5">
            <Search />
            <Button
              aria-label={`Change filter to ${isSelected === "solid" ? "regular" : "solid"}`}
              intent="outline"
              size="sq-md"
              className="shrink-0"
              onPress={() => onFilter(isSelected === "solid" ? "regular" : "solid")}
            >
              {isSelected === "solid" ? <IconBulletFill /> : <IconBullet />}
            </Button>
            <SelectSize />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 -mt-5 hidden h-24 bg-linear-to-b from-bg via-bg/90 to-transparent md:block" />
      </div>
    </div>
  )
}
