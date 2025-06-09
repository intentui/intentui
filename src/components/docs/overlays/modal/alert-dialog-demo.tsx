"use client"
import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"

export default function AlertDialogDemo() {
  return (
    <Modal>
      <Button intent="danger">Delete</Button>
      <Modal.Content role="alertdialog">
        <Modal.Header>
          <Modal.Title>Delete file</Modal.Title>
          <Modal.Description>
            This will permanently delete the selected file. Continue?
          </Modal.Description>
        </Modal.Header>
        <Modal.Footer>
          <Modal.Close>Cancel</Modal.Close>
          <Button intent="danger">Continue</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}
