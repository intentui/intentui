'use client'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { findNeighbour, type Root as PageTreeRoot } from 'fumadocs-core/page-tree'
import { twMerge } from 'tailwind-merge'
import { buttonStyles } from '@/components/ui/button'
import { Link } from '@/components/ui/link'

interface PageProps {
  tree: PageTreeRoot
  url: string
  className?: string
}

export const Pager = ({ tree, url, className }: PageProps) => {
  const neighbours = findNeighbour(tree, url)

  return (
    <div className={twMerge('not-prose mt-6 flex w-full justify-between gap-3 sm:mt-8', className)}>
      {neighbours.previous && (
        <div className="group w-40">
          <Link
            className={buttonStyles({ intent: 'outline', className: 'rounded-sm' })}
            href={neighbours.previous.url}
          >
            <ChevronLeftIcon className="transition-transform group-hover:-translate-x-0.5" />
            <span className="line-clamp-1 text-fg">{neighbours.previous.name}</span>
          </Link>
        </div>
      )}

      {neighbours.next && (
        <div className="group flex w-40 justify-end">
          <Link
            className={buttonStyles({ intent: 'outline', className: 'rounded-sm' })}
            href={neighbours.next.url}
          >
            <span className="line-clamp-1 text-fg">{neighbours.next.name}</span>
            <ChevronRightIcon className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      )}
    </div>
  )
}
