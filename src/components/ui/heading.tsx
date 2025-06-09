import { tv } from "tailwind-variants"

const headingStyles = tv({
  base: "font-sans text-fg tracking-tight",
  variants: {
    level: {
      1: "font-semibold text-xl sm:text-2xl",
      2: "font-semibold text-lg sm:text-xl",
      3: "font-semibold text-base sm:text-lg",
      4: "font-semibold text-base",
    },
    tracking: {
      tighter: "tracking-tighter",
      tight: "tracking-tight",
      normal: "tracking-normal",
      wide: "tracking-wide",
      wider: "tracking-wider",
      widest: "tracking-widest",
    },
  },
})
type HeadingType = { level?: 1 | 2 | 3 | 4 } & React.ComponentPropsWithoutRef<
  "h1" | "h2" | "h3" | "h4"
>

interface HeadingProps extends HeadingType {
  tracking?: "tighter" | "tight" | "normal" | "wide" | "wider" | "widest"
  className?: string | undefined
}

const Heading = ({ className, tracking = "normal", level = 1, ...props }: HeadingProps) => {
  const Element: `h${typeof level}` = `h${level}`
  return (
    <Element
      className={headingStyles({
        level,
        tracking,
        className,
      })}
      {...props}
    />
  )
}

export type { HeadingProps }
export { Heading }
