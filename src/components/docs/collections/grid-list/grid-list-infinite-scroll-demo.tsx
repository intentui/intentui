"use client"
import { useAsyncList } from "@react-stately/data"
import { Collection } from "react-aria-components/Collection"
import { GridListLoadMoreItem } from "react-aria-components/GridList"
import { GridList, GridListItem } from "@/components/ui/grid-list"
import { ProgressCircle } from "@/components/ui/progress-circle"

interface Character {
  name: string
}

export default function GridListInfiniteScrollDemo() {
  const list = useAsyncList<Character>({
    async load({ signal, cursor }) {
      if (cursor) {
        cursor = cursor.replace(/^http:\/\//i, "https://")
      }

      const res = await fetch(cursor || `https://swapi.py4e.com/api/people/?search=`, {
        signal,
      })
      const json = await res.json()

      return {
        items: json.results,
        cursor: json.next,
      }
    },
  })
  return (
    <GridList
      className="max-h-56 overflow-y-auto"
      selectionMode="multiple"
      aria-label="Async loading ListView example"
    >
      <Collection items={list.items}>
        {(item) => <GridListItem id={item.name}>{item.name}</GridListItem>}
      </Collection>
      <GridListLoadMoreItem
        onLoadMore={list.loadMore}
        isLoading={list.loadingState === "loadingMore"}
      >
        <ProgressCircle className="mx-auto mb-4" isIndeterminate aria-label="Loading more..." />
      </GridListLoadMoreItem>
    </GridList>
  )
}
