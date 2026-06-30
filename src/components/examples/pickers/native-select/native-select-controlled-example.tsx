'use client'

import { useState } from 'react'
import { Label } from '@/components/ui/field'
import { NativeSelect, NativeSelectContent } from '@/components/ui/native-select'

export default function NativeSelectControlledDemo() {
  const [value, setValue] = useState('member')
  return (
    <NativeSelect>
      <Label>Role</Label>
      <NativeSelectContent value={value} onChange={(e) => setValue(e.target.value)} name="role">
        <option value="owner">Owner</option>
        <option value="admin">Admin</option>
        <option value="member">Member</option>
        <option value="viewer">Viewer</option>
      </NativeSelectContent>
    </NativeSelect>
  )
}
