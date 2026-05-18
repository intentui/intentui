"use client"

import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { NoSymbolIcon, TrashIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Loader } from "@/components/ui/loader"
import { Menu, MenuContent, MenuItem, MenuLabel } from "@/components/ui/menu"
import {
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "@/components/ui/modal"
import { wait } from "@/lib/utils"

export default function ModalTriggeredByMenuDemo() {
  const [state, setState] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const closeModal = () => setState(null)

  const executeAction = async (action: string) => {
    setLoading(true)
    try {
      await wait(2000)
      closeModal()
      toast(`${action.charAt(0).toUpperCase() + action.slice(1)} action executed!`)
    } finally {
      setLoading(false)
    }
  }

  const actionType = (t: string | null) => {
    switch (t) {
      case "delete":
        return {
          title: "Delete user",
          description: "Are you sure you want to delete this item?",
          confirmText: "Delete",
          action: () => executeAction(t),
        }
      case "ban":
        return {
          title: "Ban user",
          description: "Are you sure you want to ban this user?",
          confirmText: "Ban",
          action: () => executeAction(t),
        }
      case "restore":
        return {
          title: "Restore user",
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
          <ChevronDownIcon className="decoration-200 transition-transform group-pressed:rotate-180" />
        </Button>
        <MenuContent popover={{ placement: "bottom" }}>
          <MenuItem onAction={() => setState("delete")}>
            <TrashIcon /> <MenuLabel>Delete</MenuLabel>
          </MenuItem>
          <MenuItem intent="danger" onAction={() => setState("ban")}>
            <NoSymbolIcon />
            <MenuLabel>Ban</MenuLabel>
          </MenuItem>
          <MenuItem onAction={() => setState("restore")}>
            <MenuLabel>Restore</MenuLabel>
          </MenuItem>
        </MenuContent>
      </Menu>

      <ModalContent isOpen={state !== null} onOpenChange={closeModal}>
        <ModalHeader>
          <ModalTitle>{actionType(state)?.title}</ModalTitle>
          <ModalDescription>{actionType(state)?.description}</ModalDescription>
        </ModalHeader>
        <ModalFooter>
          <ModalClose>Cancel</ModalClose>
          <Button
            autoFocus
            intent={state === "ban" ? "danger" : "primary"}
            className="min-w-24"
            isDisabled={loading}
            onPress={actionType(state)?.action}
          >
            {loading ? <Loader variant="spin" /> : actionType(state)?.confirmText}
          </Button>
        </ModalFooter>
      </ModalContent>
    </>
  )
}
