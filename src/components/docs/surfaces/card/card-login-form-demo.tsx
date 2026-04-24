"use client"

import { Form } from "react-aria-components/Form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Link } from "@/components/link"
import { TextField } from "@/components/ui/text-field"

export default function CardLoginFormDemo() {
  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Don't loose the level, just keep on going.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form className="space-y-6">
          <TextField isRequired>
            <Label>Email</Label>
            <Input placeholder="Enter your email" />
          </TextField>
          <TextField isRequired>
            <Label>Password</Label>
            <Input type="password" placeholder="Enter your password" />
          </TextField>
          <div className="flex items-center justify-between">
            <Checkbox>Remember me</Checkbox>
            <Link
              className="text-base/6 text-primary-subtle-fg hover:underline sm:text-sm/6"
              href="#"
            >
              Forgot password?
            </Link>
          </div>
          <Button className="w-full">Login</Button>
        </Form>
      </CardContent>
    </Card>
  )
}
