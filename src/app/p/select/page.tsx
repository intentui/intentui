"use client"

import { Select } from "@/components/ui/select"
import { TextField } from "@/components/ui/text-field"
import { Button } from "@/components/ui/button";

const software = [
  { id: 1, name: "Adobe Photoshop" },
  { id: 2, name: "Sketch" },
  { id: 3, name: "Figma" },
  { id: 4, name: "Adobe XD" },
  { id: 5, name: "InVision" },
]
export default function Page() {
  return (
    <div className="mx-auto flex max-w-sm items-end gap-x-2">
      <Button>
        Save
      </Button>
      <Select label="Design software" placeholder="Select a software">
        <Select.Trigger />
        <Select.List items={software}>
          {(item) => (
            <Select.Option id={item.id} textValue={item.name}>
              {item.name}
            </Select.Option>
          )}
        </Select.List>
      </Select>
      {/*<TextField label="Email" placeholder="Enter your email" />*/}
    </div>
  )
}
