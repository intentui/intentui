'use client'
import { Button } from '@/components/ui/button'
import {
  Modal,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from '@/components/ui/modal'

export default function AlertDialogDemo() {
  return (
    <Modal>
      <Button intent="danger">Revoke Access</Button>
      <ModalContent role="alertdialog">
        <ModalHeader>
          <ModalTitle>Revoke User Access?</ModalTitle>
          <ModalDescription>
            This will immediately remove all access for the selected user. This action is permanent
            and cannot be undone.
          </ModalDescription>
        </ModalHeader>
        <ModalFooter>
          <ModalClose>Cancel</ModalClose>
          <Button intent="danger">Revoke Access</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
