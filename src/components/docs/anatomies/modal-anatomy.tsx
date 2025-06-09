import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"

export default function ModalAnatomy() {
  return (
    <Modal>
      <Modal.Trigger>Open Modal</Modal.Trigger>
      <Modal.Content>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
          <Modal.Description>Modal Description</Modal.Description>
        </Modal.Header>
        <Modal.Body>Modal Body</Modal.Body>
        <Modal.Footer>
          <Modal.Close>Close</Modal.Close>
          <Button>Confirm</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}
