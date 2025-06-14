"use client"
import SelectValidationDemo from "@/components/docs/pickers/select/select-validation-demo"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { SearchField } from "@/components/ui/search-field"
import { TextField } from "@/components/ui/text-field"
import { Textarea } from "@/components/ui/textarea"

export default function Page() {
  return (
    <div className="flex items-center justify-center p-20">
      <Form className="flex w-full max-w-2xs flex-col gap-y-6">
        <SelectValidationDemo />
        <SearchField isRequired />
        <TextField isRequired />
        <Textarea isRequired />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}
