"use client"

import { PlusIcon } from "@heroicons/react/20/solid"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/field"
import { Input, InputGroup } from "@/components/ui/input"
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
          <TextField name="username">
            <Label>Username</Label>
            <Input placeholder="Username" />
          </TextField>
          <TextField name="email">
            <Label>Email</Label>
            <Input type="email" placeholder="Email" />
          </TextField>
        </ModalBody>
        <ModalFooter>
          <ModalClose intent="outline">Cancel</ModalClose>
          <Button onPress={close}>Continue</Button>
        </ModalFooter>
      </ModalContent>
      <TextField>
        <Label>Username</Label>
        <InputGroup>
          <Input />
          <Button aria-label="New user" onPress={() => setOpen(true)} intent="secondary">
            <PlusIcon />
          </Button>
        </InputGroup>
      </TextField>
    </>
  )
}
