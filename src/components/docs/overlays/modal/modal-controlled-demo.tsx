"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"

export default function ModalControlledDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onPress={() => setOpen(true)} intent="primary">
        Subscribe
      </Button>
      <Modal.Content isOpen={open} onOpenChange={setOpen}>
        <Modal.Header>
          <Modal.Title>Subscribe to Our Newsletter</Modal.Title>
          <Modal.Description>
            Get the latest news and updates right to your inbox.
          </Modal.Description>
        </Modal.Header>
        <Modal.Footer>
          <Button onPress={() => setOpen(false)}>Sign Up</Button>
        </Modal.Footer>
      </Modal.Content>
    </>
  )
}
