"use client"

import { buttonStyles } from "@/components/ui/button"
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { TextField } from "@/components/ui/text-field"

export default function DrawerBasicDemo() {
  return (
    <Drawer>
      <DrawerTrigger className={buttonStyles({ intent: "outline" })}>Login</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Login</DrawerTitle>
          <DrawerDescription>
            Please enter your credentials to access your account.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerBody className="space-y-4">
          <TextField>
            <Label>Email</Label>
            <Input type="email" placeholder="john.doe@example.com" />
          </TextField>
          <TextField>
            <Label>Password</Label>
            <Input type="password" placeholder="••••••••••••" />
          </TextField>
        </DrawerBody>
        <DrawerFooter>
          <DrawerClose className="w-full">Login</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
