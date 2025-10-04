"use client"

import { IconPlus } from "@intentui/icons"
import { useState } from "react"
import { Button } from "@/components/ui/button"
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

export default function TextFieldSuffixButtonDemo() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <>
      <ModalContent isOpen={open} onOpenChange={close}>
        <ModalHeader>
          <ModalTitle>New User</ModalTitle>
          <ModalDescription>Create a new user account</ModalDescription>
        </ModalHeader>
        <ModalBody className="flex flex-col gap-4">
          <TextField label="Username" placeholder="Username" />
          <TextField label="Email" placeholder="Email" type="email" />
        </ModalBody>
        <ModalFooter>
          <ModalClose intent="outline">Cancel</ModalClose>
          <Button onPress={close}>Continue</Button>
        </ModalFooter>
      </ModalContent>
      <TextField
        label="Username"
        suffix={
          <Button
            size="sq-xs"
            aria-label="New user"
            onPress={() => setOpen(true)}
            intent="secondary"
          >
            <IconPlus />
          </Button>
        }
      />
    </>
  )
}
