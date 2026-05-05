"use client"

import { useState } from "react"

import { Description } from "@/components/ui/field"
import { SearchField, SearchInput } from "@/components/ui/search-field"

export default function SearchFieldControlledDemo() {
  const [value, setValue] = useState("")
  return (
    <>
      <SearchField
        value={value}
        onChange={setValue}
        className="mb-2"
        aria-label="Search"
        name="search"
      >
        <SearchInput />
      </SearchField>
      <Description className="mt-2 block [&>strong]:text-fg">
        You have typed: <strong>{value ?? "-"}</strong>
      </Description>
    </>
  )
}
