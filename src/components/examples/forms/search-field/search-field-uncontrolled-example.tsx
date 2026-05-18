"use client"

import { SearchField, SearchInput } from "@/components/ui/search-field"

export default function SearchFieldControlledDemo() {
  return (
    <SearchField defaultValue="Laravel" aria-label="Framework" name="search">
      <SearchInput />
    </SearchField>
  )
}
