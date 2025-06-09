"use client"
import { Table } from "@/components/ui/table"
import { IconStarFill } from "@intentui/icons"
import { useDragAndDrop } from "react-aria-components"
import { useListData } from "react-stately"

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
    <Table
      allowResize
      aria-label="Movies"
      selectionMode="multiple"
      dragAndDropHooks={dragAndDropHooks}
    >
      <Table.Header>
        <Table.Column>#</Table.Column>
        <Table.Column isRowHeader>Name</Table.Column>
        <Table.Column>Genre</Table.Column>
        <Table.Column>Release</Table.Column>
        <Table.Column>Rating</Table.Column>
      </Table.Header>
      <Table.Body items={list.items}>
        {(item) => (
          <Table.Row>
            <Table.Cell>{item.id}</Table.Cell>
            <Table.Cell>{item.name}</Table.Cell>
            <Table.Cell>{item.genre}</Table.Cell>
            <Table.Cell>{item.releaseYear}</Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-x-2">
                <IconStarFill className="size-3.5 text-warning" /> <span>{item.rating}</span>
              </div>
            </Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
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
