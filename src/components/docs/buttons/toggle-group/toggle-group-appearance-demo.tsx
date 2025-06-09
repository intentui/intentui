import { Separator } from "@/components/ui/separator"
import { Toggle, ToggleGroup } from "@/components/ui/toggle"

export default function ToggleGroupAppearanceDemo() {
  return (
    <div className="flex flex-col gap-y-6">
      <ToggleGroup intent="solid" defaultSelectedKeys={["center"]} selectionMode="single">
        <Toggle id="left">Left</Toggle>
        <Toggle id="center">Center</Toggle>
        <Toggle id="right">Right</Toggle>
      </ToggleGroup>
      <Separator />
      <ToggleGroup intent="outline" defaultSelectedKeys={["center"]} selectionMode="single">
        <Toggle id="left">Left</Toggle>
        <Toggle id="center">Center</Toggle>
        <Toggle id="right">Right</Toggle>
      </ToggleGroup>
    </div>
  )
}
