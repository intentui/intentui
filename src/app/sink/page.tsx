"use client"

import ComboBoxDemo from "@/components/docs/pickers/combo-box/combo-box-demo"
import SelectDemo from "@/components/docs/pickers/select/select-demo"
import { ColorField } from "@/components/ui/color-field"
import { DateField } from "@/components/ui/date-field"
import { DatePicker } from "@/components/ui/date-picker"
import { DateRangePicker } from "@/components/ui/date-range-picker"
import { TimeField } from "@/components/ui/time-field"
import { ColorPicker, TextField } from "react-aria-components"

export default function Page() {
  return (
    <div className="flex items-end gap-x-1 overflow-x-auto">
      <TextField />
      <TimeField />
      <DateField />
      <DateRangePicker />
      <DatePicker />
      <ColorField />
      <ColorPicker />
      <SelectDemo />
      <ComboBoxDemo />
    </div>
  )
}
