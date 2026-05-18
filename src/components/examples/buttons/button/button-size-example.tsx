"use client"

import { BrandXIcon } from "@/components/icons/brand-x-icon"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function ButtonSizeDemo() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-wrap items-end gap-2">
        <Button size="xs">Label</Button>
        <Button size="sm">Label</Button>
        <Button>Label</Button>
        <Button size="lg">Label</Button>
      </div>
      <Separator />
      <div className="flex flex-wrap items-end gap-2">
        <Button size="sq-xs">
          <BrandXIcon />
        </Button>
        <Button size="sq-sm">
          <BrandXIcon />
        </Button>
        <Button size="sq-md">
          <BrandXIcon />
        </Button>
        <Button size="sq-lg">
          <BrandXIcon />
        </Button>
      </div>
    </div>
  )
}
