'use client'

import { Collection } from 'react-aria-components/Collection'
import { MenuLoadMoreItem } from 'react-aria-components/Menu'
import { useAsyncList } from 'react-stately/useAsyncList'
import { Button } from '@/components/ui/button'
import { Menu, MenuContent, MenuItem } from '@/components/ui/menu'
import { ProgressCircle } from '@/components/ui/progress-circle'

interface Character {
  name: string
  height: string
  birth_year: string
}

export default function MenuInfiniteScrollDemo() {
  const list = useAsyncList<Character>({
    async load({ signal, cursor }) {
      if (cursor) {
        cursor = cursor.replace(/^http:\/\//i, 'https://')
      }

      const res = await fetch(cursor || 'https://swapi.py4e.com/api/people', { signal })
      const json = await res.json()

      return {
        items: json.results,
        cursor: json.next,
      }
    },
  })

  return (
    <Menu>
      <Button intent="secondary">Browse characters</Button>
      <MenuContent aria-label="Star Wars characters" className="max-h-72 min-w-64">
        <Collection items={list.items}>
          {(item) => (
            <MenuItem id={item.name} textValue={item.name}>
              <span className="flex flex-col">
                <span>{item.name}</span>
                <span className="text-muted-fg text-xs">
                  {item.height} cm · Born {item.birth_year}
                </span>
              </span>
            </MenuItem>
          )}
        </Collection>
        <MenuLoadMoreItem
          className="col-span-full py-3"
          onLoadMore={list.loadMore}
          isLoading={list.loadingState === 'loadingMore'}
        >
          <ProgressCircle className="mx-auto" isIndeterminate aria-label="Loading more..." />
        </MenuLoadMoreItem>
      </MenuContent>
    </Menu>
  )
}
