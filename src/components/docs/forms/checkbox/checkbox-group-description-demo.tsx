"use client"

import { Checkbox, CheckboxGroup } from "@/components/ui/checkbox"

export default function CheckboxGroupDescriptionDemo() {
  return (
    <CheckboxGroup
      label="User Permissions"
      description="Select the permissions you want to grant to the user."
    >
      <Checkbox value="read">Read</Checkbox>
      <Checkbox value="write">Write</Checkbox>
      <Checkbox value="delete">Delete</Checkbox>
      <Checkbox value="admin">Admin</Checkbox>
    </CheckboxGroup>
  )
}
