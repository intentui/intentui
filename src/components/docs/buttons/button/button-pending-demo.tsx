"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { ProgressCircle } from "@/components/ui/progress-circle"
import { IconPlus } from "@intentui/icons"

export default function ButtonPendingDemo() {
  const [isLoading, setLoading] = useState(false)

  const handlePress = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4500)
  }
  return (
    <Button onPress={handlePress} isPending={isLoading}>
      {({ isPending }) => (
        <>
          {isPending ? <ProgressCircle isIndeterminate aria-label="Creating..." /> : <IconPlus />}
          {isLoading ? "Creating..." : "Create"}
        </>
      )}
    </Button>
  )
}
