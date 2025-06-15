import { Checkbox, CheckboxGroup } from "@/components/ui/checkbox"
import { Description, Label } from "@/components/ui/field"

export default function CheckboxGroupAnatomy() {
  return (
    <CheckboxGroup label="Checkbox group">
      <Checkbox value="x">
        <Label />
        <Description />
      </Checkbox>
      <Checkbox value="y">
        <Label />
        <Description />
      </Checkbox>
    </CheckboxGroup>
  )
}
