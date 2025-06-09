"use client"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Heading } from "@/components/ui/heading"
import { TextField } from "@/components/ui/text-field"

export default function FormDemo() {
  return (
    <div className="mx-auto max-w-md py-10">
      <Heading level={2} className="mb-4">
        Register
      </Heading>
      <Form onSubmit={() => {}} className="space-y-4">
        <TextField isRequired label="Name" placeholder="Enter your name" />
        <TextField isRequired label="Email" placeholder="Enter your email" />
        <div className="grid grid-cols-2 gap-4">
          <TextField
            isRequired
            label="Password"
            placeholder="Enter your password"
            type="password"
          />
          <TextField
            isRequired
            label="Confirm Password"
            placeholder="Enter your password again"
            type="password"
          />
        </div>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}
