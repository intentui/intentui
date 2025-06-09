"use client"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { SearchField } from "@/components/ui/search-field"

export default function SearchFieldValidationDemo() {
  return (
    <Form>
      <SearchField isRequired label="Name" className="mb-2" />
      <Button type="submit">Submit</Button>
    </Form>
  )
}
