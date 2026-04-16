import type { TextProps } from "react-aria-components/Text"
import { Note, type NoteProps } from "@/components/ui/note"

interface DocsNoteProps extends NoteProps {
  children: TextProps["children"]
}

export function DocNote({ intent = "info", children }: DocsNoteProps) {
  return (
    <div className="not-prose mt-4">
      <Note intent={intent}>{children}</Note>
    </div>
  )
}
