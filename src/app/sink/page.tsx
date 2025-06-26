"use client"
import ColorFieldDemo from "@/components/docs/colors/color-field/color-field-demo"
import DateFieldDemo from "@/components/docs/date-and-time/date-field/date-field-demo"
import TextFieldDemo from "@/components/docs/forms/text-field/text-field-demo"
import ComboBoxDemo from "@/components/docs/pickers/combo-box/combo-box-demo"
import MultipleSelectDemo from "@/components/docs/pickers/multiple-select/multiple-select-demo"
import SelectDemo from "@/components/docs/pickers/select/select-demo"

export default function Sink() {
  return (
    <div className="flex items-end gap-x-2 p-10">
      <SelectDemo />
      <ColorFieldDemo />
      <DateFieldDemo />
      <MultipleSelectDemo />
      <TextFieldDemo />
      <ComboBoxDemo />
    </div>
  )
}
