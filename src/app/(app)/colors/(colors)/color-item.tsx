import { CheckIcon, ChevronDownIcon, Square2StackIcon } from "@heroicons/react/24/outline"
import { formatHex, formatHsl, formatRgb, oklch, parse } from "culori"
import { useEffect, useState } from "react"
import type { Selection } from "react-aria-components"
import { ListBox, ListBoxItem } from "react-aria-components"
import { toast } from "sonner"
import { twJoin } from "tailwind-merge"
import { Button } from "@/components/ui/button"
import { Menu, MenuContent, MenuItem, MenuLabel } from "@/components/ui/menu"
import colors from "@/json/colors.json"
import { getTextColor } from "@/lib/colors"

export const isOklch = (color: string | undefined): boolean => color?.startsWith("oklch(") ?? false

export const toOklchString = (color: string): string => {
  const { l, c, h } = oklch(parse(color)) || {}
  return `oklch(${l?.toFixed(3)} ${c?.toFixed(3)} ${h?.toFixed(3)})`
}

export function ColorItem({ color }: { color: keyof typeof colors }) {
  const [selectedFormat, setSelectedFormat] = useState<Selection>(new Set(["oklch"]))
  const [copiedShade, setCopiedShade] = useState<string | null>(null)

  const handleCopy = (color: string, shade: string) => {
    const _selectedFormat = [...selectedFormat].join(", ")

    let formattedColor: string = color
    switch (_selectedFormat) {
      case "rgb":
        formattedColor = formatRgb(parse(color)) || color
        break
      case "hsl":
        formattedColor = formatHsl(parse(color)) || color
        break
      case "hex":
        formattedColor = formatHex(parse(color)) || color
        break
      default:
        formattedColor = isOklch(color) ? color : toOklchString(color) || color
        break
    }

    navigator.clipboard.writeText(formattedColor).then(() => {
      toast(`Copied: ${formattedColor}`)
      setCopiedShade(shade)
    })
  }

  useEffect(() => {
    if (copiedShade) {
      const timeout = setTimeout(() => {
        setCopiedShade(null)
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [copiedShade])

  return (
    <div
      className={twJoin(
        "p-6",
        "border-b last:border-b-0 lg:border-r lg:nth-last-2:border-b-0 lg:last:border-r-0",
        "pb-6 even:pl-6 even:lg:border-r-0",
      )}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="font-mono text-sm uppercase">{color}</div>
        <div>
          <SelectFormat selected={selectedFormat} setSelected={setSelectedFormat} />
        </div>
      </div>
      <ListBox
        aria-label="Colors"
        orientation="horizontal"
        className="flex flex-wrap gap-2 sm:flex-nowrap"
      >
        {Object.entries(colors[color]).map(([shade, colorValue]) => (
          <ListBoxItem
            textValue={colorValue}
            onAction={() => handleCopy(colorValue, shade)}
            key={colorValue?.toString()}
            className="group relative inset-shadow-white/15 inset-shadow-xs flex h-20 w-1/7 min-w-10 cursor-default items-end justify-center gap-x-2 rounded-lg p-2 font-mono text-xs ring-1 ring-white/10 ring-inset focus:outline-hidden focus:ring-white/25 *:data-[slot=icon]:absolute *:data-[slot=icon]:top-3 *:data-[slot=icon]:mx-auto *:data-[slot=icon]:hidden *:data-[slot=icon]:size-3.5 *:data-[slot=icon]:opacity-90 *:data-[slot=icon]:group-focus-visible:block *:data-[slot=icon]:group-hover:block sm:w-full"
            style={{
              color: getTextColor(colorValue),
              backgroundColor: colorValue,
            }}
          >
            {shade}
            {copiedShade === shade ? <CheckIcon /> : <Square2StackIcon />}
          </ListBoxItem>
        ))}
      </ListBox>
    </div>
  )
}

interface SelectedFormatProps {
  selected: Selection
  setSelected: (s: Selection) => void
}

export function SelectFormat({ selected, setSelected }: SelectedFormatProps) {
  return (
    <Menu>
      <Button intent="outline" className="w-32 justify-between font-mono uppercase">
        {[...selected].join(", ")}
        <ChevronDownIcon className="ml-1" />
      </Button>
      <MenuContent
        placement="bottom right"
        selectedKeys={selected}
        onSelectionChange={setSelected}
        selectionMode="single"
      >
        <MenuItem id="rgb">
          <MenuLabel>RGB</MenuLabel>
        </MenuItem>
        <MenuItem id="hsl">
          <MenuLabel>HSL</MenuLabel>
        </MenuItem>
        <MenuItem id="oklch">
          <MenuLabel>OKLCH</MenuLabel>
        </MenuItem>
        <MenuItem id="hex">
          <MenuLabel>HEX</MenuLabel>
        </MenuItem>
      </MenuContent>
    </Menu>
  )
}
