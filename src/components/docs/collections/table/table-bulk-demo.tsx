"use client"

import { useState } from "react"
import type { Selection } from 'react-aria-components/GridList';
import { Description } from "@/components/ui/field"
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function TableBulkDemo() {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set())
  return (
    <div className="rounded-lg border p-4">
      <Table
        aria-label="Books"
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <TableHeader>
          <TableColumn className="w-0">#</TableColumn>
          <TableColumn isRowHeader>Title</TableColumn>
          <TableColumn>Author</TableColumn>
          <TableColumn>Genre</TableColumn>
          <TableColumn>Published</TableColumn>
        </TableHeader>
        <TableBody items={books}>
          {(item) => (
            <TableRow>
              <TableCell>{item.id}</TableCell>
              <TableCell className="whitespace-nowrap">{item.title}</TableCell>
              <TableCell className="whitespace-nowrap">{item.author}</TableCell>
              <TableCell>{item.genre}</TableCell>
              <TableCell>{item.publishedYear}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Description className="mt-2 block text-muted-fg [&>strong]:text-fg">
        {Array.from(selectedKeys).length > 0 ? (
          <>
            You have selected: <strong>{Array.from(selectedKeys).join(", ")}</strong>
          </>
        ) : (
          "You have not selected anything."
        )}
      </Description>
    </div>
  )
}

export const books = [
  {
    id: "1",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    publishedYear: 1960,
  },
  {
    id: "2",
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    publishedYear: 1949,
  },
  {
    id: "3",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    publishedYear: 1925,
  },
  {
    id: "4",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    publishedYear: 1951,
  },
  {
    id: "5",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    publishedYear: 1813,
  },
  {
    id: "6",
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publishedYear: 1954,
  },
  {
    id: "7",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    publishedYear: 1997,
  },
]
