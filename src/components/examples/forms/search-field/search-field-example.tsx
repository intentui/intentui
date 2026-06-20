'use client'

import { SearchField, SearchInput } from '@/components/ui/search-field'

export default function SearchFieldDemo() {
  return (
    <SearchField aria-label="Search" name="search">
      <SearchInput placeholder="Search" />
    </SearchField>
  )
}
