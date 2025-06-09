"use client"

import { Time } from "@internationalized/date"

import { TimeField } from "@/components/ui/time-field"

export default function TimeFieldPrefixDemo() {
  return <TimeField prefix="UTC" defaultValue={new Time()} label="Event time" />
}
