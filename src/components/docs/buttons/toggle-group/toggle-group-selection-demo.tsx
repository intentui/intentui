"use client"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function ToggleGroupSelectionDemo() {
  return (
    <ToggleGroup selectionMode="multiple">
      <ToggleGroupItem id="1d">1d</ToggleGroupItem>
      <ToggleGroupItem id="3d">3d</ToggleGroupItem>
      <ToggleGroupItem id="7d">7d</ToggleGroupItem>
      <ToggleGroupItem id="2w">2w</ToggleGroupItem>
      <ToggleGroupItem id="1m">1m</ToggleGroupItem>
      <ToggleGroupItem id="3m">3m</ToggleGroupItem>
      <ToggleGroupItem id="6m">6m</ToggleGroupItem>
      <ToggleGroupItem id="1y">1y</ToggleGroupItem>
    </ToggleGroup>
  )
}
