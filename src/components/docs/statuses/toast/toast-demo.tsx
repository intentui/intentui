"use client"

import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function ToastDemo() {
  return (
    <Button onPress={() => toast("The registration is successful, click here to continue.")}>
      Show Toast
    </Button>
  )
}
