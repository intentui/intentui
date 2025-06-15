import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  IconBell,
  IconBellFill,
  IconMoonFill,
  IconSun,
  IconTranslate,
  IconTranslateFill,
} from "@intentui/icons"

export default function ToggleGroupOrientationDemo() {
  return (
    <div>
      <ToggleGroup orientation="vertical">
        <ToggleGroupItem id="dm">
          {({ isSelected }) => (
            <>
              {isSelected ? <IconMoonFill /> : <IconSun />}
              {isSelected ? "Dark" : "Light"} Mode
            </>
          )}
        </ToggleGroupItem>
        <ToggleGroupItem id="n">
          {({ isSelected }) => (
            <>
              {isSelected ? <IconBellFill /> : <IconBell />}
              Notifications {isSelected ? "On" : "Off"}
            </>
          )}
        </ToggleGroupItem>
        <ToggleGroupItem id="t">
          {({ isSelected }) => (
            <>
              {isSelected ? <IconTranslateFill /> : <IconTranslate />}
              Always Translate
            </>
          )}
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
