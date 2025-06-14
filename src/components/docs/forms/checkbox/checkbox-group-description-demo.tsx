"use client"

import { Checkbox, CheckboxGroup } from "@/components/ui/checkbox"
import { Description, Label } from "@/components/ui/field"

export default function CheckboxGroupDescriptionDemo() {
  return (
    <CheckboxGroup>
      <Label>User Permissions</Label>
      <Description>Select the permissions you want to grant to the user.</Description>
      <Checkbox value="read">
        <Label>Read</Label>
        <Description>Can view content but cannot make changes.</Description>
      </Checkbox>
      <Checkbox value="write">
        <Label>Write</Label>
        <Description>Can create and modify existing content.</Description>
      </Checkbox>
      <Checkbox value="delete">
        <Label>Delete</Label>
        <Description>Can permanently remove content.</Description>
      </Checkbox>
      <Checkbox value="admin">
        <Label>Admin</Label>
        <Description>Full access to all actions and settings.</Description>
      </Checkbox>
    </CheckboxGroup>
  )
}
