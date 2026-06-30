'use client'

import { Label } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { TagField } from '@/components/ui/tag-field'

export default function TagFieldDemo() {
  return (
    <TagField>
      <Label>Coupon codes</Label>
      <Input placeholder="Add codes, press Enter" />
    </TagField>
  )
}
