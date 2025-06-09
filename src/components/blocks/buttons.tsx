"use client"

import { Button } from "@/components/ui/button"

import { Wrapper } from "@/app/(home)/partials/resources"

export function Buttons() {
  return (
    <Wrapper>
      <div className="flex gap-4">
        <Button intent="plain">Label</Button>
        <Button intent="outline">Label</Button>
        <Button intent="secondary">Label</Button>
      </div>
    </Wrapper>
  )
}
