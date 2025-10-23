"use client"

import { AtSymbolIcon } from "@heroicons/react/24/outline"
import { BrandXIcon } from "@/components/icons/brand-x-icon"
import { Label } from "@/components/ui/field"
import { Input, InputGroup } from "@/components/ui/input"
import { Text } from "@/components/ui/text"
import { TextField } from "@/components/ui/text-field"
export default function TextFieldPrefixSuffixDemo() {
  return (
    <div className="flex flex-col gap-4">
      <TextField>
        <Label>Twitter</Label>
        <InputGroup>
          <AtSymbolIcon />
          <Input placeholder="irsyadadl" />
          <BrandXIcon />
        </InputGroup>
      </TextField>
      <TextField>
        <Label>Sites</Label>
        <InputGroup className="[--input-gutter-end:--spacing(12)] [--input-gutter-start:--spacing(16)]">
          <Text>https://</Text>
          <Input />
          <Text>.com</Text>
        </InputGroup>
      </TextField>
    </div>
  )
}
