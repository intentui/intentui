"use client"

import { Avatar } from "@/components/ui/avatar"
import {
  ComboBox,
  ComboBoxContent,
  ComboBoxInput,
  ComboBoxItem,
  ComboBoxLabel,
} from "@/components/ui/combo-box"

const users = [
  {
    id: 1,
    name: "Barbara Kirlin Sr.",
    image_url: "https://i.pravatar.cc/150?img=1",
  },
  //...
]
export default function ComboBoxReadonlyDemo() {
  return (
    <ComboBox defaultSelectedKey={1} placeholder="Select a user" label="Users" isReadOnly>
      <ComboBoxInput />
      <ComboBoxContent items={users}>
        {(item) => (
          <ComboBoxItem key={item.id} id={item.id} textValue={item.name}>
            <Avatar src={item.image_url} />
            <ComboBoxLabel>{item.name}</ComboBoxLabel>
          </ComboBoxItem>
        )}
      </ComboBoxContent>
    </ComboBox>
  )
}
