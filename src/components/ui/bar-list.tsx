"use client"
import { useMemo } from "react"
import { Button } from "react-aria-components"
import { twJoin, twMerge } from "tailwind-merge"
import { Link } from "./link"

type Bar<T> = T & {
  key?: string
  href?: string
  value: number
  name: string
}

interface BarListProps<T = unknown> extends React.ComponentProps<"div"> {
  data: Bar<T>[]
  valueFormatter?: (value: number) => string
  onValueChange?: (payload: Bar<T>) => void
  sortOrder?: "ascending" | "descending" | "none"
}

export function BarList<T>({
  data = [],
  valueFormatter = (value) => value.toString(),
  onValueChange,
  sortOrder = "descending",
  className,
  ref,
  ...props
}: BarListProps<T>) {
  const Component = onValueChange ? Button : "div"
  const sortedData = useMemo(() => {
    if (sortOrder === "none") {
      return data
    }
    return [...data].sort((a, b) => {
      return sortOrder === "ascending" ? a.value - b.value : b.value - a.value
    })
  }, [data, sortOrder])

  const widths = useMemo(() => {
    const maxValue = Math.max(...sortedData.map((item) => item.value), 0)
    return sortedData.map((item) =>
      item.value === 0 ? 0 : Math.max((item.value / maxValue) * 100, 2),
    )
  }, [sortedData])

  const rowHeight = "h-8"

  return (
    <div ref={ref} className={twMerge("flex justify-between space-x-6", className)} {...props}>
      <div className="relative w-full space-y-1.5">
        {sortedData.map((item, index) => (
          <Component
            key={item.key ?? item.name}
            onClick={() => {
              onValueChange?.(item)
            }}
            className={twJoin(
              "group w-full rounded-sm",
              "focus:inset-ring focus:inset-ring-ring focus:outline-hidden focus:ring-2 focus:ring-ring/20",
              onValueChange ? "m-0! cursor-pointer hover:bg-secondary" : "",
            )}
          >
            <div
              className={twJoin(
                "flex items-center rounded-sm bg-primary/30",
                rowHeight,
                onValueChange ? "group-hover:bg-primary/40 dark:group-hover:bg-primary/40" : "",
                index === sortedData.length - 1 && "mb-0",
              )}
              style={{ width: `${widths[index]}%` }}
            >
              <div className="absolute left-2 flex max-w-full pr-3 sm:pr-2">
                {item.href ? (
                  <Link
                    href={item.href}
                    className={twJoin(
                      "truncate whitespace-nowrap rounded-sm font-normal text-base/6 text-fg sm:text-sm/6",
                      "hover:underline hover:underline-offset-2",
                      "focus:inset-ring focus:inset-ring-ring focus:outline-hidden focus:ring-2 focus:ring-ring/20",
                    )}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <p className="truncate whitespace-nowrap text-base/6 text-fg sm:text-sm/6">
                    {item.name}
                  </p>
                )}
              </div>
            </div>
          </Component>
        ))}
      </div>
      <div>
        {sortedData.map((item, index) => (
          <div
            key={item.key ?? item.name}
            className={twJoin(
              "flex items-center justify-end",
              rowHeight,
              index === sortedData.length - 1 ? "mb-0" : "mb-1.5",
            )}
          >
            <p className="truncate whitespace-nowrap text-fg text-sm leading-none">
              {valueFormatter(item.value)}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
