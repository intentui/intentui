"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"

type Size = Pick<React.ComponentProps<typeof Modal.Content>, "size">["size"]
const sizes: Size[] = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"]
export default function ModalSizeDemo() {
  const [isOpen, setIsOpen] = useState(false)
  const [modalSize, setModalSize] = useState<Size>("md")

  const handlePress = (size: Size, open: boolean) => {
    setModalSize(size)
    setIsOpen(open)
  }
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-4">
        {sizes.map((size, idx) => (
          <div key={idx}>
            <Button intent="outline" onPress={() => handlePress(size, true)}>
              Open {size}
            </Button>
          </div>
        ))}
      </div>

      <Modal.Content isOpen={isOpen} onOpenChange={setIsOpen} size={modalSize}>
        <Modal.Header>
          <Modal.Title>Project Update</Modal.Title>
          <Modal.Description>
            Dive deep into our project’s latest updates where we've streamlined workflow and
            improved user interfaces.
          </Modal.Description>
        </Modal.Header>
        <Modal.Footer>
          <Button intent="outline" onPress={() => setIsOpen(false)}>
            Close
          </Button>
          <Button onPress={() => setIsOpen(false)}>Confirm</Button>
        </Modal.Footer>
      </Modal.Content>
    </>
  )
}
