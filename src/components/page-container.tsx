import { cn } from 'cn'

export function PageContainer({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={cn('mx-auto px-4 sm:px-6 lg:max-w-(--breakpoint-2xl) lg:px-12', className)}
    />
  )
}
