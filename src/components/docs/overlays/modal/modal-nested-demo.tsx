"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Modal } from "@/components/ui/modal"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

export default function ModalNestedDemo() {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false)
  const [isProfileSetupModalOpen, setIsProfileSetupModalOpen] = useState(false)
  const [isTyping, setIsTyping] = useState(false)

  return (
    <>
      <Button onPress={() => setIsRegistrationModalOpen(true)}>Register</Button>

      <Modal.Content
        isOpen={isRegistrationModalOpen}
        onOpenChange={() => setIsRegistrationModalOpen(false)}
        aria-label="Confirm Registration"
      >
        <Modal.Header>
          <Modal.Title>Confirm Registration</Modal.Title>
          <Modal.Description>Please confirm your registration details.</Modal.Description>
        </Modal.Header>
        <Modal.Footer>
          <Modal.Close>Cancel</Modal.Close>
          <Button
            onPress={() => {
              setIsProfileSetupModalOpen(true)
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal.Content>

      <Modal.Content
        isOpen={isProfileSetupModalOpen}
        onOpenChange={(isOpen) => {
          if (!isOpen && isTyping) {
            toast("Profile setup incomplete")
          }
          setIsProfileSetupModalOpen(isOpen)
        }}
        aria-label="Profile Setup"
      >
        <Modal.Header>
          <Modal.Title>Set Up Your Profile</Modal.Title>
          <Modal.Description>
            We need a bit more information before you can get started.
          </Modal.Description>
        </Modal.Header>
        <Form
          onSubmit={(e) => {
            e.preventDefault()
            toast.success("Profile setup complete")
            setIsProfileSetupModalOpen(false)
            setIsRegistrationModalOpen(false)
          }}
        >
          <Modal.Body className="space-y-4">
            <Textarea
              isRequired
              label="Bio"
              placeholder="Tell us something about yourself"
              onInput={() => setIsTyping(true)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Modal.Close>Skip for now</Modal.Close>
            <Button type="submit">Complete Setup</Button>
          </Modal.Footer>
        </Form>
      </Modal.Content>
    </>
  )
}
