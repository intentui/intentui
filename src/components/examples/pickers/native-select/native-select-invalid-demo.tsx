"use client"

import { fieldErrorStyles, Label } from "@/components/ui/field"
import { NativeSelect, NativeSelectContent } from "@/components/ui/native-select"

export default function NativeSelectDescriptionDemo() {
  return (
    <NativeSelect>
      <Label>Role</Label>
      <NativeSelectContent isInvalid name="role">
        <option value="owner">Owner</option>
        <option value="admin">Admin</option>
        <option value="member">Member</option>
        <option value="viewer">Viewer</option>
      </NativeSelectContent>
      <span slot="errorMessage" className={fieldErrorStyles()}>
        Please select a role.
      </span>
    </NativeSelect>
  )
}
