"use client"

import { useState } from "react"

import { Description } from "@/components/ui/field"
import { Select } from "@/components/ui/select"
import type { Key } from "react-aria-components"

export const movies = [
  { id: 1, title: "Inception" },
  { id: 2, title: "The Dark Knight" },
  { id: 3, title: "Interstellar" },
  { id: 4, title: "The Matrix" },
  { id: 5, title: "Pulp Fiction" },
]

export default function SelectControlledDemo() {
  const [movie, setMovie] = useState<Key | null>("")
  return (
    <>
      <Select
        selectedKey={movie}
        onSelectionChange={setMovie}
        label="Movies"
        placeholder="Select a movie"
      >
        <Select.Trigger />
        <Select.List items={movies}>
          {(item) => (
            <Select.Option id={item.id} textValue={item.title}>
              {item.title}
            </Select.Option>
          )}
        </Select.List>
      </Select>
      <Description className="mt-2 block text-muted-fg [&>strong]:text-fg">
        You have selected: <strong>{movie}</strong>
      </Description>
    </>
  )
}
