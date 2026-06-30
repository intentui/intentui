'use client'
import { useAsyncList } from '@react-stately/data'
import { Loader } from '@/components/ui/loader'
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface Character {
  title: string
  director: number
  producer: number
  release_date: number
}

export default function TableSortingDemo() {
  const list = useAsyncList<Character>({
    async load({ signal }) {
      const res = await fetch('https://swapi.py4e.com/api/films', {
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
          // @ts-expect-error
          const first = a[sortDescriptor.column]
          // @ts-expect-error
          const second = b[sortDescriptor.column]
          let cmp = (Number.parseInt(first) || first) < (Number.parseInt(second) || second) ? -1 : 1
          if (sortDescriptor.direction === 'descending') {
            cmp *= -1
          }
          return cmp
        }),
      }
    },
  })
  return (
    <div className="rounded-lg border p-4">
      <Table aria-label="Movies" sortDescriptor={list.sortDescriptor} onSortChange={list.sort}>
        <TableHeader>
          <TableColumn id="title" isRowHeader>
            Title
          </TableColumn>
          <TableColumn id="director" allowsSorting>
            Director
          </TableColumn>
          <TableColumn id="producer">Producer</TableColumn>
          <TableColumn id="release_date" allowsSorting>
            Release Date
          </TableColumn>
        </TableHeader>
        <TableBody
          items={list.items}
          renderEmptyState={() => (
            <div className="grid place-content-center p-10">
              <Loader />
            </div>
          )}
        >
          {(item) => (
            <TableRow id={item.title}>
              <TableCell className="whitespace-nowrap">{item.title}</TableCell>
              <TableCell className="whitespace-nowrap">{item.director}</TableCell>
              <TableCell className="whitespace-nowrap">{item.producer}</TableCell>
              <TableCell>{item.release_date}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
