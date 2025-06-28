"use client"

import { IconColors } from "@intentui/icons"
import { ColorField } from "@/components/ui/color-field"

export default function ColorFieldWithSuffixDemo() {
  return <ColorField label="Color" suffix={<IconColors />} placeholder="#FAFAFA" />
}
