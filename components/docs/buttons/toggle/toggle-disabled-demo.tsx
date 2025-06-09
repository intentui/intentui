"use client"

import React from "react"

import { IconPin } from "@intentui/icons"
import { Toggle } from "ui"

export default function ToggleDisabledDemo() {
  return (
    <Toggle size="square-petite" isDisabled>
      <IconPin />
    </Toggle>
  )
}
