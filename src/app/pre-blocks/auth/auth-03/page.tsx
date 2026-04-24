"use client"

import { Form } from "react-aria-components/Form"
import { Link } from "@/components/link"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Description, FieldError, Fieldset, Label, Legend } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Text, TextLink } from "@/components/ui/text"
import { TextField } from "@/components/ui/text-field"

export default function Component() {
  return (
    <main className="flex min-h-dvh items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <Link aria-label="Goto homepage" href="#" className="mb-3 inline-block">
          <Avatar isSquare src="https://design.intentui.com/logo" size="md" />
        </Link>

        <Form>
          <Fieldset>
            <Legend className="text-xl/10">Sign up</Legend>
            <Text>
              Access your account to manage projects, view analytics, and collaborate with your
              team.
            </Text>
            <TextField isRequired>
              <Label>Full name</Label>
              <Input />
              <FieldError />
            </TextField>
            <TextField type="email" isRequired>
              <Label>Email</Label>
              <Input type="email" />
              <FieldError />
            </TextField>
            <TextField isRequired>
              <Label>Password</Label>
              <Input type="password" />
              <FieldError />
            </TextField>
            <Checkbox isRequired>
              <Label>Terms and conditions</Label>
              <Description>
                By signing up, you agree to our <TextLink href="#">Terms of Service</TextLink> and{" "}
                <TextLink href="#">Privacy Policy</TextLink>.
              </Description>
            </Checkbox>
          </Fieldset>
          <Button type="submit" className="mt-6 w-full">
            Sign up
          </Button>
        </Form>

        <Text className="mt-4">
          Already have an account? <TextLink href="#">Sign in</TextLink>
        </Text>
      </div>
    </main>
  )
}
