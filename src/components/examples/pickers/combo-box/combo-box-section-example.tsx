'use client'

import {
  ComboBox,
  ComboBoxContent,
  ComboBoxInput,
  ComboBoxItem,
  ComboBoxSection,
} from '@/components/ui/combo-box'
import { Label } from '@/components/ui/field'

export default function ComboBoxSectionDemo() {
  return (
    <ComboBox>
      <Label>Authors</Label>
      <ComboBoxInput placeholder="Select a author" />
      <ComboBoxContent defaultSelectedKeys={[1]} items={movies}>
        {(movie) => (
          <ComboBoxSection title={movie.title} items={movie.genres}>
            {(genre) => <ComboBoxItem textValue={genre.name}>{genre.name}</ComboBoxItem>}
          </ComboBoxSection>
        )}
      </ComboBoxContent>
    </ComboBox>
  )
}

const movies = [
  {
    id: 1,
    title: 'Inception',
    genres: [
      {
        id: 101,
        name: 'Sci-Fi',
      },
      {
        id: 102,
        name: 'Thriller',
      },
    ],
  },
  {
    id: 2,
    title: 'Titanic',
    genres: [
      {
        id: 201,
        name: 'Romance',
      },
      {
        id: 202,
        name: 'Drama',
      },
    ],
  },
  {
    id: 3,
    title: 'The Matrix',
    genres: [
      {
        id: 301,
        name: 'Action',
      },
      {
        id: 302,
        name: 'Sci-Fi',
      },
    ],
  },
  {
    id: 4,
    title: 'Gladiator',
    genres: [
      {
        id: 401,
        name: 'Action',
      },
      {
        id: 402,
        name: 'Drama',
      },
    ],
  },
  {
    id: 5,
    title: 'Casablanca',
    genres: [
      {
        id: 501,
        name: 'Romance',
      },
      {
        id: 502,
        name: 'Drama',
      },
    ],
  },
]
