"use client"
import { useMemo } from "react"
import { Button, Link } from "react-aria-components"
import { twJoin, twMerge } from "tailwind-merge"

type Bar<T> = T & {
  key?: string
  href?: string
  value: number
  name: string
}

interface BarListProps<T = unknown> extends React.ComponentProps<"div"> {
  data: Bar<T>[]
  valueFormatter?: (value: number) => string
  showAnimation?: boolean
  onValueChange?: (payload: Bar<T>) => void
  sortOrder?: "ascending" | "descending" | "none"
}

function BarList<T>({
  data = [],
  valueFormatter = (value) => value.toString(),
  showAnimation = false,
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
              onValueChange ? "-m-0! cursor-pointer hover:bg-secondary" : "",
            )}
          >
            <div
              className={twJoin(
                "flex items-center rounded-sm bg-primary/15 transition-all dark:bg-primary/20",
                rowHeight,
                onValueChange ? "group-hover:bg-primary/20 dark:group-hover:bg-primary/35" : "",
                index === sortedData.length - 1 && "mb-0",
                showAnimation && "duration-700",
              )}
              style={{ width: `${widths[index]}%` }}
            >
              <div className="absolute left-2 flex max-w-full pr-2">
                {item.href ? (
                  <Link
                    href={item.href}
                    className={twJoin(
                      "truncate whitespace-nowrap rounded-sm text-sm",
                      "text-fg",
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
                  <p className="truncate whitespace-nowrap text-fg text-sm">{item.name}</p>
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

export { BarList, type BarListProps }
