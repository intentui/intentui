import { Toolbar } from "@/components/ui/toolbar"

export default function ToolbarAnatomy() {
  return (
    <Toolbar aria-label="Toolbars">
      <Toolbar.Group aria-label="First group">
        <Toolbar.Item />
        <Toolbar.Item />
      </Toolbar.Group>
      <Toolbar.Separator />
      <Toolbar.Group aria-label="Second group">
        <Toolbar.Item />
        <Toolbar.Item />
      </Toolbar.Group>
    </Toolbar>
  )
}
