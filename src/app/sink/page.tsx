"use client"
import CheckboxGroupDescriptionDemo from "@/components/docs/forms/checkbox/checkbox-group-description-demo"
import { Checkbox } from "@/components/ui/checkbox"
import { Description, Label } from "@/components/ui/field"

export default function Page() {
  return (
    <div className="flex items-center justify-center p-20">
      <div className="mx-auto hidden max-w-2xl">
        <CheckboxGroupDescriptionDemo />
        <Checkbox value="read">
          <Label>Read</Label>
          <Description>Can view content but cannot make changes.</Description>
        </Checkbox>
        <Checkbox value="write">
          <Label>Write</Label>
          <Description>Can create and modify existing content.</Description>
        </Checkbox>
      </div>
    </div>
  )
}
