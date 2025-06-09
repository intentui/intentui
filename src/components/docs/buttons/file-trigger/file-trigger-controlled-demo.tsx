"use client"

import { useState } from "react"

import { Description } from "@/components/ui/field"
import { FileTrigger } from "@/components/ui/file-trigger"

export default function FileTriggerDemo() {
  const [file, setFile] = useState<string[] | null>(null)
  return (
    <>
      <FileTrigger
        onSelect={(e) => {
          const files = Array.from(e ?? [])
          const filenames = files.map((file) => file.name)
          setFile(filenames)
        }}
      />
      {file && (
        <Description className="mt-2 block max-w-60 truncate [&>strong]:font-medium [&>strong]:text-fg">
          Your file: <strong>{file}</strong>
        </Description>
      )}
    </>
  )
}
