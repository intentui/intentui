'use client'

import { SearchField, SearchInput } from '@/components/ui/search-field'

export default function SearchFieldDescriptionDemo() {
  return (
    <SearchField aria-label="Search" isReadOnly name="search">
      <SearchInput placeholder="Search" />
    </SearchField>
  )
}
