"use client"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Modal } from "@/components/ui/modal"
import { TextField } from "@/components/ui/text-field"

export default function ModalBlurDemo() {
  return (
    <Modal>
      <Button>Turn on 2FA</Button>
      <Modal.Content isBlurred>
        <Modal.Header>
          <Modal.Title>Nice! Let's beef up your account.</Modal.Title>
          <Modal.Description>
            2FA beefs up your account's defense. Pop in your password to keep going.
          </Modal.Description>
        </Modal.Header>
        <Form onSubmit={() => {}}>
          <Modal.Body className="pb-1">
            <TextField
              isRequired
              autoFocus
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
          </Modal.Body>
          <Modal.Footer>
            <Modal.Close>Cancel</Modal.Close>
            <Button type="submit">Turn on 2FA</Button>
          </Modal.Footer>
        </Form>
      </Modal.Content>
    </Modal>
  )
}
