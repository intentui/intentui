"use client"

import { Button } from "@/components/ui/button"
import { NumberField } from "@/components/ui/number-field"

export default function Page() {
  return (
    <div className="items mx-auto flex max-w-sm flex-col gap-y-6">
      <div className="flex items-center gap-x-1">
        <NumberField className="min-w-60" aria-label="email" placeholder="1000" />
        <Button>Count</Button>
      </div>
    </div>
  )
}
