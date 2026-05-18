"use client"

import { useState } from "react"
import { Form } from "react-aria-components/Form"
import { toast } from "sonner"
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
import { FieldError, Label } from "@/components/ui/field"
import { TextField } from "@/components/ui/text-field"
import { Textarea } from "@/components/ui/textarea"

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
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Confirm Registration</DrawerTitle>
            <DrawerDescription>Please confirm your registration details.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose>Cancel</DrawerClose>
            <Button
              onPress={() => {
                setIsProfileSetupDrawerOpen(true)
              }}
            >
              Confirm
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Drawer
        isOpen={isProfileSetupDrawerOpen}
        onOpenChange={(isOpen) => {
          if (!isOpen && isTyping)
            toast("Profile setup incomplete", {
              position: "top-center",
            })
          setIsProfileSetupDrawerOpen(isOpen)
        }}
      >
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Set Up Your Profile</DrawerTitle>
            <DrawerDescription>
              We need a bit more information before you can get started.
            </DrawerDescription>
          </DrawerHeader>
          <Form
            onSubmit={(e) => {
              e.preventDefault()
              toast.success("Profile setup complete", {
                position: "top-center",
              })
              setIsProfileSetupDrawerOpen(false)
              setIsRegistrationDrawerOpen(false)
            }}
          >
            <DrawerBody className="space-y-4">
              <TextField isRequired>
                <Label>Bio</Label>
                <Textarea
                  placeholder="Tell us something about yourself"
                  onInput={() => setIsTyping(true)}
                />
                <FieldError />
              </TextField>
            </DrawerBody>
            <DrawerFooter>
              <DrawerClose>Skip for now</DrawerClose>
              <Button type="submit">Complete Setup</Button>
            </DrawerFooter>
          </Form>
        </DrawerContent>
      </Drawer>
    </>
  )
}
