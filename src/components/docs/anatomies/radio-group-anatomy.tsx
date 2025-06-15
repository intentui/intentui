import { Description, Label } from "@/components/ui/field"
import { Radio, RadioGroup } from "@/components/ui/radio"

export default function RadioGroupAnatomy() {
  return (
    <RadioGroup aria-label="Radio">
      <Radio value="x">
        <Label />
        <Description />
      </Radio>
      <Radio value="y">
        <Label />
        <Description />
      </Radio>
    </RadioGroup>
  )
}
