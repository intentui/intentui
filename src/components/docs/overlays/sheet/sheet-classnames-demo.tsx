"use client"

import { Button } from "@/components/ui/button"
import { Sheet } from "@/components/ui/sheet"

export default function SheetClassnamesDemo() {
  return (
    <Sheet>
      <Button>Open</Button>
      <Sheet.Content
        classNames={{
          overlay: "bg-white/50 dark:bg-black/50 backdrop-blur",
          content: "min-w-80",
        }}
      >
        <Sheet.Header title="Custom Classnames" description="This sheet has custom class names." />
        <Sheet.Footer>
          <Sheet.Close>Close</Sheet.Close>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet>
  )
}
