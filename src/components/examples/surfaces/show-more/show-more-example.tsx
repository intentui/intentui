'use client'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { twMerge } from 'tailwind-merge'
import { ShowMore } from '@/components/ui/show-more'

export default function ShowMoreDemo() {
  return (
    <div className="py-6">
      <ShowMore>
        {({ isSelected }) => (
          <>
            Show {isSelected ? 'less' : 'more'}
            <ChevronDownIcon
              className={twMerge(
                isSelected ? 'rotate-180' : '',
                'size-4 transition-transform duration-200'
              )}
            />
          </>
        )}
      </ShowMore>
    </div>
  )
}
