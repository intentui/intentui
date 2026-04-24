import { twMerge } from "tailwind-merge"
import type { VariantProps } from "tailwind-variants"
import { buttonStyles } from "@/components/ui/button"
import { Link, type LinkProps } from "@/components/link"

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
