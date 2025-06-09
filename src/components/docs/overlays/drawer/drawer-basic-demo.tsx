"use client"

import { buttonStyles } from "@/components/ui/button"
import { Drawer } from "@/components/ui/drawer"
import { TextField } from "@/components/ui/text-field"

export default function DrawerBasicDemo() {
  return (
    <Drawer>
      <Drawer.Trigger className={buttonStyles({ intent: "outline" })}>Login</Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>Login</Drawer.Title>
          <Drawer.Description>
            Please enter your credentials to access your account.
          </Drawer.Description>
        </Drawer.Header>
        <Drawer.Body className="space-y-4">
          <TextField label="Email" type="email" placeholder="john.doe@example.com" />
          <TextField label="Password" type="password" placeholder="••••••••••••" isRevealable />
        </Drawer.Body>
        <Drawer.Footer>
          <Drawer.Close className="w-full">Login</Drawer.Close>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  )
}
