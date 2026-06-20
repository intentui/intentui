'use client'

import { Label } from '@/components/ui/field'
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'

export const movies = [
  { id: 1, title: 'Inception' },
  { id: 2, title: 'The Dark Knight' },
  { id: 3, title: 'Interstellar' },
  { id: 4, title: 'The Matrix' },
  { id: 5, title: 'Pulp Fiction' },
]

export default function SelectUncontrolledDemo() {
  return (
    <Select defaultValue={2} placeholder="Select a movie">
      <Label>Movies</Label>
      <SelectTrigger />
      <SelectContent items={movies}>
        {(item) => (
          <SelectItem id={item.id} textValue={item.title}>
            {item.title}
          </SelectItem>
        )}
      </SelectContent>
    </Select>
  )
}
