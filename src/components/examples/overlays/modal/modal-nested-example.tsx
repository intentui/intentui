"use client"

import { useState } from "react"
import { Form } from "react-aria-components/Form"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/field"
import {
  ModalBody,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "@/components/ui/modal"
import { TextField } from "@/components/ui/text-field"
import { Textarea } from "@/components/ui/textarea"

export default function ModalNestedDemo() {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false)
  const [isProfileSetupModalOpen, setIsProfileSetupModalOpen] = useState(false)
  const [isTyping, setIsTyping] = useState(false)

  return (
    <>
      <Button onPress={() => setIsRegistrationModalOpen(true)}>Register</Button>

      <ModalContent
        isOpen={isRegistrationModalOpen}
        onOpenChange={() => setIsRegistrationModalOpen(false)}
        aria-label="Confirm Registration"
      >
        <ModalHeader>
          <ModalTitle>Confirm Registration</ModalTitle>
          <ModalDescription>Please confirm your registration details.</ModalDescription>
        </ModalHeader>
        <ModalFooter>
          <ModalClose>Cancel</ModalClose>
          <Button
            onPress={() => {
              setIsProfileSetupModalOpen(true)
            }}
          >
            Confirm
          </Button>
        </ModalFooter>
      </ModalContent>

      <ModalContent
        isOpen={isProfileSetupModalOpen}
        onOpenChange={(isOpen) => {
          if (!isOpen && isTyping) {
            toast("Profile setup incomplete")
          }
          setIsProfileSetupModalOpen(isOpen)
        }}
        aria-label="Profile Setup"
      >
        <ModalHeader>
          <ModalTitle>Set Up Your Profile</ModalTitle>
          <ModalDescription>
            We need a bit more information before you can get started.
          </ModalDescription>
        </ModalHeader>
        <Form
          onSubmit={(e) => {
            e.preventDefault()
            toast.success("Profile setup complete")
            setIsProfileSetupModalOpen(false)
            setIsRegistrationModalOpen(false)
          }}
        >
          <ModalBody className="space-y-4">
            <TextField>
              <Label>Bio</Label>
              <Textarea
                placeholder="Tell us something about yourself"
                onInput={() => setIsTyping(true)}
              />
            </TextField>
          </ModalBody>
          <ModalFooter>
            <ModalClose>Skip for now</ModalClose>
            <Button type="submit">Complete Setup</Button>
          </ModalFooter>
        </Form>
      </ModalContent>
    </>
  )
}
