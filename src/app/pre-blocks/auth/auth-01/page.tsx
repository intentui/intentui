"use client"

import { useState } from "react"
import { Form } from "react-aria-components/Form"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Checkbox, CheckboxLabel } from "@/components/ui/checkbox"
import { Description, FieldError, Fieldset, Label, Legend } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Link } from "@/components/link"
import { Text, TextLink } from "@/components/ui/text"
import { TextField } from "@/components/ui/text-field"

export default function Page() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <main className="flex min-h-dvh items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <h1 className="sr-only">Sign in</h1>
        <Link href="#" aria-label="Goto homepage" className="mb-3 inline-block">
          <Avatar isSquare src="https://design.intentui.com/logo" size="md" />
        </Link>
        <Form>
          <Fieldset>
            <Legend className="text-xl/6">Sign in</Legend>
            <Text>
              Access your account to manage projects, view analytics, and collaborate with your
              team.
            </Text>
            <TextField isRequired value={email} onChange={setEmail}>
              <Label>Email address</Label>
              <Input type="email" placeholder="Your email address" />
              <FieldError />
            </TextField>
            <TextField isRequired value={password} onChange={setPassword}>
              <div className="mb-2 flex items-center justify-between">
                <Label>Password</Label>
                <TextLink href="#" className="text-base/6 sm:text-sm/6">
                  Forgot password?
                </TextLink>
              </div>
              <Input placeholder="Ssshtt, it's a secret" type="password" />
              <FieldError />
            </TextField>
            <Checkbox>
              <CheckboxLabel>Remember me</CheckboxLabel>
              <Description>
                Keep me signed in on this device for faster access next time.
              </Description>
            </Checkbox>
          </Fieldset>
          <Button type="submit" className="mt-6 w-full">
            Sign in
          </Button>
        </Form>
      </div>
    </main>
  )
}
