"use client"

import type { FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { MultipleSelect, MultipleSelectItem } from "@/components/ui/multiple-select"

export default function MultipleSelectInvalidDemo() {
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <Form className="space-y-2" onSubmit={submit}>
      <MultipleSelect className="min-w-2xs max-w-min" isRequired label="Fruits" items={fruits}>
        {(item) => {
          return <MultipleSelectItem textValue={item.name}>{item.name}</MultipleSelectItem>
        }}
      </MultipleSelect>
      <Button type="submit">Submit</Button>
    </Form>
  )
}

const fruits = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
  { id: 4, name: "Date" },
  { id: 9, name: "Kiwi" },
  { id: 10, name: "Lemon" },
  { id: 11, name: "Mango" },
  { id: 12, name: "Nectarine" },
  { id: 13, name: "Orange" },
  { id: 14, name: "Papaya" },
  { id: 15, name: "Quince" },
  { id: 16, name: "Raspberry" },
  { id: 17, name: "Strawberry" },
  { id: 18, name: "Tangerine" },
  { id: 19, name: "Ugli Fruit" },
  { id: 20, name: "Watermelon" },
]
