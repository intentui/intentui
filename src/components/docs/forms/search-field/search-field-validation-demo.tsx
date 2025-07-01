"use client"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { SearchField } from "@/components/ui/search-field"

export default function SearchFieldValidationDemo() {
  return (
    <Form className="space-y-4">
      <SearchField isRequired label="Name" />
      <Button type="submit">Submit</Button>
    </Form>
  )
}
