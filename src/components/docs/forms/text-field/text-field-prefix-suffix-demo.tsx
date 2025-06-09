"use client"

import { TextField } from "@/components/ui/text-field"
import { IconAt, IconBrandTwitter } from "@intentui/icons"

export default function TextFieldPrefixSuffixDemo() {
  return (
    <div className="flex flex-col gap-4">
      <TextField
        label="Twitter"
        placeholder="irsyadadl"
        prefix={<IconAt />}
        suffix={<IconBrandTwitter />}
      />
      <TextField label="Sites" prefix="https://" suffix=".com" />
    </div>
  )
}
