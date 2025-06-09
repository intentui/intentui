"use client"

import * as React from "react"

import { snippetVariants } from "@/components/docs/rehype/code"
import { IconCheck, IconDuplicate } from "@intentui/icons"
import { AnimatePresence, motion } from "motion/react"
import { usePathname } from "next/navigation"
import { toast } from "sonner"
import { Button } from "ui"

export function TakeCurrentUrl() {
  const [copied, setCopied] = React.useState(false)
  const pathname = usePathname()
  const text = pathname.includes("/docs")
    ? "https://intentui.com/" + pathname.split("/").pop()
    : "https://intentui.com" + pathname
  const handleCopy = async () => {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text as string)
        toast.success(`Copied ${text} to clipboard`, {
          classNames: {
            toast: "[&:has([data-icon])_[data-content]]:!ml-0",
            icon: "hidden"
          }
        })
        setCopied(true)
        setTimeout(() => setCopied(false), 2000) // Reset the copied state after 2 seconds
      } catch {
        toast.error("Failed to copy to clipboard")
      }
    } else {
      toast.error("Failed to copy to clipboard")
    }
  }
  return (
    <Button
      appearance="outline"
      size="square-petite"
      className="[&_[data-slot=icon]]:text-fg"
      aria-label={"Copy " + text + " to clipboard"}
      onPress={handleCopy}
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="checkmark"
            variants={snippetVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <IconCheck />
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            variants={snippetVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <IconDuplicate />
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  )
}
