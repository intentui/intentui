import { parse, rgb } from 'culori'
import ntc from 'ntcjs'
import { slugify } from '@/lib/utils'

export const getTextColor = (bgColor: string): string => {
  const parsedColor = parse(bgColor)
  if (!parsedColor) {
    throw new Error('Invalid color format')
  }

  const rgbColor = rgb(parsedColor)
  if (!rgbColor) {
    throw new Error('Failed to convert color to RGB')
  }

  const { r, g, b } = rgbColor

  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b

  return luminance > 0.5 ? '#000000' : '#FFFFFF'
}

export const getColorName = (hex: string, slug = true) => {
  const n_match = ntc.name(hex)
  return slug ? slugify(n_match[1]) : n_match[1]
}
