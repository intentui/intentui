"use client"

import { Form } from 'react-aria-components/Form';
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/field"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"

const software = [
  { id: 1, name: "Adobe Photoshop" },
  //...
]

export default function SelectValidationDemo() {
  return (
    <Form onSubmit={(e) => e.preventDefault()} className="space-y-2">
      <Select placeholder="Select a software" isRequired>
        <Label>Design software</Label>
        <SelectTrigger />
        <SelectContent items={software}>
          {(item) => (
            <SelectItem id={item.id} textValue={item.name}>
              {item.name}
            </SelectItem>
          )}
        </SelectContent>
      </Select>
      <Button type="submit">Submit</Button>
    </Form>
  )
}
