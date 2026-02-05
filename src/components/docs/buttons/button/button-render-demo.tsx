"use client"

import { type HTMLMotionProps, motion } from "motion/react"
import { Button } from "@/components/ui/button"

export default function ButtonRenderDemo() {
  return (
    <Button
      render={(domProps, { isPressed }) => (
        <motion.button
          {...(domProps as HTMLMotionProps<"button">)}
          animate={{ scale: isPressed ? 0.9 : 1 }}
        />
      )}
    >
      Press me
    </Button>
  )
}
