"use client"

import { TextField } from "@/components/ui/text-field"

export default function Page() {
  return (
    <div className="p-32">
      <TextField isRevealable type="password" className="max-w-xs" />
    </div>
  )
}
