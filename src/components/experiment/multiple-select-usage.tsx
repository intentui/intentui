"use client"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { useState } from "react"
import type { Selection } from "react-aria-components"
import { MultipleSelect, MultipleSelectContent, MultipleSelectItem } from "./multiple-select"

export default function Page() {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]))

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }
  return (
    <div className="p-10">
      <Form onSubmit={submit} className="max-w-xs">
        {[...selectedKeys].join(", ")}
        <hr className="my-2" />
        <MultipleSelect label="Select tags" description="Select multiple tags">
          <MultipleSelectContent
            items={items}
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
          >
            {(item) => (
              <MultipleSelectItem id={item.id} textValue={item.name}>
                {item.name}
              </MultipleSelectItem>
            )}
          </MultipleSelectContent>
        </MultipleSelect>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}

const items = [
  { id: 1, name: "Laravel" },
  { id: 2, name: "Next.js" },
  { id: 3, name: "Remix" },
  { id: 4, name: "Vite" },
  { id: 5, name: "TanStack Router" },
  { id: 6, name: "Astro" },
  { id: 7, name: "React" },
  { id: 8, name: "Vue" },
  { id: 9, name: "Angular" },
  { id: 10, name: "Svelte" },
  { id: 11, name: "Mithril" },
  { id: 12, name: "Ember" },
  { id: 13, name: "Backbone" },
  { id: 14, name: "Angular 2" },
  { id: 15, name: "Ember 2" },
  { id: 16, name: "Angular 1" },
  { id: 17, name: "Ember 1" },
  { id: 18, name: "Backbone 2" },
  { id: 19, name: "Backbone 1" },
  { id: 20, name: "Knockout" },
  { id: 21, name: "Meteor" },
]
