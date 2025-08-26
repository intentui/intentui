import { IconCheck, IconDuplicate } from "@intentui/icons"
import { parseColor, type Color as RacColor } from "@react-stately/color"
import type { Color } from "culori"
import { formatHex, formatHsl, formatRgb, interpolate, parse } from "culori"
import React, { useState } from "react"
import { ListBox, ListBoxItem, type Selection } from "react-aria-components"
import { toast } from "sonner"
import { twJoin } from "tailwind-merge"
import {
  isOklch,
  SelectFormat,
  toOklchString,
} from "@/app/(app)/colors/(colors)/color-item"
import { ColorField } from "@/components/ui/color-field"
import { Heading } from "@/components/ui/heading"
import { getColorName, getTextColor } from "@/lib/colors"

export function ColorGenerator() {
  const [value, setValue] = useState(parseColor("#0D6DFD"))
  const [selectedFormat, setSelectedFormat] = useState<Selection>(new Set(["oklch"]))
  const [copiedShade, setCopiedShade] = useState<string | null>(null)
  const generateShades = (baseColor: string) => {
    const parsedBase = parse(baseColor.toString())
    if (!parsedBase) {
      throw new Error(
        "Invalid color format. Please use a valid color (e.g., HEX, RGB, or HSL).",
      )
    }

    const lightToDarkScale = interpolate([
      parse(formatHex(interpolate([parse("white") as Color, parsedBase])(0.1))) as Color,
      parsedBase,
    ])
    const darkerScale = interpolate([parsedBase, parse("black") as Color])

    const scale = [
      ...Array.from({ length: 9 }, (_, i) => formatHex(lightToDarkScale(i / 8))),
      formatHex(darkerScale(0.15)), // 900 shade
      formatHex(darkerScale(0.5)), // 950 shade
    ]

    return {
      50: scale[0]!,
      100: scale[1]!,
      200: scale[2]!,
      300: scale[3]!,
      400: scale[4]!,
      500: scale[5]!,
      600: scale[6]!,
      700: scale[7]!,
      800: scale[8]!,
      900: scale[9]!,
      950: scale[10]!,
    }
  }

  const tailwindShades = generateShades(value.toString())

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

  React.useEffect(() => {
    if (copiedShade) {
      const timeout = setTimeout(() => {
        setCopiedShade(null)
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [copiedShade])

  return (
    <div>
      <div className="items-center gap-6 border-b">
        <div className="grid lg:grid-cols-2">
          <div className="border-r p-6">
            <div className="mb-7">
              <Heading level={2}>Generate</Heading>
              <p className="text-muted-fg text-sm">
                Generate your desired color by picking a shade from the color picker or by
                entering a hex code.
              </p>
            </div>
            <ColorField
              aria-label="Choose color"
              onChange={(newColor: RacColor | null) => newColor && setValue(newColor)}
              value={value}
            />
          </div>

          <div
            className={twJoin(
              "p-6",
              "border-b last:border-b-0 lg:border-r lg:nth-last-2:border-b-0 lg:last:border-r-0",
              "pb-6 even:pl-6 even:lg:border-r-0",
            )}
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="font-mono text-sm uppercase">
                {getColorName(value.toString("hex"))}
              </div>
              <div>
                <SelectFormat selected={selectedFormat} setSelected={setSelectedFormat} />
              </div>
            </div>
            <ListBox
              aria-label="Colors"
              orientation="horizontal"
              className="flex flex-wrap gap-2 sm:flex-nowrap"
            >
              {Object.entries(tailwindShades).map(([shade, colorValue]) => (
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
                  {copiedShade === shade ? <IconCheck /> : <IconDuplicate />}
                </ListBoxItem>
              ))}
            </ListBox>
          </div>
        </div>
      </div>
    </div>
  )
}
