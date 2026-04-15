"use client"
import { StarIcon } from "@heroicons/react/24/solid"
import { useDragAndDrop } from 'react-aria-components/useDragAndDrop';
import { useListData } from 'react-stately/useListData';
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function TableDragDemo() {
  const list = useListData({
    initialItems: movies,
  })

  const { dragAndDropHooks } = useDragAndDrop({
    getItems: (keys) =>
      [...keys].map((key) => ({
        "text/plain": list.getItem(key)?.name ?? "",
      })),
    onReorder(e) {
      if (e.target.dropPosition === "before") {
        list.moveBefore(e.target.key, e.keys)
      } else if (e.target.dropPosition === "after") {
        list.moveAfter(e.target.key, e.keys)
      }
    },
  })
  return (
    <Table aria-label="Movies" selectionMode="multiple" dragAndDropHooks={dragAndDropHooks}>
      <TableHeader>
        <TableColumn>#</TableColumn>
        <TableColumn isRowHeader>Name</TableColumn>
        <TableColumn>Genre</TableColumn>
        <TableColumn>Release</TableColumn>
        <TableColumn>Rating</TableColumn>
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
          <TableRow>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.genre}</TableCell>
            <TableCell>{item.releaseYear}</TableCell>
            <TableCell>
              <div className="flex items-center gap-x-2">
                <StarIcon className="size-3.5 text-warning" /> <span>{item.rating}</span>
              </div>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}

const movies = [
  {
    id: "1",
    name: "The Matrix",
    genre: "Sci-Fi",
    releaseYear: 1999,
    director: "Wachowskis",
    rating: 8.7,
  },
  {
    id: "2",
    name: "Inception",
    genre: "Sci-Fi",
    releaseYear: 2010,
    director: "Christopher Nolan",
    rating: 8.8,
  },
  {
    id: "3",
    name: "The Godfather",
    genre: "Crime",
    releaseYear: 1972,
    director: "Francis Ford Coppola",
    rating: 9.2,
  },
  {
    id: "4",
    name: "Pulp Fiction",
    genre: "Crime",
    releaseYear: 1994,
    director: "Quentin Tarantino",
    rating: 8.9,
  },
  {
    id: "5",
    name: "The Dark Knight",
    genre: "Action",
    releaseYear: 2008,
    director: "Christopher Nolan",
    rating: 9.0,
  },
  {
    id: "6",
    name: "Fight Club",
    genre: "Drama",
    releaseYear: 1999,
    director: "David Fincher",
    rating: 8.8,
  },
  {
    id: "7",
    name: "Forrest Gump",
    genre: "Drama",
    releaseYear: 1994,
    director: "Robert Zemeckis",
    rating: 8.8,
  },
]
