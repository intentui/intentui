"use client"

import { ComboBox } from "@/components/ui/combo-box"

export default function ComboBoxSectionDemo() {
  return (
    <ComboBox placeholder="Select a author" label="Authors">
      <ComboBox.Input />
      <ComboBox.List defaultSelectedKeys={[1]} items={movies}>
        {(movie) => (
          <ComboBox.Section title={movie.title} items={movie.genres}>
            {(genre) => <ComboBox.Option textValue={genre.name}>{genre.name}</ComboBox.Option>}
          </ComboBox.Section>
        )}
      </ComboBox.List>
    </ComboBox>
  )
}

const movies = [
  {
    id: 1,
    title: "Inception",
    genres: [
      {
        id: 101,
        name: "Sci-Fi",
      },
      {
        id: 102,
        name: "Thriller",
      },
    ],
  },
  {
    id: 2,
    title: "Titanic",
    genres: [
      {
        id: 201,
        name: "Romance",
      },
      {
        id: 202,
        name: "Drama",
      },
    ],
  },
  {
    id: 3,
    title: "The Matrix",
    genres: [
      {
        id: 301,
        name: "Action",
      },
      {
        id: 302,
        name: "Sci-Fi",
      },
    ],
  },
  {
    id: 4,
    title: "Gladiator",
    genres: [
      {
        id: 401,
        name: "Action",
      },
      {
        id: 402,
        name: "Drama",
      },
    ],
  },
  {
    id: 5,
    title: "Casablanca",
    genres: [
      {
        id: 501,
        name: "Romance",
      },
      {
        id: 502,
        name: "Drama",
      },
    ],
  },
]
