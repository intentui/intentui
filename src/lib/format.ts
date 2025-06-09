"use client"

import { useDateFormatter } from "react-aria"

export function format(date: Date) {
  const formatter = useDateFormatter()
  return formatter.format(date)
}
