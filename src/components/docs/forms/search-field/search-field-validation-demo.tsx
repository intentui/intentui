"use client"

import { Form } from "react-aria-components/Form"
import { Button } from "@/components/ui/button"
import { FieldError, Label } from "@/components/ui/field"
import { SearchField, SearchInput } from "@/components/ui/search-field"

export default function SearchFieldValidationDemo() {
  return (
    <Form className="space-y-4">
      <SearchField isRequired>
        <Label>Name</Label>
        <SearchInput />
        <FieldError />
      </SearchField>
      <Button type="submit">Submit</Button>
    </Form>
  )
}
