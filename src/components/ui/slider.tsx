"use client"

import React, { useState } from "react"

import type { SliderProps as SliderPrimitiveProps, SliderThumbProps } from "react-aria-components"
import {
  SliderOutput,
  Slider as SliderPrimitive,
  SliderStateContext,
  SliderThumb as SliderThumbPrimitive,
  SliderTrack as SliderTrackPrimitive,
  type SliderTrackProps,
  composeRenderProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { Description, Label } from "@/components/ui/field"
import { Tooltip } from "@/components/ui/tooltip"
import { composeTailwindRenderProps } from "@/lib/primitive"
import { twJoin, twMerge } from "tailwind-merge"

const sliderStyles = tv({
  base: "group relative flex touch-none select-none flex-col",
  variants: {
    orientation: {
      horizontal: "w-full min-w-56 gap-y-2",
      vertical: "h-full min-h-56 w-1.5 items-center gap-y-2",
    },
    isDisabled: {
      true: "disabled:opacity-50",
    },
  },
})

interface SliderProps extends SliderPrimitiveProps {
  output?: "inline" | "tooltip" | "none"
  label?: string
  description?: string
  thumbLabels?: string[]
}

const Slider = ({
  output = "inline",
  orientation = "horizontal",
  className,
  ...props
}: SliderProps) => {
  const showTooltip = output === "tooltip"
  const [showTooltipState, setShowTooltipState] = useState(false)

  const onFocusChange = () => {
    if (showTooltip) {
      setShowTooltipState(true)
    }
  }

  const onHoverStart = () => {
    if (showTooltip) {
      setShowTooltipState(true)
    }
  }

  const onFocusEnd = React.useCallback(() => {
    setShowTooltipState(false)
  }, [])

  React.useEffect(() => {
    if (showTooltip) {
      window.addEventListener("pointerup", onFocusEnd)
      return () => {
        window.removeEventListener("pointerup", onFocusEnd)
      }
    }
  }, [showTooltip, onFocusEnd])

  const renderThumb = (value: number) => {
    const thumb = (
      <SliderThumb
        index={value}
        aria-label={props.thumbLabels?.[value]}
        onFocusChange={onFocusChange}
        onHoverStart={onHoverStart}
      />
    )

    if (!showTooltip) return thumb

    return (
      <Tooltip delay={0} isOpen={showTooltipState} onOpenChange={setShowTooltipState}>
        {thumb}
        <Tooltip.Content
          showArrow={false}
          offset={orientation === "horizontal" ? 8 : -140}
          crossOffset={orientation === "horizontal" ? -85 : 0}
          className="min-w-6 px-1.5 py-1 text-xs"
          placement={orientation === "vertical" ? "right" : "top"}
        >
          <SliderOutput />
        </Tooltip.Content>
      </Tooltip>
    )
  }

  return (
    <SliderPrimitive
      orientation={orientation}
      className={composeRenderProps(className, (className, renderProps) =>
        sliderStyles({ ...renderProps, className }),
      )}
      {...props}
    >
      <div className="flex text-fg">
        {props.label && <Label>{props.label}</Label>}
        {output === "inline" && (
          <SliderOutput className="text-muted-fg text-sm tabular-nums data-[orientation=vertical]:mx-auto data-[orientation=horizontal]:ml-auto">
            {({ state }) => state.values.map((_, i) => state.getThumbValueLabel(i)).join(" – ")}
          </SliderOutput>
        )}
      </div>
      <SliderTrack>
        {({ state }) => (
          <>
            <SliderFiller />
            {state.values.map((_, i) => (
              <React.Fragment key={i}>{renderThumb(i)}</React.Fragment>
            ))}
          </>
        )}
      </SliderTrack>
      {props.description && <Description>{props.description}</Description>}
    </SliderPrimitive>
  )
}

const SliderTrack = ({ className, ...props }: SliderTrackProps) => {
  return (
    <SliderTrackPrimitive
      {...props}
      className={composeTailwindRenderProps(
        className,
        twJoin([
          "[--slider:color-mix(in_oklab,var(--color-muted)_90%,black_10%)] dark:[--slider:color-mix(in_oklab,var(--color-muted)_90%,white_10%)]",
          "group/track relative cursor-default rounded-full bg-(--slider) disabled:cursor-default disabled:opacity-60",
          "grow group-data-[orientation=horizontal]:h-1.5 group-data-[orientation=horizontal]:w-full group-data-[orientation=vertical]:w-1.5 group-data-[orientation=vertical]:flex-1",
        ]),
      )}
    />
  )
}

const SliderFiller = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const state = React.useContext(SliderStateContext)
  const { orientation, getThumbPercent, values } = state || {}

  const getStyle = () => {
    const percent0 = getThumbPercent ? getThumbPercent(0) * 100 : 0
    const percent1 = getThumbPercent ? getThumbPercent(1) * 100 : 0

    if (values?.length === 1) {
      return orientation === "horizontal" ? { width: `${percent0}%` } : { height: `${percent0}%` }
    }

    return orientation === "horizontal"
      ? { left: `${percent0}%`, width: `${Math.abs(percent0 - percent1)}%` }
      : { bottom: `${percent0}%`, height: `${Math.abs(percent0 - percent1)}%` }
  }

  return (
    <div
      {...props}
      style={getStyle()}
      className={twMerge(
        "group-data-[orientation=horizontal]/top-0 pointer-events-none absolute rounded-full bg-primary group-disabled/track:opacity-60 group-data-[orientation=vertical]/track:bottom-0 group-data-[orientation=horizontal]/track:h-full group-data-[orientation=vertical]/track:w-full",
        className,
      )}
    />
  )
}

const thumbStyles = tv({
  base: [
    "top-[50%] left-[50%] size-[1.25rem] rounded-full border border-fg/10 bg-white outline-hidden ring-black transition-[width,height]",
  ],
  variants: {
    isFocusVisible: {
      true: "border-primary outline-hidden ring-ring/20",
    },
    isDragging: {
      true: "size-[1.35rem] cursor-grabbing border-primary",
    },
    isDisabled: {
      true: "opacity-50 forced-colors:border-[GrayText]",
    },
  },
})
const SliderThumb = ({ className, ...props }: SliderThumbProps) => {
  return (
    <SliderThumbPrimitive
      {...props}
      className={composeRenderProps(className, (className, renderProps) =>
        thumbStyles({ ...renderProps, className }),
      )}
    />
  )
}

export type { SliderProps }
export { Slider, SliderFiller, SliderTrack, SliderThumb }
