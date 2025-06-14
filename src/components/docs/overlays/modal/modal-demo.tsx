"use client"

import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import { Note } from "@/components/ui/note"

export default function ModalDemo() {
  return (
    <Modal>
      <Button intent="outline">Session Expiry</Button>
      <Modal.Content>
        <Modal.Header>
          <Modal.Title>Session Expiring</Modal.Title>
          <Modal.Description>Your session is about to expire due to inactivity.</Modal.Description>
        </Modal.Header>
        <Modal.Body>
          <Note>
            For your security, you will be logged out soon. Do you want to stay signed in?
          </Note>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Close>Log Out</Modal.Close>
          <Button>Stay Signed In</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}
