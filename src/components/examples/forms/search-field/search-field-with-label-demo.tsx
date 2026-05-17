"use client"

import { Label } from "@/components/ui/field"
import { SearchField, SearchInput } from "@/components/ui/search-field"

export default function SearchFieldWithLabelDemo() {
  return (
    <SearchField name="search">
      <Label>Search</Label>
      <SearchInput />
    </SearchField>
  )
}
