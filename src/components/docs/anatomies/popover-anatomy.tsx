import { Popover } from "@/components/ui/popover"

export default function PopoverAnatomy() {
  return (
    <Popover>
      <Popover.Trigger>Open Popover</Popover.Trigger>
      <Popover.Content className="sm:min-w-72">
        <Popover.Header>
          <Popover.Title>Popover Title</Popover.Title>
          <Popover.Description>Popover Description</Popover.Description>
        </Popover.Header>
        <Popover.Body>Popover Body</Popover.Body>
        <Popover.Footer>
          <Popover.Close>Close</Popover.Close>
          <Popover.Close>Confirm</Popover.Close>
        </Popover.Footer>
      </Popover.Content>
    </Popover>
  )
}
