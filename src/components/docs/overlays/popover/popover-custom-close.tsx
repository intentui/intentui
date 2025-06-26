"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog } from "@/components/ui/dialog"
import { Form } from "@/components/ui/form"
import { Link } from "@/components/ui/link"
import { Popover } from "@/components/ui/popover"
import { TextField } from "@/components/ui/text-field"

export default function PopoverCustomClose() {
  return (
    <Popover>
      <Button>Login</Button>
      <Popover.Content className="w-full min-w-96">
        <Dialog>
          <Popover.Header>
            <Popover.Title>Login</Popover.Title>
            <Popover.Description>Enter your credentials to sign in.</Popover.Description>
          </Popover.Header>
          <Form onSubmit={() => {}}>
            <Popover.Body>
              <div className="space-y-4">
                <TextField
                  autoFocus
                  isRequired
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                />
                <TextField
                  isRequired
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                />
                <div className="flex items-center justify-between">
                  <Checkbox name="remember-me">Remember me</Checkbox>
                  <Link intent="primary" href="#">
                    Forgot password?
                  </Link>
                </div>
              </div>
            </Popover.Body>
            <Popover.Footer>
              <Popover.Close>Cancel</Popover.Close>
              <Button type="submit">Login</Button>
            </Popover.Footer>
          </Form>
        </Dialog>
      </Popover.Content>
    </Popover>
  )
}
