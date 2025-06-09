"use client"

import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function ToastDescriptionDemo() {
  return (
    <Button
      onPress={() =>
        toast("Cart Updated", {
          description: "Your item’s in the cart. Tap here to check it out.",
        })
      }
    >
      Add to Cart
    </Button>
  )
}
