import { Checkbox } from "@/components/ui/checkbox"
import { Toolbar } from "@/components/ui/toolbar"
import { IconBold, IconBoldFill, IconItalic, IconItalicFill } from "@intentui/icons"

export default function ToolbarAnatomy() {
  return (
    <Toolbar aria-label="Toolbars">
      <Toolbar.Group aria-label="Text Formatting Options">
        <Toolbar.Item defaultSelected aria-label="Bold" size="sq-sm" intent="secondary">
          {({ isSelected }) => <>{isSelected ? <IconBoldFill /> : <IconBold />}</>}
        </Toolbar.Item>
        <Toolbar.Item aria-label="Italic" size="sq-sm" intent="secondary">
          {({ isSelected }) => <>{isSelected ? <IconItalicFill /> : <IconItalic />}</>}
        </Toolbar.Item>
      </Toolbar.Group>
      <Toolbar.Separator />
      <Checkbox>Spell Check</Checkbox>
    </Toolbar>
  )
}
