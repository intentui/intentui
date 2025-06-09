"use client"

import { IconColors } from "@intentui/icons"
import { ColorField } from "ui"

export default function ColorFieldWithPrefixDemo() {
  return <ColorField label="Color" prefix={<IconColors />} placeholder="#FAFAFA" />
}
