import { twMerge } from "tailwind-merge"

interface HeadingProps extends React.ComponentProps<"h1" | "h2" | "h3" | "h4" | "h5" | "h6"> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

const Heading = ({ className, level = 1, ...props }: HeadingProps) => {
  const Element: `h${typeof level}` = `h${level}`
  return (
    <Element
      className={twMerge(
        "font-sans text-fg",
        level === 1 && "font-semibold text-xl sm:text-2xl",
        level === 2 && "font-semibold text-lg sm:text-xl",
        level === 3 && "font-semibold text-base sm:text-lg",
        level === 4 && "font-semibold text-base",
        className,
      )}
      {...props}
    />
  )
}

export type { HeadingProps }
export { Heading }
