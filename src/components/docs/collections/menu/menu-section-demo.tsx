"use client"

import { Menu } from "@/components/ui/menu"

export default function MenuSectionDemo() {
  return (
    <Menu>
      <Menu.Trigger>Open</Menu.Trigger>
      <Menu.Content className="sm:min-w-64" items={cities} placement="bottom">
        {(city) => (
          <Menu.Section title={city.name} items={city.landmarks}>
            {(landmark) => (
              <Menu.Item textValue={landmark.name}>
                <Menu.Label>{landmark.name}</Menu.Label>
              </Menu.Item>
            )}
          </Menu.Section>
        )}
      </Menu.Content>
    </Menu>
  )
}

const cities = [
  {
    id: 1,
    name: "New York City",
    landmarks: [
      {
        id: 101,
        name: "Statue of Liberty",
      },
      {
        id: 102,
        name: "Central Park",
      },
      {
        id: 103,
        name: "Empire State Building",
      },
      {
        id: 104,
        name: "Times Square",
      },
    ],
  },
  {
    id: 2,
    name: "Paris",
    landmarks: [
      {
        id: 201,
        name: "Eiffel Tower",
      },
      {
        id: 202,
        name: "Louvre Museum",
      },
      {
        id: 203,
        name: "Notre-Dame Cathedral",
      },
      {
        id: 204,
        name: "Champs-Élysées",
      },
    ],
  },
  {
    id: 3,
    name: "Tokyo",
    landmarks: [
      {
        id: 301,
        name: "Tokyo Tower",
      },
      {
        id: 302,
        name: "Shibuya Crossing",
      },
      {
        id: 303,
        name: "Senso-ji Temple",
      },
      {
        id: 304,
        name: "Meiji Shrine",
      },
      {
        id: 305,
        name: "Tokyo Skytree",
      },
    ],
  },
  {
    id: 4,
    name: "London",
    landmarks: [
      {
        id: 401,
        name: "Big Ben",
      },
      {
        id: 402,
        name: "Tower of London",
      },
      {
        id: 403,
        name: "Buckingham Palace",
      },
      {
        id: 404,
        name: "London Eye",
      },
      {
        id: 405,
        name: "Westminster Abbey",
      },
    ],
  },
  {
    id: 5,
    name: "Rome",
    landmarks: [
      {
        id: 501,
        name: "Colosseum",
      },
      {
        id: 502,
        name: "Vatican City",
      },
      {
        id: 503,
        name: "Trevi Fountain",
      },
      {
        id: 504,
        name: "Pantheon",
      },
    ],
  },
  {
    id: 6,
    name: "Sydney",
    landmarks: [
      {
        id: 601,
        name: "Sydney Opera House",
      },
      {
        id: 602,
        name: "Sydney Harbour Bridge",
      },
      {
        id: 603,
        name: "Bondi Beach",
      },
      {
        id: 604,
        name: "Royal Botanic Garden",
      },
    ],
  },
  {
    id: 7,
    name: "Dubai",
    landmarks: [
      {
        id: 701,
        name: "Burj Khalifa",
      },
      {
        id: 702,
        name: "Palm Jumeirah",
      },
      {
        id: 703,
        name: "Dubai Mall",
      },
      {
        id: 704,
        name: "Burj Al Arab",
      },
    ],
  },
  {
    id: 8,
    name: "Moscow",
    landmarks: [
      {
        id: 801,
        name: "Red Square",
      },
      {
        id: 802,
        name: "Kremlin",
      },
      {
        id: 803,
        name: "St. Basil's Cathedral",
      },
      {
        id: 804,
        name: "Bolshoi Theatre",
      },
    ],
  },
  {
    id: 9,
    name: "Cairo",
    landmarks: [
      {
        id: 901,
        name: "Pyramids of Giza",
      },
      {
        id: 902,
        name: "Great Sphinx of Giza",
      },
      {
        id: 903,
        name: "Egyptian Museum",
      },
    ],
  },
  {
    id: 10,
    name: "Rio de Janeiro",
    landmarks: [
      {
        id: 1001,
        name: "Christ the Redeemer",
      },
      {
        id: 1002,
        name: "Sugarloaf Mountain",
      },
      {
        id: 1003,
        name: "Copacabana Beach",
      },
      {
        id: 1004,
        name: "Maracanã Stadium",
      },
    ],
  },
]
