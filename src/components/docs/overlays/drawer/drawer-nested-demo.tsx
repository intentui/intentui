"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Drawer } from "@/components/ui/drawer"
import { Form } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

export default function DrawerNestedDemo() {
  const [isRegistrationDrawerOpen, setIsRegistrationDrawerOpen] = useState(false)
  const [isProfileSetupDrawerOpen, setIsProfileSetupDrawerOpen] = useState(false)
  const [isTyping, setIsTyping] = useState(false)

  return (
    <>
      <Button intent="outline" onPress={() => setIsRegistrationDrawerOpen(true)}>
        Register
      </Button>

      <Drawer
        isOpen={isRegistrationDrawerOpen}
        onOpenChange={() => setIsRegistrationDrawerOpen(false)}
      >
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Confirm Registration</Drawer.Title>
            <Drawer.Description>Please confirm your registration details.</Drawer.Description>
          </Drawer.Header>
          <Drawer.Footer>
            <Drawer.Close>Cancel</Drawer.Close>
            <Button
              onPress={() => {
                setIsProfileSetupDrawerOpen(true)
              }}
            >
              Confirm
            </Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer>

      <Drawer
        isOpen={isProfileSetupDrawerOpen}
        onOpenChange={(isOpen) => {
          if (!isOpen && isTyping) toast("Profile setup incomplete", { position: "top-center" })
          setIsProfileSetupDrawerOpen(isOpen)
        }}
      >
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Set Up Your Profile</Drawer.Title>
            <Drawer.Description>
              We need a bit more information before you can get started.
            </Drawer.Description>
          </Drawer.Header>
          <Form
            onSubmit={(e) => {
              e.preventDefault()
              toast.success("Profile setup complete", { position: "top-center" })
              setIsProfileSetupDrawerOpen(false)
              setIsRegistrationDrawerOpen(false)
            }}
          >
            <Drawer.Body className="space-y-4">
              <Textarea
                isRequired
                label="Bio"
                placeholder="Tell us something about yourself"
                onInput={() => setIsTyping(true)}
              />
            </Drawer.Body>
            <Drawer.Footer>
              <Drawer.Close>Skip for now</Drawer.Close>
              <Button type="submit">Complete Setup</Button>
            </Drawer.Footer>
          </Form>
        </Drawer.Content>
      </Drawer>
    </>
  )
}
