"use client"
import { Collection } from "react-aria-components/Collection"
import { TableLoadMoreItem } from "react-aria-components/Table"
import { useAsyncList } from "react-stately/useAsyncList"
import { ProgressCircle } from "@/components/ui/progress-circle"
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Character {
  name: string
  height: number
  mass: number
  birth_year: number
  gender: string
  eye_color: string
  skin_color: string
  hair_color: string
}

export default function TableInfiniteScrollDemo() {
  const list = useAsyncList<Character>({
    async load({ signal, cursor }) {
      if (cursor) {
        cursor = cursor.replace(/^http:\/\//i, "https://")
      }

      const res = await fetch(cursor || "https://swapi.py4e.com/api/people", { signal })
      const json = await res.json()

      return {
        items: json.results,
        cursor: json.next,
      }
    },
  })

  return (
    <div className="overflow-hidden rounded-lg border px-6">
      <Table
        bleed
        allowResize
        aria-label="People"
        className="h-72 [--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]"
      >
        <TableHeader className="sticky top-0 z-10 bg-muted">
          <TableColumn isRowHeader>Name</TableColumn>
          <TableColumn>Height</TableColumn>
          <TableColumn>Mass</TableColumn>
          <TableColumn>Birth year</TableColumn>
          <TableColumn>Gender</TableColumn>
          <TableColumn>Eye</TableColumn>
        </TableHeader>
        <TableBody
          renderEmptyState={() => (
            <div className="flex h-full items-center justify-center p-4 text-muted-fg">
              No characters found.
            </div>
          )}
        >
          <Collection items={list.items}>
            {(item) => (
              <TableRow id={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.height}</TableCell>
                <TableCell>{item.mass}</TableCell>
                <TableCell>{item.birth_year}</TableCell>
                <TableCell>{item.gender}</TableCell>
                <TableCell>{item.eye_color}</TableCell>
              </TableRow>
            )}
          </Collection>
          <TableLoadMoreItem
            className="sticky inset-x-0 bottom-0 h-16"
            onLoadMore={list.loadMore}
            isLoading={list.loadingState === "loadingMore"}
          >
            <ProgressCircle className="mx-auto" isIndeterminate aria-label="Loading more..." />
          </TableLoadMoreItem>
        </TableBody>
      </Table>
    </div>
  )
}
