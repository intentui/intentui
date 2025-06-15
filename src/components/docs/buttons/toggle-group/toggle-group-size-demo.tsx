import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function ToggleGroupSizeDemo() {
  return (
    <div className="flex flex-col gap-y-6">
      <div>
        <ToggleGroup size="xs">
          <ToggleGroupItem id="1d">1d</ToggleGroupItem>
          <ToggleGroupItem id="3d">3d</ToggleGroupItem>
          <ToggleGroupItem id="7d">7d</ToggleGroupItem>
          <ToggleGroupItem id="2w">2w</ToggleGroupItem>
          <ToggleGroupItem id="1m">1m</ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div>
        <ToggleGroup size="sm">
          <ToggleGroupItem id="1d">1d</ToggleGroupItem>
          <ToggleGroupItem id="3d">3d</ToggleGroupItem>
          <ToggleGroupItem id="7d">7d</ToggleGroupItem>
          <ToggleGroupItem id="2w">2w</ToggleGroupItem>
          <ToggleGroupItem id="1m">1m</ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div>
        <ToggleGroup size="md">
          <ToggleGroupItem id="1d">1d</ToggleGroupItem>
          <ToggleGroupItem id="3d">3d</ToggleGroupItem>
          <ToggleGroupItem id="7d">7d</ToggleGroupItem>
          <ToggleGroupItem id="2w">2w</ToggleGroupItem>
          <ToggleGroupItem id="1m">1m</ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div>
        <ToggleGroup size="lg">
          <ToggleGroupItem id="1d">1d</ToggleGroupItem>
          <ToggleGroupItem id="3d">3d</ToggleGroupItem>
          <ToggleGroupItem id="7d">7d</ToggleGroupItem>
          <ToggleGroupItem id="2w">2w</ToggleGroupItem>
          <ToggleGroupItem id="1m">1m</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  )
}
