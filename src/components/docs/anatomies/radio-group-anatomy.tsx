import { Radio, RadioGroup } from "@/components/ui/radio"

export default function RadioGroupAnatomy() {
  return (
    <RadioGroup label="Features">
      <Radio value="fs">Font size: Small, Medium, Large</Radio>
      <Radio value="ks">Keyboard shortcuts: Enabled, Disabled</Radio>
    </RadioGroup>
  )
}
