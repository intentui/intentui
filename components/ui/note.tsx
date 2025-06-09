"use client"

import * as React from "react"

import { IconCircleCheck, IconCircleInfo, IconTriangleExclamation } from "@intentui/icons"
import { Text } from "react-aria-components"
import { tv, type VariantProps } from "tailwind-variants"

const noteStyles = tv({
  base: [
    "my-4 px-4 [&_.nd]:block [&_.nd]:text-sm py-4 leading-4 overflow-hidden rounded-lg border [&_strong]:font-semibold",
    "[&_[data-slot=icon]]:size-5 [&_[data-slot=icon]]:shrink-0 [&_a]:underline [&_a]:hover:underline"
  ],
  variants: {
    intent: {
      primary: ["border-primary/35 [&_a]:text-primary text-primary bg-primary/10 leading-4"],
      secondary: [
        "border-border [&_a]:text-secondary-fg text-secondary-fg bg-secondary/50 [&_[data-slot=icon]]:text-secondary-fg",
        "dark:[&_a]:text-secondary-fg dark:[&_[data-slot=icon]]:text-secondary-fg"
      ],
      info: ["border-info/20 text-info bg-info/5 dark:bg-info/10 leading-4"],
      warning:
        "border-warning/50 dark:border-warning/25 bg-warning/5 text-warning-fg dark:text-warning",
      danger: "border-danger/30 bg-danger/5 dark:bg-danger/10 text-danger",
      success: [
        "border-emerald-500/20 [&_a]:text-emerald-600 text-emerald-900 bg-emerald-50/50 [&_[data-slot=icon]]:text-emerald-600 leading-4",
        "dark:bg-emerald-500/10 dark:text-emerald-200 dark:[&_a]:text-emerald-50 dark:[&_[data-slot=icon]]:text-emerald-400"
      ]
    }
  }
})

interface NoteProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof noteStyles> {
  hideIndicator?: boolean
}

const Note = ({ hideIndicator = false, intent = "info", className, ...props }: NoteProps) => {
  return (
    <div className={noteStyles({ intent, className })} {...props}>
      <div className="flex items-start gap-x-2.5">
        {!hideIndicator && (
          <div className="w-5 shrink-0 mt-px">
            {["info", "primary", "secondary"].includes(intent) ? (
              <IconCircleInfo />
            ) : intent === "success" ? (
              <IconCircleCheck />
            ) : (
              <IconTriangleExclamation />
            )}
          </div>
        )}
        <Text slot="description" {...props} className="nd">
          {props.children}
        </Text>
      </div>
    </div>
  )
}

export { Note, type NoteProps }
