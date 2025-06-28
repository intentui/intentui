"use client"

import { type ToastT, toast } from "sonner"
import { Button } from "@/components/ui/button"

const positions: ToastT["position"][] = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
  "top-center",
  "bottom-center",
]

export default function ToastPositionsDemo() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {positions.map((position) => (
        <Button
          intent="outline"
          size="sm"
          key={position}
          onPress={() =>
            toast("The registration is successful, click here to continue.", { position })
          }
        >
          {position}
        </Button>
      ))}
    </div>
  )
}
