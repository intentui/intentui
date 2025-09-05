"use client"
import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"

export default function AlertDialogDemo() {
  return (
    <Modal>
      <Button intent="danger">Revoke Access</Button>
      <Modal.Content role="alertdialog">
        <Modal.Header>
          <Modal.Title>Revoke User Access?</Modal.Title>
          <Modal.Description>
            This will immediately remove all access for the selected user. This action is permanent
            and cannot be undone.
          </Modal.Description>
        </Modal.Header>
        <Modal.Footer>
          <Modal.Close>Cancel</Modal.Close>
          <Button intent="danger">Revoke Access</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}
