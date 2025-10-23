"use client"

import { BellIcon, LanguageIcon, SunIcon } from "@heroicons/react/24/outline"
import {
  BellIcon as BellIconFill,
  LanguageIcon as LanguageIconFill,
  MoonIcon as MoonIconFill,
} from "@heroicons/react/24/solid"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function ToggleGroupOrientationDemo() {
  return (
    <div>
      <ToggleGroup orientation="vertical">
        <ToggleGroupItem id="dm">
          {({ isSelected }) => (
            <>
              {isSelected ? <MoonIconFill /> : <SunIcon />}
              {isSelected ? "Dark" : "Light"} Mode
            </>
          )}
        </ToggleGroupItem>
        <ToggleGroupItem id="n">
          {({ isSelected }) => (
            <>
              {isSelected ? <BellIconFill /> : <BellIcon />}
              Notifications {isSelected ? "On" : "Off"}
            </>
          )}
        </ToggleGroupItem>
        <ToggleGroupItem id="t">
          {({ isSelected }) => (
            <>
              {isSelected ? <LanguageIconFill /> : <LanguageIcon />}
              Always Translate
            </>
          )}
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
