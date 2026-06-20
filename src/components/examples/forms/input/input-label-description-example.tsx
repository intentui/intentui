'use client'

import { Description, Label } from '@/components/ui/field'
import { Input } from '@/components/ui/input'

export default function InputLabelDescriptionDemo() {
  return (
    <div className="space-y-2">
      <Label htmlFor="name">Name</Label>
      <Input id="name" aria-label="Name" placeholder="Your name" />
      <Description>Please enter your full name.</Description>
    </div>
  )
}
