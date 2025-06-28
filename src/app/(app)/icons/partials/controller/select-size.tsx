import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Menu } from "@/components/ui/menu"
import { useQueryString } from "@/hooks/use-query-string"
import { title } from "@/lib/utils"
import { IconChevronsY } from "@intentui/icons"
import { usePathname, useRouter } from "next/navigation"
import type { Selection } from "react-aria-components"

const sizes = [
  { id: "size-4", name: "Size 4" },
  { id: "size-5", name: "Size 5" },
  { id: "size-6", name: "Size 6" },
]

export function SelectSize() {
  const router = useRouter()
  const pathname = usePathname()
  const { createQueryString } = useQueryString()

  const [selectedSize, setSelectSize] = useState<Selection>(new Set(["size-5"]))
  const onSelectionChange = (size: Selection) => {
    router.push(`${pathname}?${createQueryString("s", [...size].join(","))}`, {
      scroll: false,
    })
    setSelectSize(size)
  }

  return (
    <Menu aria-label="Select Icon Size">
      <Button intent="outline" size="sm">
        <span className="inline sm:hidden sm:text-sm/6">
          {title([...selectedSize].join(", ").replace("size-", " ")) || "5"}
        </span>
        <span className="hidden sm:inline sm:text-sm/6">
          {title([...selectedSize].join(", ").replace("-", " ")) || "Size 5"}
        </span>
        <IconChevronsY />
      </Button>
      <Menu.Content
        selectionMode="single"
        selectedKeys={selectedSize}
        onSelectionChange={onSelectionChange}
        placement="bottom end"
        items={sizes}
      >
        {(item) => (
          <Menu.Item textValue={item.name}>
            <Menu.Label>
              {item.name} /{" "}
              {item.name === "Size 4" ? "20px" : item.name === "Size 5" ? "24px" : "28px"}
            </Menu.Label>
          </Menu.Item>
        )}
      </Menu.Content>
    </Menu>
  )
}
