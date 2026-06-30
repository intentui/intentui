'use client'

import { ArrowUpRightIcon } from '@heroicons/react/16/solid'
import { twMerge } from 'tailwind-merge'
import { buttonStyles } from '@/components/ui/button'
import { Link } from '@/components/ui/link'

export function NoLimitButton({ className }: { className?: string }) {
  return (
    <Link
      href="https://design.intentui.com/?utm_source=intentui.com&utm_medium=referral&utm_campaign=navprobutton"
      target="_blank"
      className={buttonStyles({
        size: 'sm',
        className: twMerge('rounded-sm', className),
      })}
    >
      Pro <ArrowUpRightIcon />
    </Link>
  )
}
