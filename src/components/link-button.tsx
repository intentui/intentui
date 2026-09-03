import { cn } from 'cn'
import type { VariantProps } from 'tailwind-variants'
import { buttonStyles } from '@/components/ui/button'
import { Link, type LinkProps } from '@/components/ui/link'

interface LinkButtonProps extends Omit<LinkProps, 'className'>, VariantProps<typeof buttonStyles> {
  className?: string
}
export function LinkButton({ className, ...props }: LinkButtonProps) {
  return (
    <Link
      className={buttonStyles({
        size: props.size,
        intent: props.intent,
        className: cn('rounded-sm', className),
      })}
      {...props}
    />
  )
}
