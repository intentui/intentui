"use client"

import { useState } from "react"

import { ComboBox } from "@/components/ui/combo-box"
import { Description } from "@/components/ui/field"

const sports = [
  { id: 1, name: "Football" },
  { id: 2, name: "Basketball" },
  { id: 3, name: "Baseball" },
  { id: 4, name: "Soccer" },
  { id: 5, name: "Tennis" },
  { id: 6, name: "Cricket" },
  { id: 7, name: "Hockey" },
  { id: 8, name: "Rugby" },
  { id: 9, name: "Golf" },
]

export default function ComboBoxControlledDemo() {
  const [sport, setSport] = useState("")
  return (
    <>
      <ComboBox
        onInputChange={setSport}
        inputValue={sport}
        placeholder="Select a sports"
        label="Sports"
      >
        <ComboBox.Input />
        <ComboBox.List items={sports}>
          {(item) => (
            <ComboBox.Option id={item.id} textValue={item.name}>
              {item.name}
            </ComboBox.Option>
          )}
        </ComboBox.List>
      </ComboBox>
      <Description className="mt-2 block text-muted-fg [&>strong]:text-fg">
        You have selected: <strong>{sport}</strong>
      </Description>
    </>
  )
}
