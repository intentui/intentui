"use client"
import { Table } from "@/components/ui/table"
import { IconLoader } from "@intentui/icons"
import { useAsyncList } from "@react-stately/data"

interface Character {
  title: string
  director: number
  producer: number
  release_date: number
}

export default function TableSortingDemo() {
  const list = useAsyncList<Character>({
    async load({ signal }) {
      const res = await fetch("https://swapi.py4e.com/api/films", {
        signal,
      })
      const json = await res.json()
      return {
        items: json.results,
      }
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          // @ts-ignore
          const first = a[sortDescriptor.column]
          // @ts-ignore
          const second = b[sortDescriptor.column]
          let cmp = (Number.parseInt(first) || first) < (Number.parseInt(second) || second) ? -1 : 1
          if (sortDescriptor.direction === "descending") {
            cmp *= -1
          }
          return cmp
        }),
      }
    },
  })
  return (
    <Table aria-label="Movies" sortDescriptor={list.sortDescriptor} onSortChange={list.sort}>
      <Table.Header>
        <Table.Column id="title" isRowHeader>
          Title
        </Table.Column>
        <Table.Column id="director" allowsSorting>
          Director
        </Table.Column>
        <Table.Column id="producer">Producer</Table.Column>
        <Table.Column id="release_date" allowsSorting>
          Release Date
        </Table.Column>
      </Table.Header>
      <Table.Body
        items={list.items}
        renderEmptyState={() => (
          <div className="grid place-content-center p-10">
            <IconLoader className="animate-spin" />
          </div>
        )}
      >
        {(item) => (
          <Table.Row id={item.title}>
            <Table.Cell className="whitespace-nowrap">{item.title}</Table.Cell>
            <Table.Cell className="whitespace-nowrap">{item.director}</Table.Cell>
            <Table.Cell className="whitespace-nowrap">{item.producer}</Table.Cell>
            <Table.Cell>{item.release_date}</Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  )
}
