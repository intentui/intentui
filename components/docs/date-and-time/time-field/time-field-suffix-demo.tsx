"use client"

import { IconClock } from "@intentui/icons"
import { Time } from "@internationalized/date"
import { TimeField } from "ui"

export default function TimeFieldSuffixDemo() {
  return <TimeField suffix={<IconClock />} defaultValue={new Time()} label="Event time" />
}
