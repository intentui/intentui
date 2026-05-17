"use client"

import { Description, Label } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectDescription,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select"

export default function SelectDetailsDescriptionDemo() {
  return (
    <Select className="max-w-2xs" placeholder="Select a role">
      <Label>Roles</Label>
      <SelectTrigger />
      <SelectContent className="max-w-(--trigger-width)" items={roles}>
        {(item) => (
          <SelectItem id={item.id} textValue={item.name}>
            <SelectLabel>{item.name}</SelectLabel>
            <SelectDescription>{item.description}</SelectDescription>
          </SelectItem>
        )}
      </SelectContent>
      <Description>Choose the appropriate role based on the level of access required.</Description>
    </Select>
  )
}

export const roles = [
  {
    id: 1,
    name: "Admin",
    description: "Has full access to all resources",
  },
  {
    id: 2,
    name: "Editor",
    description: "Can edit content but has limited access to settings",
  },
  {
    id: 3,
    name: "Viewer",
    description: "Can view content but cannot make changes",
  },
  {
    id: 4,
    name: "Contributor",
    description: "Can contribute content for review",
  },
  {
    id: 5,
    name: "Guest",
    description: "Limited access, mostly for viewing purposes",
  },
]
