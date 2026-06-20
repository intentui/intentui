'use client'

import { Description } from '@/components/ui/field'
import { SearchField, SearchInput } from '@/components/ui/search-field'

export default function SearchFieldDescriptionDemo() {
  return (
    <SearchField aria-label="Search" name="search">
      <SearchInput placeholder="Search" />
      <Description>Search for a product</Description>
    </SearchField>
  )
}
