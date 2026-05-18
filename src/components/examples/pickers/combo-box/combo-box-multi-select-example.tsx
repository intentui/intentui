"use client"

import {
  ComboBox,
  ComboBoxContent,
  ComboBoxInput,
  ComboBoxItem,
  ComboBoxValue,
} from "@/components/ui/combo-box"
import { Label } from "@/components/ui/field"
import { Tag, TagGroup, TagList } from "@/components/ui/tag-group"
import { Text } from "@/components/ui/text"

const roles = [
  { id: 1, name: "Owner" },
  { id: 2, name: "Admin" },
  { id: 3, name: "Moderator" },
  { id: 4, name: "Member" },
  { id: 5, name: "Guest" },
  { id: 6, name: "Support" },
  { id: 7, name: "Billing" },
  { id: 8, name: "Sales" },
  { id: 9, name: "Marketing" },
  { id: 10, name: "Content" },
  { id: 11, name: "Designer" },
  { id: 12, name: "Product manager" },
  { id: 13, name: "Project manager" },
  { id: 14, name: "Developer" },
  { id: 15, name: "QA" },
  { id: 16, name: "DevOps" },
  { id: 17, name: "Data analyst" },
  { id: 18, name: "Finance" },
  { id: 19, name: "Legal" },
  { id: 20, name: "HR" },
]
export default function ComboBoxMultiSelectDemo() {
  return (
    <ComboBox
      className="sm:min-w-max sm:max-w-xs"
      name="role"
      aria-label="Roles"
      selectionMode="multiple"
    >
      <Label>Role</Label>
      <ComboBoxInput placeholder="Select a role" />
      <ComboBoxValue<(typeof roles)[0]>>
        {({ selectedItems, state }) => (
          <TagGroup
            aria-label="Selected states"
            onRemove={(keys) => {
              if (Array.isArray(state.value)) {
                state.setValue(state.value.filter((k) => !keys.has(k)))
              }
            }}
          >
            <TagList
              renderEmptyState={() => <Text>No selected items</Text>}
              items={selectedItems.filter((item) => item != null)}
            >
              {(item) => <Tag>{item.name}</Tag>}
            </TagList>
          </TagGroup>
        )}
      </ComboBoxValue>
      <ComboBoxContent items={roles}>
        {(item) => (
          <ComboBoxItem id={item.id} textValue={item.name}>
            {item.name}
          </ComboBoxItem>
        )}
      </ComboBoxContent>
    </ComboBox>
  )
}
