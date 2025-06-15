"use client"

import { FileTrigger } from "@/components/ui/file-trigger"
import { useState } from "react"

export default function FileTriggerPendingDemo() {
  const [isLoading, setLoading] = useState(false)

  const handleSelect = async (files: FileList | null) => {
    if (!files || files.length === 0) return

    setLoading(true)
    await new Promise((r) => setTimeout(r, 4500))
    setLoading(false)
  }

  return (
    <FileTrigger onSelect={handleSelect} isPending={isLoading}>
      {isLoading ? "Uploading..." : "Upload a file"}
    </FileTrigger>
  )
}
