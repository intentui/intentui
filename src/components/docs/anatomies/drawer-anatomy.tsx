import { Button } from "@/components/ui/button"
import { Drawer } from "@/components/ui/drawer"

export default function DrawerAnatomy() {
  return (
    <Drawer>
      <Drawer.Trigger>Open Drawer</Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>Drawer Title</Drawer.Title>
          <Drawer.Description>Drawer Description</Drawer.Description>
        </Drawer.Header>
        <Drawer.Body>Drawer Body</Drawer.Body>
        <Drawer.Footer>
          <Drawer.Close>Close</Drawer.Close>
          <Button>Confirm</Button>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  )
}
