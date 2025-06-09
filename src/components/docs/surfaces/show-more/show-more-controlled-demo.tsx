"use client"

import { useState } from "react"

import { ShowMore } from "@/components/ui/show-more"
import { IconChevronLgDown } from "@intentui/icons"

export default function ShowMoreControlledDemo() {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <div className="py-6">
      <ShowMore onChange={setIsExpanded} isSelected={isExpanded}>
        {isExpanded ? "Expand" : "Collapse"}
        <IconChevronLgDown
          className={`${isExpanded ? "rotate-180" : ""} size-4 transition-transform duration-200`}
        />
      </ShowMore>
    </div>
  )
}
