import { IconBullet, IconBulletFill } from '@intentui/icons'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

import { useQueryString } from '@/hooks/use-query-string'
import type { SearchParamsProps } from '../icons-list'
import { Search } from './search'
import { SelectSize } from './select-size'
import { useIsMobile } from '@/hooks/use-mobile'
import { CommandLineIcon } from '@heroicons/react/24/outline'

export function Controller({ searchParams }: SearchParamsProps) {
  const isMobile = useIsMobile()
  const router = useRouter()
  const pathname = usePathname()
  const { t } = searchParams
  const [isSelected, setSelected] = useState<'solid' | 'regular'>(
    (t as 'solid' | 'regular') || 'regular'
  )

  const { createQueryString } = useQueryString()

  const onFilter = (type: 'solid' | 'regular') => {
    router.push(`${pathname}?${createQueryString('t', type)}`, {
      scroll: false,
    })
    setSelected(type)
  }

  return (
    <div className="relative">
      <div className="relative z-20 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="font-mono text-muted-fg lg:text-sm flex items-center gap-x-2">
          <CommandLineIcon className="size-4" />
          npm i @intentui/icons
        </span>
        <div className="flex items-center gap-1.5 w-full sm:w-fit">
          <Search />
          <Button
            aria-label={`Change filter to ${isSelected === 'solid' ? 'regular' : 'solid'}`}
            intent="outline"
            size="sq-md"
            className="shrink-0"
            onPress={() => onFilter(isSelected === 'solid' ? 'regular' : 'solid')}
          >
            {isSelected === 'solid' ? <IconBulletFill /> : <IconBullet />}
          </Button>
          {!isMobile && <SelectSize />}
        </div>
      </div>
    </div>
  )
}
