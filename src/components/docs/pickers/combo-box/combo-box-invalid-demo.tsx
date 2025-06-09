"use client"

import { Avatar } from "@/components/ui/avatar"
import { ComboBox } from "@/components/ui/combo-box"

const users = [
  { id: 1, name: "Barbara Kirlin Sr.", image_url: "https://i.pravatar.cc/150?img=1" },
  //...
]
export default function ComboBoxInvalidDemo() {
  return (
    <ComboBox placeholder="Select a user" label="Users" isInvalid>
      <ComboBox.List items={users}>
        {(item) => (
          <ComboBox.Option key={item.id} id={item.id} textValue={item.name}>
            <Avatar src={item.image_url} />
            <ComboBox.Label>{item.name}</ComboBox.Label>
          </ComboBox.Option>
        )}
      </ComboBox.List>
    </ComboBox>
  )
}
