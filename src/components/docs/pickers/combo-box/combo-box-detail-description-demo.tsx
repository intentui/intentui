"use client"

import { ComboBox } from "@/components/ui/combo-box"

export default function ComboBoxDetailDescriptionDemo() {
  return (
    <ComboBox label="Roles" placeholder="ComboBox a role">
      <ComboBox.Input />
      <ComboBox.List className="max-w-(--trigger-width)" items={roles}>
        {(item) => (
          <ComboBox.Option id={item.id} textValue={item.name}>
            <ComboBox.Label>{item.name}</ComboBox.Label>
            <ComboBox.Description>{item.description}</ComboBox.Description>
          </ComboBox.Option>
        )}
      </ComboBox.List>
    </ComboBox>
  )
}

export const roles = [
  { id: 1, name: "Admin", description: "Has full access to all resources" },
  { id: 2, name: "Editor", description: "Can edit content but has limited access to settings" },
  { id: 3, name: "Viewer", description: "Can view content but cannot make changes" },
  { id: 4, name: "Contributor", description: "Can contribute content for review" },
  { id: 5, name: "Guest", description: "Limited access, mostly for viewing purposes" },
]
