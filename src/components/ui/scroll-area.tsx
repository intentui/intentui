import { useLayoutEffect, useRef } from "react"
import { twJoin, twMerge } from "tailwind-merge"

type ScrollAreaOrientation = "vertical" | "horizontal" | "both"

export interface ScrollAreaProps extends React.ComponentPropsWithRef<"div"> {
  scrollFade?: boolean
  scrollbarGutter?: boolean
  orientation?: ScrollAreaOrientation
}

export function ScrollArea({
  ref: forwardedRef,
  className,
  children,
  scrollFade = false,
  scrollbarGutter = false,
  orientation = "both",
  ...props
}: ScrollAreaProps) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const isThrottledRef = useRef(false)

  const allowY = orientation === "vertical" || orientation === "both"
  const allowX = orientation === "horizontal" || orientation === "both"

  useLayoutEffect(() => {
    const el = viewportRef.current
    if (!el) return

    const update = () => {
      const rawHasY = el.scrollHeight > el.clientHeight + 1
      const rawHasX = el.scrollWidth > el.clientWidth + 1

      const hasY = allowY && rawHasY
      const hasX = allowX && rawHasX

      el.toggleAttribute("data-has-overflow-y", hasY)
      el.toggleAttribute("data-has-overflow-x", hasX)

      const yStart = hasY ? Math.max(0, el.scrollTop) : 0
      const yEnd = hasY ? Math.max(0, el.scrollHeight - el.clientHeight - el.scrollTop) : 0
      const xStart = hasX ? Math.max(0, el.scrollLeft) : 0
      const xEnd = hasX ? Math.max(0, el.scrollWidth - el.clientWidth - el.scrollLeft) : 0

      el.style.setProperty("--scroll-area-overflow-y-start", `${yStart}px`)
      el.style.setProperty("--scroll-area-overflow-y-end", `${yEnd}px`)
      el.style.setProperty("--scroll-area-overflow-x-start", `${xStart}px`)
      el.style.setProperty("--scroll-area-overflow-x-end", `${xEnd}px`)
    }

    const scheduleUpdate = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(update)
    }

    const throttledScrollUpdate = () => {
      if (isThrottledRef.current) return
      isThrottledRef.current = true
      scheduleUpdate()
      setTimeout(() => {
        isThrottledRef.current = false
      }, 16)
    }

    const ro = new ResizeObserver(scheduleUpdate)
    ro.observe(el)

    el.addEventListener("scroll", throttledScrollUpdate, { passive: true })
    update()

    return () => {
      el.removeEventListener("scroll", throttledScrollUpdate)
      ro.disconnect()
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [allowX, allowY])

  return (
    <div ref={forwardedRef} className={twMerge("size-full min-h-0", className)} {...props}>
      <div
        ref={viewportRef}
        className={twJoin(
          "h-full overscroll-auto rounded-[inherit] outline-none transition-shadow data-has-overflow-y:overscroll-y-contain data-has-overflow-x:overscroll-x-contain",

          orientation === "vertical"
            ? "overflow-y-auto overflow-x-hidden"
            : orientation === "horizontal"
              ? "overflow-x-auto overflow-y-hidden"
              : "overflow-auto",
          scrollFade
            ? [
                allowY &&
                  "mask-t-from-[calc(100%-min(var(--fade-size,--spacing(6)),var(--scroll-area-overflow-y-start,0)))] mask-b-from-[calc(100%-min(var(--fade-size,--spacing(6)),var(--scroll-area-overflow-y-end,0)))]",
                allowX &&
                  "mask-l-from-[calc(100%-min(var(--fade-size,--spacing(6)),var(--scroll-area-overflow-x-start,0)))] mask-r-from-[calc(100%-min(var(--fade-size,--spacing(6)),var(--scroll-area-overflow-x-end,0)))]",
              ]
            : "",
          scrollbarGutter
            ? [allowY && "data-has-overflow-y:pe-2.5", allowX && "data-has-overflow-x:pb-2.5"]
            : "",
        )}
        data-slot="scroll-area-viewport"
      >
        {children}
      </div>
    </div>
  )
}
