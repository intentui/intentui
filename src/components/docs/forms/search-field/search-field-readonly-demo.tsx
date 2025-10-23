"use client"

import { SearchField, SearchInput } from "@/components/ui/search-field"

export default function SearchFieldDescriptionDemo() {
  return (
    <SearchField aria-label="Search" isReadOnly>
      <SearchInput placeholder="Search" />
    </SearchField>
  )
}
