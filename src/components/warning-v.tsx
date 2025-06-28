"use client"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { Popover } from "@/components/ui/popover"
import { IconCircleExclamationFill } from "@intentui/icons"

export function WarningV() {
  return (
    <Popover>
      <Button
        intent="warning"
        size="square-petite"
        shape="circle"
        className="fixed right-6 bottom-6 z-50 size-10 *:data-[slot=icon]:size-6"
      >
        <IconCircleExclamationFill />
      </Button>
      <Popover.Content className="sm:max-w-xs">
        <Popover.Header>
          <Popover.Title>Intent UI v2</Popover.Title>
          <Popover.Description>
            You're viewing the <strong className="font-semibold text-warning">Intent UI v2</strong>{" "}
            documentation. Go to{" "}
            <Link
              className="font-medium text-blue-600 underline dark:text-blue-400"
              href="https://intentui.com"
              target="_blank"
            >
              v3 documentation
            </Link>
            to see the latest updates.
          </Popover.Description>
        </Popover.Header>
      </Popover.Content>
    </Popover>
  )
}
