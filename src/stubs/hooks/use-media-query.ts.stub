"use client"

import { useEffect, useState } from "react"

export const useMediaQuery = (query: string) => {
  const [value, setValue] = useState<boolean | undefined>()

  useEffect(() => {
    const onChange = (event: MediaQueryListEvent) => {
      setValue(event.matches)
    }

    const result = matchMedia(query)
    setValue(result.matches)
    result.addEventListener("change", onChange)

    return () => result.removeEventListener("change", onChange)
  }, [query])

  return value
}
