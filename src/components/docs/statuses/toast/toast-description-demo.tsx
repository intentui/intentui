"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"

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
