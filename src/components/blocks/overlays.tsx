"use client"

import { Wrapper } from "@/app/(home)/partials/resources"
import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import { Popover } from "@/components/ui/popover"

export function PopoverOverlays() {
  return (
    <Wrapper>
      <Popover>
        <Button intent="outline">Forgot Password</Button>
        <Popover.Content className="max-w-[28rem]">
          <Popover.Header>
            <Popover.Title>Email</Popover.Title>
            <Popover.Description>We'll send you an email to log in.</Popover.Description>
          </Popover.Header>
          <Popover.Footer>
            <Button>Send Login Link</Button>
          </Popover.Footer>
        </Popover.Content>
      </Popover>
    </Wrapper>
  )
}

export function ModalOverlays() {
  return (
    <Wrapper>
      <Modal>
        <Button>Install Update</Button>
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Install Update</Modal.Title>
            <Modal.Description>An update is available for your application.</Modal.Description>
          </Modal.Header>
          <Modal.Footer>
            <Modal.Close>Later</Modal.Close>
            <Modal.Close intent="primary">Update Now</Modal.Close>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Wrapper>
  )
}
