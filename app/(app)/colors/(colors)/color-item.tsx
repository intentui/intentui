import * as React from "react"

import { formatColorForTailwind, rgbToOklch, textColorBasedOnBg } from "@/resources/lib/colors"
import { IconBulletFill, IconCheck, IconDuplicate } from "@intentui/icons"
import { parseColor } from "@react-stately/color"
import type { ColorFormat } from "@react-types/color"
import type { ListBoxItemProps } from "react-aria-components"
import { ListBoxItem } from "react-aria-components"
import type { ColorShade, FormatOnlyForTailwindVariableType } from "resources/types"
import { toast } from "sonner"
import { cn, isBrightColor } from "ui"
import { copyToClipboard } from "usemods"

interface ColorItemProps extends ListBoxItemProps {
  item: ColorShade
  name: string
  isForTailwindVariable: boolean
  selectedFormat: FormatOnlyForTailwindVariableType | ColorFormat
  showItem?: boolean
}

const ColorItem = ({
  showItem = false,
  item,
  name,
  isForTailwindVariable,
  selectedFormat
}: ColorItemProps) => {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = async (selectedColor: string) => {
    const toCopy = isForTailwindVariable
      ? formatColorForTailwind(selectedColor, selectedFormat as FormatOnlyForTailwindVariableType)
      : selectedColor

    await copyToClipboard(toCopy)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    toast.success(`Copy ${toCopy} to clipboard.`, {
      classNames: {
        toast: "[&:has([data-icon])_[data-content]]:!ml-0",
        icon: "hidden"
      }
    })
  }
  return (
    <ListBoxItem
      textValue={name}
      className={cn(
        "w-full h-14 sm:h-24 group focus:outline-none focus:rounded-sm cursor-pointer rounded relative",
        isBrightColor(item.color)
          ? "ring-1 ring-inset ring-black/10"
          : "dark:ring-1 dark:ring-inset dark:ring-white/10"
      )}
      onAction={() =>
        handleCopy(
          selectedFormat === "oklch"
            ? rgbToOklch(parseColor(item.color as string)?.toString("rgb")).replaceAll(
                "0.000 NaN",
                "0 0"
              )
            : parseColor(item.color as string)?.toString(selectedFormat as ColorFormat)
        )
      }
      style={{
        color: textColorBasedOnBg(item.color),
        backgroundColor: item.color
      }}
    >
      <span
        className={cn(
          "group-hover:block hidden text-xs left-1/2 -translate-x-1/2 top-2 absolute font-mono",
          copied && "block"
        )}
      >
        {copied ? <IconCheck /> : <IconDuplicate />}
      </span>
      {[500, "500"].includes(item.shade) && (
        <IconBulletFill className="size-1 opacity-50 sm:size-2 ml-1 mt-1 sm:mt-10 sm:mx-auto" />
      )}
      {showItem ? (
        <div className="flex p-2 uppercase absolute bottom-0 flex-col justify-end text-xs">
          <span>{item.shade}</span>
          <span>{item.color}</span>
        </div>
      ) : (
        <span className="text-xs left-1/2 -translate-x-1/2 bottom-2 absolute font-mono flex flex-col justify-center">
          {item.shade}
        </span>
      )}
    </ListBoxItem>
  )
}

export { ColorItem }
