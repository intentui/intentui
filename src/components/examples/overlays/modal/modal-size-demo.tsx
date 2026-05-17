"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { DialogClose } from "@/components/ui/dialog"
import {
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "@/components/ui/modal"

type Size = Pick<React.ComponentProps<typeof ModalContent>, "size">["size"]
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
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {sizes.map((size, idx) => (
          <div key={idx}>
            <Button intent="outline" onPress={() => handlePress(size, true)}>
              Open {size}
            </Button>
          </div>
        ))}
      </div>

      <ModalContent isOpen={isOpen} onOpenChange={setIsOpen} size={modalSize}>
        <ModalHeader>
          <ModalTitle>Project Update</ModalTitle>
          <ModalDescription>
            Dive deep into our project’s latest updates where we've streamlined workflow and
            improved user interfaces.
          </ModalDescription>
        </ModalHeader>
        <ModalFooter>
          <DialogClose>Close</DialogClose>
          <Button onPress={() => setIsOpen(false)}>Confirm</Button>
        </ModalFooter>
      </ModalContent>
    </>
  )
}
