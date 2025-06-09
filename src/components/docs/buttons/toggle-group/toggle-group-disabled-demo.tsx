import { Separator } from "@/components/ui/separator"
import { Toggle, ToggleGroup } from "@/components/ui/toggle"

export default function ToggleGroupSelectionModeDemo() {
  return (
    <div className="flex flex-col gap-y-6">
      <ToggleGroup isDisabled>
        <Toggle id="left">Left</Toggle>
        <Toggle id="justify">Justify</Toggle>
        <Toggle id="center">Center</Toggle>
        <Toggle id="right">Right</Toggle>
      </ToggleGroup>
      <Separator />
      <ToggleGroup>
        <Toggle id="left">Left</Toggle>
        <Toggle id="justify" isDisabled>
          Justify
        </Toggle>
        <Toggle id="center" isDisabled>
          Center
        </Toggle>
        <Toggle id="right">Right</Toggle>
      </ToggleGroup>
    </div>
  )
}
