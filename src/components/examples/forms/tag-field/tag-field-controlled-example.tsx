'use client'

import { useState } from 'react'
import type { Selection } from 'react-aria-components/GridList'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { TagField } from '@/components/ui/tag-field'

export default function TagFieldControlledDemo() {
  const [codes, setCodes] = useState<Selection>(new Set(['WELCOME10', 'FREESHIP']))
  const [text, setText] = useState('')

  const handleText = (v: string) => {
    const cleaned = v
      .replace(/[^A-Z0-9]/gi, '')
      .toUpperCase()
      .slice(0, 10)
    setText(cleaned)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Controlled input</CardTitle>
        <CardDescription>
          The input value is managed externally, allowing you to validate, sanitize, or sync it with
          other parts of your app, such as forms, counters, or APIs.
        </CardDescription>
        <CardAction className="text-muted-fg text-sm tabular-nums">{text.length}/10</CardAction>
      </CardHeader>
      <CardContent>
        <TagField
          value={codes}
          onChange={setCodes}
          inputValue={text}
          onInputValueChange={handleText}
        >
          <Label>Coupon codes</Label>
          <Input placeholder="Add codes, press Enter" />
        </TagField>
      </CardContent>
    </Card>
  )
}
