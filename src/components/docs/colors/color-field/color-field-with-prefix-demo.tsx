"use client"

import { IconColors } from "@intentui/icons"
import { ColorField } from "@/components/ui/color-field"

export default function ColorFieldWithPrefixDemo() {
  return <ColorField label="Color" prefix={<IconColors />} placeholder="#FAFAFA" />
}
