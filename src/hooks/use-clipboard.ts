import { useState } from "react"

export function useClipboard() {
  const [copied, setCopied] = useState(false)

  const copy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return { copy, copied }
}
