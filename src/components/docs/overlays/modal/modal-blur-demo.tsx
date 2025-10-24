"use client"

import { Form } from "react-aria-components"
import { Button } from "@/components/ui/button"
import { FieldError, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Modal,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "@/components/ui/modal"
import { TextField } from "@/components/ui/text-field"

export default function ModalBlurDemo() {
  return (
    <Modal>
      <Button>Turn on 2FA</Button>
      <ModalContent isBlurred>
        <ModalHeader>
          <ModalTitle>Nice! Let's beef up your account.</ModalTitle>
          <ModalDescription>
            2FA beefs up your account's defense. Pop in your password to keep going.
          </ModalDescription>
        </ModalHeader>
        <Form onSubmit={() => {}}>
          <ModalBody className="pb-1">
            <TextField isRequired>
              <Label>Password</Label>
              <Input placeholder="Enter your password" type="password" />
              <FieldError />
            </TextField>
          </ModalBody>
          <ModalFooter>
            <ModalClose>Cancel</ModalClose>
            <Button type="submit">Turn on 2FA</Button>
          </ModalFooter>
        </Form>
      </ModalContent>
    </Modal>
  )
}
