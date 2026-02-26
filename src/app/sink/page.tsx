"use client"

import { NativeSelect, NativeSelectContent } from "@/components/ui/native-select";
import { Description, Label } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

export default function Page() {
  return <div className="flex items-center justify-center p-32">
    <form action="">
      <NativeSelect>
        <Label>Hello</Label>
        <NativeSelectContent>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </NativeSelectContent>
        <Description>
          This is a description for the select field.
        </Description>
      </NativeSelect>
      <div className="mt-6">
        <Button>
          sUbmit
        </Button>
      </div>
    </form>
  </div>
}
