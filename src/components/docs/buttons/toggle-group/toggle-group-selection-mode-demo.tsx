import { Toggle, ToggleGroup } from "@/components/ui/toggle"
import {
  IconAlignmentCenter,
  IconAlignmentJustify,
  IconAlignmentLeft,
  IconAlignmentRight,
} from "@intentui/icons"

export default function ToggleGroupSelectionModeDemo() {
  return (
    <ToggleGroup defaultSelectedKeys={["center"]} selectionMode="single">
      <Toggle id="left">
        <IconAlignmentLeft /> Left
      </Toggle>
      <Toggle id="justify">
        <IconAlignmentJustify /> Justify
      </Toggle>
      <Toggle id="center">
        <IconAlignmentCenter /> Center
      </Toggle>
      <Toggle id="right">
        <IconAlignmentRight /> Right
      </Toggle>
    </ToggleGroup>
  )
}
