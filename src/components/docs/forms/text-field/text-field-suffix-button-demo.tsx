"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import { TextField } from "@/components/ui/text-field"
import { IconPlus } from "@intentui/icons"

export default function TextFieldSuffixButtonDemo() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <>
      <Modal.Content isOpen={open} onOpenChange={close}>
        <Modal.Header>
          <Modal.Title>New User</Modal.Title>
          <Modal.Description>Create a new user account</Modal.Description>
        </Modal.Header>
        <Modal.Body className="flex flex-col gap-4">
          <TextField label="Username" placeholder="Username" />
          <TextField label="Email" placeholder="Email" type="email" />
        </Modal.Body>
        <Modal.Footer>
          <Modal.Close intent="outline">Cancel</Modal.Close>
          <Button onPress={close}>Continue</Button>
        </Modal.Footer>
      </Modal.Content>
      <TextField
        label="Username"
        suffix={
          <Button aria-label="New user" onPress={() => setOpen(true)} intent="outline">
            <IconPlus />
          </Button>
        }
      />
    </>
  )
}
