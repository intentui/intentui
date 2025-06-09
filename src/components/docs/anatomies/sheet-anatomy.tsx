import { Button } from "@/components/ui/button"
import { Sheet } from "@/components/ui/sheet"

export default function SheetAnatomy() {
  return (
    <Sheet>
      <Button>Open Sheet</Button>
      <Sheet.Content>
        <Sheet.Header>
          <Sheet.Title>Sheet Title</Sheet.Title>
          <Sheet.Description>Sheet Description</Sheet.Description>
        </Sheet.Header>
        <Sheet.Body>Sheet Body</Sheet.Body>
        <Sheet.Footer>
          <Sheet.Close>Cancel</Sheet.Close>
          <Button>Save</Button>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet>
  )
}
