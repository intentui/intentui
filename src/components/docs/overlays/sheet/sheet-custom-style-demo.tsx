"use client"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Note } from "@/components/ui/note"
import { Sheet } from "@/components/ui/sheet"
import { TextField } from "@/components/ui/text-field"

export default function SheetCustomStyleDemo() {
  return (
    <Sheet>
      <Button intent="warning">Archive Project</Button>
      <Sheet.Content role="dialog">
        <Sheet.Header
          className="mb-4 border-b"
          title="Archive Project"
          description="Archiving this project will disable access and hide it from active projects."
        >
          <Note intent="warning" className="mt-2">
            You can restore the project anytime from the archive!
          </Note>
        </Sheet.Header>
        <Form className="flex-1 overflow-y-auto" onSubmit={() => {}}>
          <Sheet.Body className="space-y-4">
            <TextField
              isRequired
              autoFocus
              label="Confirm by typing the project name"
              type="text"
              placeholder="team/project-name"
            />
            <TextField isRequired label='To verify, type "archive my project" below' type="text" />
          </Sheet.Body>
          <Sheet.Footer>
            <Sheet.Close>Cancel</Sheet.Close>
            <Button intent="warning" type="submit">
              Archive Project
            </Button>
          </Sheet.Footer>
        </Form>
      </Sheet.Content>
    </Sheet>
  )
}
