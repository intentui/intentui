"use client"

import { EnvelopeIcon } from "@heroicons/react/24/outline"
import { Input, InputGroup } from "@/components/ui/input"
import { Text } from "@/components/ui/text"

export default function InputGroupDemo() {
  return (
    <div className="space-y-6">
      <InputGroup>
        <EnvelopeIcon />
        <Input type="email" />
      </InputGroup>
      <InputGroup className="[--input-gutter-end:--spacing(12)] [--input-gutter-start:--spacing(16)]">
        <Text>https://</Text>
        <Input />
        <Text>.com</Text>
      </InputGroup>
    </div>
  )
}
