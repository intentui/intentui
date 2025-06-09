import { Separator } from "@/components/ui/separator"
import { Toggle, ToggleGroup } from "@/components/ui/toggle"
import {
  IconAlignmentCenter,
  IconAlignmentJustify,
  IconAlignmentLeft,
  IconAlignmentRight,
} from "@intentui/icons"

export default function ToggleGroupSizingDemo() {
  return (
    <div className="flex flex-col gap-y-6">
      <ToggleGroup size="square-petite" defaultSelectedKeys={["center"]} selectionMode="single">
        <Toggle id="left">
          <IconAlignmentLeft />
        </Toggle>
        <Toggle id="justify">
          <IconAlignmentJustify />
        </Toggle>
        <Toggle id="center">
          <IconAlignmentCenter />
        </Toggle>
        <Toggle id="right">
          <IconAlignmentRight />
        </Toggle>
      </ToggleGroup>
      <Separator />
      <ToggleGroup size="small" defaultSelectedKeys={["center"]} selectionMode="single">
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
      <Separator />
      <ToggleGroup size="medium" defaultSelectedKeys={["center"]} selectionMode="single">
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
      <Separator />
      <ToggleGroup size="large" defaultSelectedKeys={["center"]} selectionMode="single">
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
    </div>
  )
}
