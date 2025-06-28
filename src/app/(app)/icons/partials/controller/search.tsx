import { SearchField } from "@/components/ui/search-field"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"

export function Search() {
  const searchParams = useSearchParams()

  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set("query", term)
    } else {
      params.delete("query")
    }

    replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <SearchField
      onChange={handleSearch}
      defaultValue={searchParams.get("query")?.toString()}
      aria-label="Search icons"
      placeholder="Search icons..."
    />
  )
}
