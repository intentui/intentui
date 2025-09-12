"use client"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Select } from "@/components/ui/select"

const software = [
  { id: 1, name: "Adobe Photoshop" },
  //...
]

export default function SelectValidationDemo() {
  return (
    <Form onSubmit={(e) => e.preventDefault()} className="space-y-2">
      <Select label="Design software" placeholder="Select a software" isRequired>
        <Select.Trigger />
        <Select.Content items={software}>
          {(item) => (
            <Select.Item id={item.id} textValue={item.name}>
              {item.name}
            </Select.Item>
          )}
        </Select.Content>
      </Select>
      <Button type="submit">Submit</Button>
    </Form>
  )
}
