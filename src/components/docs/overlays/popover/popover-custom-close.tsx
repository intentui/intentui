"use client"

import { Form } from "react-aria-components/Form"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog } from "@/components/ui/dialog"
import { FieldError, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Link } from "@/components/link"
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
                <TextField autoFocus isRequired>
                  <Label>Email</Label>
                  <Input type="email" placeholder="Enter your email" />
                </TextField>
                <TextField isRequired>
                  <Label>Password</Label>
                  <Input type="password" placeholder="Enter your password" />
                  <FieldError />
                </TextField>
                <div className="flex items-center justify-between">
                  <Checkbox name="remember-me">Remember me</Checkbox>
                  <Link
                    className="text-base/6 text-primary-subtle-fg hover:underline sm:text-sm/6"
                    href="#"
                  >
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
