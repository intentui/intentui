"use client"

import { Checkbox, CheckboxGroup, CheckboxLabel } from "@/components/ui/checkbox"
import { Description, Label } from "@/components/ui/field"

export default function CheckboxGroupDescriptionDemo() {
  return (
    <CheckboxGroup defaultValue={["delete"]}>
      <Label>User Permissions</Label>
      <Description>Select the permissions you want to grant to the user.</Description>
      <Checkbox value="read">
        <CheckboxLabel>Read</CheckboxLabel>
        <Description>Can view content but cannot make changes.</Description>
      </Checkbox>
      <Checkbox value="write">
        <CheckboxLabel>Write</CheckboxLabel>
        <Description>Can create and modify existing content.</Description>
      </Checkbox>
      <Checkbox value="delete">
        <CheckboxLabel>Delete</CheckboxLabel>
        <Description>Can permanently remove content.</Description>
      </Checkbox>
      <Checkbox value="admin">
        <CheckboxLabel>Admin</CheckboxLabel>
        <Description>Full access to all actions and settings.</Description>
      </Checkbox>
    </CheckboxGroup>
  )
}
