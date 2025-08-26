"use client"

import { Collection, TableLoadMoreItem } from "react-aria-components"
import { useAsyncList } from "react-stately"
import { ProgressCircle } from "@/components/ui/progress-circle"
import { Table } from "@/components/ui/table"

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
        <Table.Header className="sticky top-0 z-10 bg-muted">
          <Table.Column isRowHeader>Name</Table.Column>
          <Table.Column>Height</Table.Column>
          <Table.Column>Mass</Table.Column>
          <Table.Column>Birth year</Table.Column>
          <Table.Column>Gender</Table.Column>
          <Table.Column>Eye</Table.Column>
        </Table.Header>
        <Table.Body
          renderEmptyState={() => (
            <div className="flex h-full items-center justify-center p-4 text-muted-fg">
              No characters found.
            </div>
          )}
        >
          <Collection items={list.items}>
            {(item) => (
              <Table.Row id={item.name}>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.height}</Table.Cell>
                <Table.Cell>{item.mass}</Table.Cell>
                <Table.Cell>{item.birth_year}</Table.Cell>
                <Table.Cell>{item.gender}</Table.Cell>
                <Table.Cell>{item.eye_color}</Table.Cell>
              </Table.Row>
            )}
          </Collection>
          <TableLoadMoreItem
            className="sticky inset-x-0 bottom-0 h-16"
            onLoadMore={list.loadMore}
            isLoading={list.loadingState === "loadingMore"}
          >
            <ProgressCircle
              className="mx-auto"
              isIndeterminate
              aria-label="Loading more..."
            />
          </TableLoadMoreItem>
        </Table.Body>
      </Table>
    </div>
  )
}
