import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useState } from "react"
import { useDebouncedCallback } from "use-debounce"
import { SearchField, SearchInput } from "@/components/ui/search-field"
import { useIconSearch } from "./use-icon-search"

export function Search() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const { setSearchQuery } = useIconSearch()
  const [inputValue, setInputValue] = useState(() => searchParams.get("query") || "")

  const debouncedURLUpdate = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set("query", term)
    } else {
      params.delete("query")
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }, 1000)

  const handleChange = useCallback(
    (term: string) => {
      setInputValue(term)
      setSearchQuery(term)
      debouncedURLUpdate(term)
    },
    [setSearchQuery, debouncedURLUpdate],
  )

  return (
    <SearchField
      onChange={handleChange}
      className="min-w-50"
      value={inputValue}
      aria-label="Search icons"
    >
      <SearchInput placeholder="Search icons..." />
    </SearchField>
  )
}
