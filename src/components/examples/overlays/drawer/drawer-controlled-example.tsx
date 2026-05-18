"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { TextField } from "@/components/ui/text-field"

export default function DrawerControlledDemo() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button onPress={() => setIsOpen(!isOpen)} intent="outline">
        Login
      </Button>
      <Drawer isOpen={isOpen} onOpenChange={setIsOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Login</DrawerTitle>
            <DrawerDescription>
              Please enter your credentials to access your account.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerBody className="flex flex-col gap-4">
            <TextField isRequired>
              <Label>Email</Label>
              <Input type="email" placeholder="Enter your email" />
            </TextField>
            <TextField isRequired>
              <Label>Password</Label>
              <Input type="password" placeholder="Enter your password" />
            </TextField>
          </DrawerBody>
          <DrawerFooter>
            <DrawerClose>Close</DrawerClose>
            <Button onPress={() => setIsOpen(false)}>Login</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
