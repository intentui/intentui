import { ColorSwatchPicker } from "@/components/ui/color-swatch-picker"

export default function ColorSwatchPickerAnatomy() {
  return (
    <ColorSwatchPicker aria-label="Pick color">
      <ColorSwatchPicker.Item color="#f59e0b" />
      <ColorSwatchPicker.Item color="#84cc16" />
      <ColorSwatchPicker.Item color="#0d6efd" />
    </ColorSwatchPicker>
  )
}
