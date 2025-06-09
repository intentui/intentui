"use client"
import { ShowMore } from "@/components/ui/show-more"
import { IconChevronLgDown } from "@intentui/icons"
import { twMerge } from "tailwind-merge"

export default function ShowMoreDemo() {
  return (
    <div className="py-6">
      <ShowMore>
        {({ isSelected }) => (
          <>
            Show {isSelected ? "less" : "more"}
            <IconChevronLgDown
              className={twMerge(
                isSelected ? "rotate-180" : "",
                "size-4 transition-transform duration-200",
              )}
            />
          </>
        )}
      </ShowMore>
    </div>
  )
}
