"use client"

import TagFieldDemo from "@/components/docs/forms/tag-field/tag-field-demo"
import MultipleSelectDemo from "@/components/docs/pickers/multiple-select/multiple-select-demo"
import { TextField } from "@/components/ui/text-field"

export default function Page() {
  return (
    <div className="p-32">
      <div className="flex items-center gap-x-1">
        <MultipleSelectDemo />
        <TagFieldDemo />
        <TextField />
      </div>
    </div>
  )
}
