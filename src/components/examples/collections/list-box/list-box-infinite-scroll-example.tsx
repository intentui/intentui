'use client'
import { Collection } from 'react-aria-components/Collection'
import { ListBoxLoadMoreItem } from 'react-aria-components/ListBox'
import { useAsyncList } from 'react-stately/useAsyncList'
import { ListBox, ListBoxItem } from '@/components/ui/list-box'
import { ProgressCircle } from '@/components/ui/progress-circle'

interface Character {
  name: string
}
export default function ListBoxInfiniteScrollDemo() {
  const list = useAsyncList<Character>({
    async load({ signal, cursor }) {
      const res = await fetch(cursor || `https://pokeapi.co/api/v2/pokemon`, { signal })
      const json = await res.json()

      return {
        items: json.results,
        cursor: json.next,
      }
    },
  })

  return (
    <ListBox aria-label="Pick a Pokemon" items={list.items} selectionMode="single">
      <Collection items={list.items}>
        {(item) => (
          <ListBoxItem id={item.name} textValue={item.name}>
            {item.name}
          </ListBoxItem>
        )}
      </Collection>
      <ListBoxLoadMoreItem
        onLoadMore={list.loadMore}
        isLoading={list.loadingState === 'loadingMore'}
      >
        <ProgressCircle className="mx-auto mb-4" isIndeterminate aria-label="Loading more..." />
      </ListBoxLoadMoreItem>
    </ListBox>
  )
}
