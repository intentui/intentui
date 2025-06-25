"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Loader } from "@/components/ui/loader"
import { Menu } from "@/components/ui/menu"
import { Modal } from "@/components/ui/modal"
import { wait } from "@/lib/utils"
import { IconBlock, IconChevronLgDown, IconTrash } from "@intentui/icons"

export default function ModalTriggeredByMenuDemo() {
  const [state, setState] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const closeModal = () => setState(null)
  const executeAction = (action: string) => {
    setLoading(true)
    wait(2000).then(() => {
      setLoading(false)
      closeModal()
    })
  }

  const actionType = (t: string | null) => {
    switch (t) {
      case "delete":
        return {
          title: "Delete User",
          description: "Are you sure you want to delete this item?",
          confirmText: "Delete",
          action: () => executeAction(t),
        }

      case "ban":
        return {
          title: "Ban User",
          description: "Are you sure you want to ban this user?",
          confirmText: "Ban",
          action: () => executeAction(t),
        }

      case "restore":
        return {
          title: "Restore User",
          description: "Are you sure you want to restore this user?",
          confirmText: "Restore",
          action: () => executeAction(t),
        }
      default:
        return
    }
  }
  return (
    <>
      <Menu>
        <Button intent="outline" className="group">
          Actions...
          <IconChevronLgDown className="decoration-200 transition-transform group-pressed:rotate-180" />
        </Button>
        <Menu.Content popover={{ placement: "bottom" }}>
          <Menu.Item onAction={() => setState("delete")}>
            <IconTrash /> <Menu.Label>Delete</Menu.Label>
          </Menu.Item>
          <Menu.Item isDanger onAction={() => setState("ban")}>
            <IconBlock />
            <Menu.Label>Ban</Menu.Label>
          </Menu.Item>
          <Menu.Item onAction={() => setState("restore")}>
            <Menu.Label>Restore</Menu.Label>
          </Menu.Item>
        </Menu.Content>
      </Menu>

      <Modal.Content isOpen={state !== null} onOpenChange={closeModal}>
        <Modal.Header>
          <Modal.Title>{actionType(state)?.title}</Modal.Title>
          <Modal.Description>{actionType(state)?.description}</Modal.Description>
        </Modal.Header>
        <Modal.Footer>
          <Modal.Close>Cancel</Modal.Close>
          <Button
            intent={state === "ban" ? "danger" : "primary"}
            className="min-w-24"
            isDisabled={loading}
            onPress={actionType(state)?.action}
          >
            {loading ? <Loader variant="spin" /> : actionType(state)?.confirmText}
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </>
  )
}
