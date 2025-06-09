"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "@/components/ui/menu"

export default function MenuDynamicDemo() {
  return (
    <Menu>
      <Button intent="outline">Open</Button>
      <Menu.Content placement="bottom" items={categories}>
        {(item) => (
          <Menu.Item id={item.slug}>
            <Menu.Label>{item.name}</Menu.Label>
          </Menu.Item>
        )}
      </Menu.Content>
    </Menu>
  )
}

const categories = [
  {
    name: "Technology",
    slug: "technology",
  },
  {
    name: "Health",
    slug: "health",
  },
  {
    name: "Business",
    slug: "business",
  },
  {
    name: "Travel",
    slug: "travel",
  },
  {
    name: "Education",
    slug: "education",
  },
  {
    name: "Entertainment",
    slug: "entertainment",
  },
  {
    name: "Sports",
    slug: "sports",
  },
  {
    name: "Fashion",
    slug: "fashion",
  },
  {
    name: "Food",
    slug: "food",
  },
  {
    name: "Science",
    slug: "science",
  },
]
