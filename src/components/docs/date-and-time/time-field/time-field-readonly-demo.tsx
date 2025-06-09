"use client"

import { Time } from "@internationalized/date"

import { TimeField } from "@/components/ui/time-field"

export default function TimeFieldReadonlyDemo() {
  return <TimeField isReadOnly defaultValue={new Time()} label="Event time" />
}
