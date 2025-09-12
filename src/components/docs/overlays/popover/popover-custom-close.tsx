"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog } from "@/components/ui/dialog"
import { Form } from "@/components/ui/form"
import { Link } from "@/components/ui/link"
import {
  Popover,
  PopoverBody,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverFooter,
  PopoverHeader,
  PopoverTitle,
} from "@/components/ui/popover"
import { TextField } from "@/components/ui/text-field"

export default function PopoverCustomClose() {
  return (
    <Popover>
      <Button>Login</Button>
      <PopoverContent className="w-full min-w-96">
        <Dialog>
          <PopoverHeader>
            <PopoverTitle>Login</PopoverTitle>
            <PopoverDescription>Enter your credentials to sign in.</PopoverDescription>
          </PopoverHeader>
          <Form onSubmit={() => {}} className="overflow-auto">
            <PopoverBody>
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
            </PopoverBody>
            <PopoverFooter>
              <PopoverClose>Cancel</PopoverClose>
              <Button type="submit">Login</Button>
            </PopoverFooter>
          </Form>
        </Dialog>
      </PopoverContent>
    </Popover>
  )
}
