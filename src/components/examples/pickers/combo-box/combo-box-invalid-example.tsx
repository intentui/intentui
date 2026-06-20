'use client'

import { Avatar } from '@/components/ui/avatar'
import {
  ComboBox,
  ComboBoxContent,
  ComboBoxInput,
  ComboBoxItem,
  ComboBoxLabel,
} from '@/components/ui/combo-box'
import { Label } from '@/components/ui/field'

const users = [
  {
    id: 1,
    name: 'Barbara Kirlin Sr.',
    image_url: 'https://i.pravatar.cc/150?img=1',
  },
  //...
]
export default function ComboBoxInvalidDemo() {
  return (
    <ComboBox name="users" isInvalid>
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
    </ComboBox>
  )
}
