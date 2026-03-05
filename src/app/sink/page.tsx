"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/field"
import { NativeSelect, NativeSelectContent } from "@/components/ui/native-select"
import ComboBoxMultiSelectDemo from "@/components/docs/pickers/combo-box/combo-box-multi-select-demo";

export default function Page() {
  return (
    <div className="flex items-center justify-center p-32">
      <ComboBoxMultiSelectDemo/>
    </div>
  )
}
