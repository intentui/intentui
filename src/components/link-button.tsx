import { twMerge } from "tailwind-merge"
import type { VariantProps } from "tailwind-variants"
import { Link, type LinkProps } from "@/components/link"
import { buttonStyles } from "@/components/ui/button"

interface LinkButtonProps extends Omit<LinkProps, "className">, VariantProps<typeof buttonStyles> {
  className?: string
}
export function LinkButton({ className, ...props }: LinkButtonProps) {
  return (
    <Link
      className={buttonStyles({
        size: props.size,
        intent: props.intent,
        className: twMerge("rounded-sm", className),
      })}
      {...props}
    />
  )
}
