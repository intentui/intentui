"use client"

import { Button } from "@/components/ui/button"

export default function ButtonBasicDemo() {
  return <Button onPress={() => alert("Pressed")}>Label</Button>
}
