"use client"

import type { FormEvent } from "react"
import { Form } from "react-aria-components"
import { Button } from "@/components/ui/button"
import { FieldError, Label } from "@/components/ui/field"
import {
  MultipleSelect,
  MultipleSelectContent,
  MultipleSelectItem,
} from "@/components/ui/multiple-select"

export default function MultipleSelectInvalidDemo() {
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <Form className="space-y-2" onSubmit={submit}>
      <MultipleSelect className="mx-auto max-w-2xs" isRequired>
        <Label>Select fruits</Label>
        <MultipleSelectContent items={fruits}>
          {(item) => {
            return (
              <MultipleSelectItem id={item.id} textValue={item.name}>
                {item.name}
              </MultipleSelectItem>
            )
          }}
        </MultipleSelectContent>
        <FieldError />
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
