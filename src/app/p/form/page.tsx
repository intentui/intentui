import ComboBoxDemo from "@/components/docs/pickers/combo-box/combo-box-demo"
import SelectDemo from "@/components/docs/pickers/select/select-demo"
import { Button } from "@/components/ui/button"
import { DatePicker } from "@/components/ui/date-picker"
import { DateRangePicker } from "@/components/ui/date-range-picker"
import { TextField } from "@/components/ui/text-field"
import { TimeField } from "@/components/ui/time-field"

export default function Page() {
  return (
    <div className="mx-auto flex max-w-(--breakpoint-2xl) flex-wrap items-center gap-2 p-6 sm:p-12">
      <TextField aria-label="TextField" />
      <div>
        <SelectDemo />
      </div>
      <div>
        <ComboBoxDemo />
      </div>
      <TimeField aria-label="TimeField" />
      <DatePicker aria-label="DatePicker" />
      <DateRangePicker aria-label="DateRangePicker" />
      <Button>Hello</Button>
    </div>
  )
}
