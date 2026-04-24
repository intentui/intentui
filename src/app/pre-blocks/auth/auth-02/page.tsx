"use client"

import { Form } from "react-aria-components/Form"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { FieldError, Fieldset, Label, Legend } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Link } from "@/components/link"
import { Text } from "@/components/ui/text"
import { TextField } from "@/components/ui/text-field"

export default function Component() {
  return (
    <main className="flex min-h-dvh items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <Link href="#" aria-label="Goto homepage" className="mb-2 inline-block">
          <Avatar isSquare src="https://design.intentui.com/logo" size="md" />
        </Link>
        <Form>
          <Fieldset>
            <Legend className="text-xl/10">Sign in</Legend>
            <Text>
              Access your account to manage projects, view analytics, and collaborate with your
              team.
            </Text>

            <TextField isRequired>
              <Label>Email</Label>
              <Input placeholder="you@domain.com" type="email" />
              <FieldError />
            </TextField>
            <div data-slot="control">
              <Button className="w-full" type="submit">
                Get magic link
              </Button>
            </div>
          </Fieldset>
        </Form>
      </div>
    </main>
  )
}
