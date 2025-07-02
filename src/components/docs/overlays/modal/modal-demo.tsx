"use client"

import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import { TextField } from "@/components/ui/text-field"

export default function ModalDemo() {
  return (
    <Modal>
      <Button intent="outline">Rename</Button>
      <Modal.Content>
        {({ close }) => (
          <>
            <Modal.Header>
              <Modal.Title>Rename project</Modal.Title>
              <Modal.Description>
                Change how this project will appear across the dashboard.
              </Modal.Description>
            </Modal.Header>
            <Modal.Body>
              <TextField autoFocus placeholder="Enter a name" />
            </Modal.Body>
            <Modal.Footer>
              <Modal.Close>Cancel</Modal.Close>
              <Button onPress={close} intent="primary">
                Save changes
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal.Content>
    </Modal>
  )
}
