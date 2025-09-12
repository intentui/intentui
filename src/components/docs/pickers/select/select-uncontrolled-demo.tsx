"use client"

import { Select } from "@/components/ui/select"

export const movies = [
  { id: 1, title: "Inception" },
  { id: 2, title: "The Dark Knight" },
  { id: 3, title: "Interstellar" },
  { id: 4, title: "The Matrix" },
  { id: 5, title: "Pulp Fiction" },
]

export default function SelectUncontrolledDemo() {
  return (
    <Select defaultSelectedKey={2} label="Movies" placeholder="Select a movie">
      <Select.Trigger />
      <Select.Content items={movies}>
        {(item) => (
          <Select.Item id={item.id} textValue={item.title}>
            {item.title}
          </Select.Item>
        )}
      </Select.Content>
    </Select>
  )
}
