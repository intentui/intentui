"use client"

import { androidBrands } from "@/components/docs/collections/tag-group/tag-group-demo"
import { Tag, TagGroup, TagList } from "@/components/ui/tag-group"

export default function TagGroupDisabledDemo() {
  return (
    <div className="space-y-6">
      <TagGroup
        disabledKeys={androidBrands.filter((brand) => !brand.available).map((brand) => brand.id)}
        label="Disabled Key"
        selectionMode="multiple"
      >
        <TagList items={androidBrands}>{(item) => <Tag>{item.name}</Tag>}</TagList>
      </TagGroup>

      <TagGroup label="Disabled by Tag" selectionMode="multiple">
        <TagList items={androidBrands}>
          {(item) => <Tag isDisabled={item.available}>{item.name}</Tag>}
        </TagList>
      </TagGroup>
    </div>
  )
}
