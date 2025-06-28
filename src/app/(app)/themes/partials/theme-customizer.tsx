"use client"

import type React from "react"
import type { Key } from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { useTheme } from "@/components/theme-provider"
import { Badge } from "@/components/ui/badge"
import { Select } from "@/components/ui/select"
import colors from "@/json/colors.json"
import { neutralColors } from "@/lib/colors"

interface ColorSelectProps extends React.ComponentProps<typeof Select> {
  selectedKey: string
  onSelectionChange: (key: Key | null) => void
  label: string
  className?: string
  placeholder: string
  filterKeys?: string[]
}

const ColorSelect = ({
  className,
  selectedKey,
  onSelectionChange,
  label,
  placeholder,
  filterKeys,
  ...props
}: ColorSelectProps) => {
  const filteredKeys = filterKeys
    ? Object.keys(colors).filter((key) => filterKeys.includes(key))
    : Object.keys(colors)
  const { theme } = useTheme()
  return (
    <Select
      {...props}
      selectedKey={selectedKey}
      onSelectionChange={onSelectionChange}
      label={label}
      placeholder={placeholder}
    >
      <Select.Trigger className="capitalize" />
      <Select.List>
        {filteredKeys.map((key) => (
          <Select.Option
            className="capitalize hover:**:data-[slot=icon]:inset-ring-fg/30"
            textValue={key}
            key={key}
            id={key}
          >
            <div
              data-slot="icon"
              className={twMerge(
                "inset-ring inset-ring-(--inset-ring-color)/15 size-4 rounded-sm dark:inset-ring-(--inset-ring-color)/5",
                className,
              )}
              aria-hidden
              style={
                {
                  "--inset-ring-color": colors[key as keyof typeof colors]["200"],
                  backgroundColor: neutralColors.includes(key)
                    ? colors[key as keyof typeof colors][theme === "dark" ? "900" : "700"]
                    : colors[key as keyof typeof colors]["500"],
                } as React.CSSProperties
              }
            />
            <Select.Label>{key}</Select.Label>
          </Select.Option>
        ))}
      </Select.List>
    </Select>
  )
}

type SelectedColors = {
  primary: string
  gray: string
  accent: string
  radius: string
}

type ThemeCustomizerProps = {
  selectedColors: SelectedColors
  setSelectedColors: React.Dispatch<React.SetStateAction<SelectedColors>>
}

export function ThemeCustomizer({ selectedColors, setSelectedColors }: ThemeCustomizerProps) {
  const handleSelectionChange = (type: keyof typeof selectedColors) => (key: Key | null) => {
    if (type === "primary") {
      setSelectedColors((prev) => ({ ...prev, accent: key?.toString()! }))
    }
    setSelectedColors((prev) => ({ ...prev, [type]: key?.toString() }))
  }

  const getFilteredColors = (excludedGray: string) => {
    return Object.keys(colors).filter(
      (color) => !neutralColors.includes(color) || color === excludedGray,
    )
  }

  const filteredPrimaryColors = getFilteredColors(selectedColors.gray)
  const filteredAccentColors = getFilteredColors(selectedColors.gray)
  const filteredRadius = [
    "0rem",
    "0.125rem",
    "0.25rem",
    "0.375rem",
    "0.5rem",
    "0.6rem",
    "0.75rem",
    "1rem",
    "1.5rem",
  ]
  return (
    <div className="grid max-w-xl gap-4">
      <div className="grid grid-cols-2 gap-x-3 gap-y-6">
        <ColorSelect
          selectedKey={selectedColors.gray}
          onSelectionChange={handleSelectionChange("gray")}
          label="Gray Color"
          placeholder="Select gray color"
          filterKeys={neutralColors}
        />
        <ColorSelect
          selectedKey={selectedColors.primary}
          onSelectionChange={handleSelectionChange("primary")}
          label="Primary Color"
          placeholder="Select primary color"
          filterKeys={filteredPrimaryColors}
        />
        <ColorSelect
          selectedKey={selectedColors.accent}
          onSelectionChange={handleSelectionChange("accent")}
          label="Accent Color"
          placeholder="Select accent color"
          filterKeys={filteredAccentColors}
        />
        <Select
          selectedKey={selectedColors.radius}
          onSelectionChange={handleSelectionChange("radius")}
          label="Radius"
          placeholder="Select radius"
        >
          <Select.Trigger className="capitalize" />
          <Select.List>
            {filteredRadius.map((radius) => (
              <Select.Option
                className="tabular-nums tracking-tight"
                textValue={radius}
                key={radius}
                id={radius}
              >
                <Select.Label>
                  {radius.replace("rem", "")}
                  {radius === "0.5rem" && <Badge className="ml-2">Default</Badge>}
                </Select.Label>
              </Select.Option>
            ))}
          </Select.List>
        </Select>
      </div>
    </div>
  )
}
