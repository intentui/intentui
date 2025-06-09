"use client"

import React from "react"

import { wait } from "@/resources/lib/utils"
import { IconCircleCheckFill, IconTrash } from "@intentui/icons"
import { Button, Loader, Popover } from "ui"

export default function PopoverControlledDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [loading, setLoading] = React.useState<"idle" | "loading" | "success">("idle")
  const triggerRef = React.useRef(null)

  const deleteAccount = async () => {
    setLoading("loading")
    await wait(3000)
    setLoading("success")

    await wait(2000)
    setLoading("idle")
    setIsOpen(false)
  }
  return (
    <>
      <Button ref={triggerRef} onPress={() => setIsOpen(true)} intent="danger">
        Delete Account
      </Button>
      <Popover.Content
        triggerRef={triggerRef}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        className="sm:max-w-sm"
      >
        <Popover.Header>
          <Popover.Title>Confirm Deletion</Popover.Title>
          <Popover.Description>
            Are you sure you want to delete your account? This action cannot be undone.
          </Popover.Description>
        </Popover.Header>
        <Popover.Footer>
          <Button appearance="outline" onPress={() => setIsOpen(false)} className="mr-2">
            Cancel
          </Button>
          <Button
            isDisabled={loading === "loading"}
            onPress={deleteAccount}
            intent={["loading", "idle"].includes(loading) ? "danger" : "primary"}
          >
            {loading === "loading" ? (
              <>
                <Loader variant="spin" />
                Deleting...
              </>
            ) : loading === "success" ? (
              <>
                <IconCircleCheckFill />
                Deleted
              </>
            ) : (
              <>
                <IconTrash />
                Delete
              </>
            )}
          </Button>
        </Popover.Footer>
      </Popover.Content>
    </>
  )
}
