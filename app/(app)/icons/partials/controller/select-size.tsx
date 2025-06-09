import React from "react"

import { IconChevronLgDown } from "@intentui/icons"
import { useQueryString } from "hooks/use-query-string"
import { usePathname, useRouter } from "next/navigation"
import type { Selection } from "react-aria-components"
import title from "title"
import { Button, Menu } from "ui"

const sizes = [
  { id: "size-4", name: "Size 4" },
  { id: "size-5", name: "Size 5" },
  { id: "size-6", name: "Size 6" }
]

export function SelectSize() {
  const router = useRouter()
  const pathname = usePathname()
  const { createQueryString } = useQueryString()

  const [selectedSize, setSelectSize] = React.useState<Selection>(new Set(["size-5"]))
  const onSelectionChange = (size: Selection) => {
    router.push(pathname + "?" + createQueryString("s", [...size].join(",")), {
      scroll: false
    })
    setSelectSize(size)
  }

  return (
    <Menu aria-label="Select Icon Size">
      <Button
        className="[&[data-pressed]_[data-slot=icon]]:rotate-180 bg-bg [&_[data-slot=icon]]:transition-transform"
        appearance="outline"
      >
        <span className="sm:hidden inline">
          {title([...selectedSize].join(", ").replace("size-", " ")) || "5"}
        </span>
        <span className="sm:inline hidden">
          {title([...selectedSize].join(", ").replace("-", " ")) || "Size 5"}
        </span>
        <IconChevronLgDown />
      </Button>
      <Menu.Content
        selectionMode="single"
        selectedKeys={selectedSize}
        onSelectionChange={onSelectionChange}
        placement="bottom end"
        items={sizes}
      >
        {(item) => (
          <Menu.Radio textValue={item.name}>
            {item.name} /{" "}
            {item.name === "Size 4" ? "20px" : item.name === "Size 5" ? "24px" : "28px"}
          </Menu.Radio>
        )}
      </Menu.Content>
    </Menu>
  )
}
