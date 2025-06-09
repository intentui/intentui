"use client"

import { type FormEvent, useState } from "react"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { MultipleSelect } from "@/components/ui/multiple-select"
import type { Selection } from "react-aria-components"

export default function MultipleSelectInvalidDemo() {
  const [invalid, setInvalid] = useState<boolean>(false)
  const [selectedItems, setSelectedItems] = useState<Selection>(new Set([]))

  function submit(e: FormEvent<HTMLFormElement>) {
    if ([...selectedItems].length === 0) {
      setInvalid(true)
      e.preventDefault()
      return
    }
    setInvalid(false)
  }

  return (
    <Form className="space-y-2" onSubmit={submit}>
      <MultipleSelect
        className="max-w-xs"
        label="Fruits"
        selectedKeys={selectedItems}
        onSelectionChange={setSelectedItems}
        items={fruits}
        isInvalid={invalid}
        errorMessage={invalid ? "Please select at least one fruit" : undefined}
      >
        {(item) => {
          return <MultipleSelect.Item textValue={item.name}>{item.name}</MultipleSelect.Item>
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
