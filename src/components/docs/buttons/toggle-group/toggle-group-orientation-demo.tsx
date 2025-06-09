import { Toggle, ToggleGroup } from "@/components/ui/toggle"
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
        <Toggle>
          {({ isSelected }) => (
            <>
              {isSelected ? <IconMoonFill /> : <IconSun />}
              {isSelected ? "Dark" : "Light"} Mode
            </>
          )}
        </Toggle>
        <Toggle>
          {({ isSelected }) => (
            <>
              {isSelected ? <IconBellFill /> : <IconBell />}
              Notifications {isSelected ? "On" : "Off"}
            </>
          )}
        </Toggle>
        <Toggle>
          {({ isSelected }) => (
            <>
              {isSelected ? <IconTranslateFill /> : <IconTranslate />}
              Always Translate
            </>
          )}
        </Toggle>
      </ToggleGroup>
    </div>
  )
}
