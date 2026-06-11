"use client"

import { ColorGenerator } from "@/app/(app)/colors/(colors)/color-generator"
import { ColorItem } from "@/app/(app)/colors/(colors)/color-item"
import { Container } from "@/components/ui/container"
import colors from "@/json/colors.json"

export function ColorPalette() {
  return (
    <Container
      constrained
      className="border-page bg-bg px-0 shadow-fg/10 sm:border-x sm:px-0 lg:px-0"
    >
      <ColorGenerator />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {Object.keys(colors).map((key) => (
          <ColorItem key={key} color={key as keyof typeof colors} />
        ))}
      </div>
    </Container>
  )
}
