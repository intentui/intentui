"use client"

import { Form } from "react-aria-components"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  ComboBox,
  ComboBoxContent,
  ComboBoxInput,
  ComboBoxItem,
  ComboBoxLabel,
} from "@/components/ui/combo-box"
import { FieldError, Label } from "@/components/ui/field"

const users = [
  {
    id: 1,
    name: "Barbara Kirlin Sr.",
    image_url: "https://i.pravatar.cc/150?img=1",
  },
  //...
]
export default function ComboBoxValidationDemo() {
  return (
    <Form onSubmit={(e) => e.preventDefault()} className="space-y-2">
      <ComboBox isRequired>
        <Label>Users</Label>
        <ComboBoxInput placeholder="Select a user" />
        <ComboBoxContent items={users}>
          {(item) => (
            <ComboBoxItem key={item.id} id={item.id} textValue={item.name}>
              <Avatar src={item.image_url} />
              <ComboBoxLabel>{item.name}</ComboBoxLabel>
            </ComboBoxItem>
          )}
        </ComboBoxContent>
        <FieldError />
      </ComboBox>
      <Button type="submit">Submit</Button>
    </Form>
  )
}
