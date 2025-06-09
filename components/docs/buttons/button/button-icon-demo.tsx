"use client"

import { IconBrandLaravel } from "@intentui/icons"
import { Button } from "ui"

export default function ButtonIconDemo() {
  return (
    <Button intent="danger">
      <IconBrandLaravel />
      Laravel
    </Button>
  )
}
