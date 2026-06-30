'use client'

import { Checkbox, CheckboxField, CheckboxGroup } from '@/components/ui/checkbox'
import { Description, Label } from '@/components/ui/field'

export default function CheckboxGroupDescriptionExample() {
  return (
    <CheckboxGroup defaultValue={['delete']} name="up">
      <Label>User Permissions</Label>
      <Description>Select the permissions you want to grant to the user.</Description>
      <CheckboxField value="read">
        <Checkbox>Read</Checkbox>
        <Description>Can view content but cannot make changes.</Description>
      </CheckboxField>
      <CheckboxField value="write">
        <Checkbox>Write</Checkbox>
        <Description>Can create and modify existing content.</Description>
      </CheckboxField>
      <CheckboxField value="delete">
        <Checkbox>Delete</Checkbox>
        <Description>Can permanently remove content.</Description>
      </CheckboxField>
      <CheckboxField value="admin">
        <Checkbox>Admin</Checkbox>
        <Description>Full access to all actions and settings.</Description>
      </CheckboxField>
    </CheckboxGroup>
  )
}
