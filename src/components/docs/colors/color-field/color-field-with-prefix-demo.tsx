"use client"

import { ColorField } from "@/components/ui/color-field"
import { IconColors } from "@intentui/icons"

export default function ColorFieldWithPrefixDemo() {
  return <ColorField label="Color" prefix={<IconColors />} placeholder="#FAFAFA" />
}
