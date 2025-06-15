import { Toolbar } from "@/components/ui/toolbar"
import {
  IconAlignmentCenter,
  IconAlignmentCenterFill,
  IconAlignmentJustify,
  IconAlignmentJustifyFill,
  IconAlignmentLeft,
  IconAlignmentLeftFill,
  IconAlignmentRight,
  IconAlignmentRightFill,
  IconBold,
  IconBoldFill,
  IconItalic,
  IconItalicFill,
  IconStrikeThrough,
  IconStrikeThroughFill,
  IconUnderline,
  IconUnderlineFill,
} from "@intentui/icons"

export default function ToolbarAnatomy() {
  return (
    <Toolbar aria-label="Toolbars">
      <Toolbar.Group aria-label="Text Formatting Options">
        <Toolbar.Item defaultSelected aria-label="Bold" size="sq-sm">
          {({ isSelected }) => <>{isSelected ? <IconBoldFill /> : <IconBold />}</>}
        </Toolbar.Item>
        <Toolbar.Item aria-label="Italic" size="sq-sm">
          {({ isSelected }) => <>{isSelected ? <IconItalicFill /> : <IconItalic />}</>}
        </Toolbar.Item>
        <Toolbar.Item aria-label="Underline" size="sq-sm">
          {({ isSelected }) => <>{isSelected ? <IconUnderlineFill /> : <IconUnderline />}</>}
        </Toolbar.Item>
        <Toolbar.Item aria-label="Strikethrough" size="sq-sm">
          {({ isSelected }) => (
            <>{isSelected ? <IconStrikeThroughFill /> : <IconStrikeThrough />}</>
          )}
        </Toolbar.Item>
      </Toolbar.Group>
      <Toolbar.Separator />
      <Toolbar.Group aria-label="Alignment">
        <Toolbar.Item aria-label="Align Left" size="sq-sm">
          {({ isSelected }) => (
            <>{isSelected ? <IconAlignmentLeftFill /> : <IconAlignmentLeft />}</>
          )}
        </Toolbar.Item>
        <Toolbar.Item size="sq-sm" aria-label="Align Center">
          {({ isSelected }) => (
            <>{isSelected ? <IconAlignmentCenterFill /> : <IconAlignmentCenter />}</>
          )}
        </Toolbar.Item>
        <Toolbar.Item size="sq-sm" aria-label="Align Right">
          {({ isSelected }) => (
            <>{isSelected ? <IconAlignmentRightFill /> : <IconAlignmentRight />}</>
          )}
        </Toolbar.Item>
        <Toolbar.Item size="sq-sm" aria-label="Align Justify">
          {({ isSelected }) => (
            <>{isSelected ? <IconAlignmentJustifyFill /> : <IconAlignmentJustify />}</>
          )}
        </Toolbar.Item>
      </Toolbar.Group>
    </Toolbar>
  )
}
