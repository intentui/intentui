"use client"

import { SearchField, SearchInput } from "@/components/ui/search-field"

export default function SearchFieldDemo() {
  return (
    <SearchField aria-label="Search">
      <SearchInput placeholder="Search" />
    </SearchField>
  )
}
