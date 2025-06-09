"use client"

import { Button } from "@/components/ui/button"
import { IconBrandParsinta } from "@intentui/icons"

export default function ButtonOnlyIconDemo() {
  return (
    <Button size="square-petite" intent="outline">
      <IconBrandParsinta />
    </Button>
  )
}
