"use client"

import React, { useState } from "react"

import { ColorRow } from "@/app/(app)/colors/(colors)/color-row"
import { generateColorScale, getColorName } from "@/resources/lib/colors"
import { IconArrowWallRight } from "@intentui/icons"
import { parseColor } from "@react-stately/color"
import { ColorField, defaultColor, useMediaQuery } from "ui"

export function ColorGenerator() {
  const [colorObj, setColorObj] = useState<string>(defaultColor.toString("hex"))
  const handleChange = (newColor: any) => {
    setColorObj(newColor.toString("hex"))
  }

  const colorScales = generateColorScale(colorObj)
  const isDesktop = useMediaQuery("(min-width: 1024px)")
  return (
    <div className="mb-2">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="border rounded-lg p-2 bg-tertiary">
          <ColorField
            className="relative"
            value={parseColor(colorObj)}
            onChange={handleChange}
            placeholder={defaultColor.toString("hex")}
            suffix={
              <span className="text-xs sm:border-0 sm:p-0 px-2 cursor-pointer py-1.5 border rounded-sm absolute right-[4px] sm:right-2.5 font-mono top-[0.3rem] sm:top-3">
                <IconArrowWallRight className="hidden sm:inline" />
                <span className="sm:hidden inline">generate</span>
              </span>
            }
          />
        </div>

        <div className="lg:col-span-2">
          <ColorRow
            showItem={isDesktop}
            item={{
              name: getColorName(defaultColor.toString("hex")),
              children: colorScales as any
            }}
          />
        </div>
      </div>
    </div>
  )
}
