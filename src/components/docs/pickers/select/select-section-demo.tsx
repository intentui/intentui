"use client"

import { Select } from "@/components/ui/select"

export default function SelectSectionDemo() {
  return (
    <Select defaultSelectedKey={1} aria-label="Countries" placeholder="Select a country">
      <Select.Trigger />
      <Select.List items={countries}>
        {(country) => (
          <Select.Section title={country.name} items={country.cities}>
            {(city) => <Select.Option textValue={city.name}>{city.name}</Select.Option>}
          </Select.Section>
        )}
      </Select.List>
    </Select>
  )
}

const countries = [
  {
    id: 1,
    name: "Egypt",
    cities: [
      {
        id: 101,
        name: "Cairo",
      },
      {
        id: 102,
        name: "Alexandria",
      },
      {
        id: 103,
        name: "Giza",
      },
      {
        id: 104,
        name: "Luxor",
      },
    ],
  },
  {
    id: 2,
    name: "Indonesia",
    cities: [
      {
        id: 201,
        name: "Jakarta",
      },
      {
        id: 202,
        name: "Bali",
      },
      {
        id: 203,
        name: "Surabaya",
      },
      {
        id: 204,
        name: "Bandung",
      },
      {
        id: 205,
        name: "Medan",
      },
    ],
  },
  {
    id: 3,
    name: "United States",
    cities: [
      {
        id: 301,
        name: "New York City",
      },
      {
        id: 302,
        name: "Los Angeles",
      },
      {
        id: 303,
        name: "Chicago",
      },
      {
        id: 304,
        name: "Houston",
      },
    ],
  },
  {
    id: 4,
    name: "Canada",
    cities: [
      {
        id: 401,
        name: "Toronto",
      },
      {
        id: 402,
        name: "Vancouver",
      },
      {
        id: 403,
        name: "Montreal",
      },
    ],
  },
  {
    id: 5,
    name: "Australia",
    cities: [
      {
        id: 501,
        name: "Sydney",
      },
      {
        id: 502,
        name: "Melbourne",
      },
      {
        id: 503,
        name: "Brisbane",
      },
    ],
  },
  {
    id: 6,
    name: "Germany",
    cities: [
      {
        id: 601,
        name: "Berlin",
      },
      {
        id: 602,
        name: "Munich",
      },
      {
        id: 603,
        name: "Frankfurt",
      },
      {
        id: 604,
        name: "Hamburg",
      },
    ],
  },
  {
    id: 7,
    name: "Japan",
    cities: [
      {
        id: 701,
        name: "Tokyo",
      },
      {
        id: 702,
        name: "Osaka",
      },
      {
        id: 703,
        name: "Kyoto",
      },
    ],
  },
]
