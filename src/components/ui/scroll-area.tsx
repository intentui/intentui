import { useLayoutEffect, useRef } from "react"
import { twJoin, twMerge } from "tailwind-merge"

type ScrollAreaOrientation = "vertical" | "horizontal" | "both"

export interface ScrollAreaProps extends React.ComponentProps<"div"> {
  scrollFade?: boolean
  scrollbarGutter?: boolean
  orientation?: ScrollAreaOrientation
}

export function ScrollArea({
  ref,
  className,
  children,
  scrollFade = false,
  scrollbarGutter = false,
  orientation = "both",
  ...props
}: ScrollAreaProps) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)

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

    const ro = new ResizeObserver(scheduleUpdate)
    ro.observe(el)

    const onScroll = () => scheduleUpdate()
    el.addEventListener("scroll", onScroll, { passive: true })
    update()

    return () => {
      el.removeEventListener("scroll", onScroll)
      ro.disconnect()
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [allowX, allowY])

  const overflowClass =
    orientation === "vertical"
      ? "overflow-y-auto overflow-x-hidden"
      : orientation === "horizontal"
        ? "overflow-x-auto overflow-y-hidden"
        : "overflow-auto"

  const gutterClass = scrollbarGutter
    ? twJoin(allowY && "data-has-overflow-y:pe-2.5", allowX && "data-has-overflow-x:pb-2.5")
    : ""

  const fadeClass = scrollFade
    ? twJoin(
        allowY &&
          "mask-t-from-[calc(100%-min(var(--fade-size,--spacing(6)),var(--scroll-area-overflow-y-start,0)))] mask-b-from-[calc(100%-min(var(--fade-size,--spacing(6)),var(--scroll-area-overflow-y-end,0)))]",
        allowX &&
          "mask-l-from-[calc(100%-min(var(--fade-size,--spacing(6)),var(--scroll-area-overflow-x-start,0)))] mask-r-from-[calc(100%-min(var(--fade-size,--spacing(6)),var(--scroll-area-overflow-x-end,0)))]",
      )
    : ""

  return (
    <div ref={ref} className={twMerge("size-full min-h-0", className)} {...props}>
      <div
        ref={viewportRef}
        className={twJoin(
          "h-full overscroll-contain rounded-[inherit] outline-none transition-shadow",
          overflowClass,
          fadeClass,
          gutterClass,
        )}
        data-slot="scroll-area-viewport"
      >
        {children}
      </div>
    </div>
  )
}
