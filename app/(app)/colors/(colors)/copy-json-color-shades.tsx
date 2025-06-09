import React, { useState } from "react"

import { getColorName, rgbToOklch } from "@/resources/lib/colors"
import { wait } from "@/resources/lib/utils"
import { IconBrackets2, IconCheck, IconDuplicate } from "@intentui/icons"
import { parseColor } from "@react-stately/color"
import type { ColorFormat } from "@react-types/color"
import { Heading } from "react-aria-components"
import { twJoin } from "tailwind-merge"
import { Button, ColorSwatch, Modal } from "ui"
import { copyToClipboard } from "usemods"

import type { ColorSelectorType } from "./color-row"

interface CopyJsonColorShadesProps {
  selectedFormat: ColorSelectorType
  name: string
  color: string
  colorScales: any
}

export function CopyJsonColorShades({
  selectedFormat,
  colorScales,
  name,
  color
}: CopyJsonColorShadesProps) {
  const [open, setOpen] = useState(false)
  const [colorName, setColorName] = useState<string>(name || "unknown")
  const [isCopied, setIsCopied] = useState(false)
  const handleOpen = () => {
    setColorName(getColorName(color))
    setOpen(true)
  }
  const renderColorScaleAsCode = (colorScales: any, colorName: string) => {
    const formattedColorName = colorName.includes("-")
      ? `'${getColorName(colorScales[4].color)}'`
      : colorName

    const codeString = colorScales
      .map(({ shade, color }: any) => {
        const parsedColor =
          selectedFormat === "oklch"
            ? rgbToOklch(parseColor(color).toString("rgb"))
                .replaceAll("0.000 NaN", "0 0")
                .replace(/oklch\(([^)]+)\)/, "oklch($1 / <alpha-value>)")
            : parseColor(color).toString(selectedFormat as ColorFormat)
        return `'${shade}': '${parsedColor}'`
      })
      .join(",\n  ")
    return `${formattedColorName}: {\n  ${codeString}\n}`
  }

  const handleCopy = () => {
    const codeString = renderColorScaleAsCode(colorScales, colorName)
    copyToClipboard(codeString)
    setIsCopied(true)
    wait(1500).then(() => setIsCopied(false))
    wait(2800).then(() => setOpen(false))
  }

  return (
    <Modal onOpenChange={setOpen} isOpen={open}>
      <Button
        aria-label={`Copy ${colorName} color scale`}
        className="size-8"
        size="square-petite"
        appearance="outline"
        onPress={handleOpen}
      >
        <IconBrackets2 />
      </Button>
      <Modal.Content closeButton={false} size="2xl" classNames={{ content: "p-0 [&>.dlc]:p-0" }}>
        <Heading className="sr-only">{name}</Heading>

        <div
          className={twJoin(
            "relative grid divide-x",
            selectedFormat === "oklch" ? "sm:grid-cols-3" : "sm:grid-cols-2"
          )}
        >
          <div className="hidden sm:grid place-content-center font-mono text-sm relative">
            <ColorSwatch colorName={getColorName(color, false)} color={color} />
          </div>
          <div
            className={twJoin(
              "p-2",
              selectedFormat === "oklch" ? "sm:col-span-2" : "sm:col-span-1"
            )}
          >
            <div className="absolute top-2.5 right-2.5">
              <Button
                onPress={handleCopy}
                className="size-7 rounded-sm backdrop-blur-lg"
                aria-label="Copy json color scale"
                size="square-petite"
                appearance="outline"
              >
                {isCopied ? <IconCheck /> : <IconDuplicate />}
              </Button>
            </div>
            <pre>
              <code className="text-xs font-mono">{renderColorScaleAsCode(colorScales, name)}</code>
            </pre>
          </div>
        </div>
      </Modal.Content>
    </Modal>
  )
}
