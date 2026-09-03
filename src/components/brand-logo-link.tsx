import { cn } from 'cn'
import { BrandIntentuiIcon } from '@/components/icons/brand-intentui-icon'
import { Link } from '@/components/ui/link'

export function BrandLogoLink({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn('mr-2 flex items-center gap-x-2', className)}
      aria-label="Goto homepage"
    >
      <BrandIntentuiIcon className="size-6 shrink-0" />
      <span className="hidden min-w-0 sm:inline">
        <span>Intent</span> <span className="text-muted-fg">UI</span>
      </span>
    </Link>
  )
}
