import { parse, rgb } from "culori"
import ntc from "ntcjs"
import { slugify } from "usemods"

export const getTextColor = (bgColor: string): string => {
  const parsedColor = parse(bgColor)
  if (!parsedColor) {
    throw new Error("Invalid color format")
  }

  const rgbColor = rgb(parsedColor)
  if (!rgbColor) {
    throw new Error("Failed to convert color to RGB")
  }

  const { r, g, b } = rgbColor

  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b

  return luminance > 0.5 ? "#000000" : "#FFFFFF"
}

export const getColorName = (hex: string, slug = true) => {
  const n_match = ntc.name(hex)
  return slug ? slugify(n_match[1]) : n_match[1]
}

export const adjustLightness = (oklchColor: string, adjustBy: number): string => {
  const match = oklchColor.match(/oklch\((\d+(\.\d+)?) (\d+(\.\d+)?) (\d+(\.\d+)?)\)/)
  if (!match) throw new Error("Invalid OKLCH color format")

  const [_, l, , c, , h] = match

  if (!l || !c || !h) throw new Error("Invalid OKLCH color format")

  const lightness = Number.parseFloat(l)
  const newLightness = Math.min(1, Math.max(0, lightness + adjustBy / 100))

  return `oklch(${newLightness.toFixed(3)} ${c} ${h})`
}

export const neutralColors = ["slate", "gray", "zinc", "neutral", "stone"]
export const accentColors300 = ["yellow", "lime"]
export const accentColors400 = ["amber", "yellow", "lime", "cyan"]
export const accentColors500 = ["sky", "orange", "rose", "fuchsia", "purple", "violet", "indigo"]
