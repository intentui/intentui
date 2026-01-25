import { twMerge } from "tailwind-merge"
import { tv } from "tailwind-variants"
import { cx } from "@/lib/primitive"
import { Link } from "./link"

export function Text({ className, ...props }: React.ComponentPropsWithoutRef<"p">) {
  return (
    <p
      data-slot="text"
      {...props}
      className={twMerge("text-base/6 text-muted-fg sm:text-sm/6", className)}
    />
  )
}

export const textLinkStyles = tv({
  base: "text-primary-subtle-fg decoration-primary-subtle-fg/50 hover:underline hover:decoration-primary-subtle-fg has-data-[slot=icon]:inline-flex has-data-[slot=icon]:items-center has-data-[slot=icon]:gap-x-1",
})

export function TextLink({ className, ...props }: React.ComponentPropsWithoutRef<typeof Link>) {
  return <Link {...props} className={cx(textLinkStyles(), className)} />
}

export function Strong({ className, ...props }: React.ComponentPropsWithoutRef<"strong">) {
  return <strong {...props} className={twMerge("font-medium", className)} />
}

export function Code({ className, ...props }: React.ComponentPropsWithoutRef<"code">) {
  return (
    <code
      {...props}
      className={twMerge(
        "rounded-sm border bg-muted px-0.5 font-medium text-sm sm:text-[0.8125rem]",
        className,
      )}
    />
  )
}
