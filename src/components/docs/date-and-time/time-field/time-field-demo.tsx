"use client"

import { Time } from "@internationalized/date"

import { TimeField } from "@/components/ui/time-field"

export default function TimeFieldDemo() {
  return <TimeField defaultValue={new Time()} label="Event time" />
}
