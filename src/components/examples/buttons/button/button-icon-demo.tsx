"use client"

import { Cog6ToothIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"

export default function ButtonIconDemo() {
  return (
    <Button intent="danger">
      <Cog6ToothIcon />
      Settings
    </Button>
  )
}
