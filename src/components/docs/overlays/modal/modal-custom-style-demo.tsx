"use client"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Modal } from "@/components/ui/modal"
import { Note } from "@/components/ui/note"
import { TextField } from "@/components/ui/text-field"

export default function ModalCustomStyleDemo() {
  return (
    <Modal>
      <Button intent="danger">Delete Project</Button>
      <Modal.Content classNames={{ content: "" }} role="alertdialog">
        <Modal.Header
          className="bg-secondary/80"
          title="Delete Project"
          description="This project’s gonna get wiped, including all its Deployments, Domains, Env Variables, Serverless Functions, and Settings."
        >
          <Note intent="danger" className="mt-2">
            No undo button here, so be sure!
          </Note>
        </Modal.Header>
        <Form onSubmit={() => {}}>
          <Modal.Body className="space-y-4 border-t pt-6">
            <TextField
              isRequired
              autoFocus
              label="Enter the project name"
              type="text"
              placeholder="team/project-name"
            />
            <TextField isRequired label='To verify, type "delete my project" below' type="text" />
          </Modal.Body>
          <Modal.Footer>
            <Modal.Close>Cancel</Modal.Close>
            <Button intent="danger" type="submit">
              Delete Project
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Content>
    </Modal>
  )
}
