"use client"

import { useState } from "react"

import { ComboBox, ComboBoxContent, ComboBoxInput, ComboBoxItem } from "@/components/ui/combo-box"
import { Description, Label } from "@/components/ui/field"

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
      <ComboBox onInputChange={setSport} inputValue={sport} name="sports">
        <Label>Sports</Label>
        <ComboBoxInput placeholder="Select a sports" />
        <ComboBoxContent items={sports}>
          {(item) => (
            <ComboBoxItem id={item.id} textValue={item.name}>
              {item.name}
            </ComboBoxItem>
          )}
        </ComboBoxContent>
      </ComboBox>
      <Description className="mt-2 block text-muted-fg [&>strong]:text-fg">
        You have selected: <strong>{sport}</strong>
      </Description>
    </>
  )
}
