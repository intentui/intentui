import type { TextProps } from "react-aria-components/Text"
import { Note, type NoteProps } from "@/components/ui/note"
import { twMerge } from "tailwind-merge";

interface DocsNoteProps extends NoteProps {
  children: TextProps["children"]
}

export function DocNote({ className, intent = "info", children }: DocsNoteProps) {
  return (
      <Note indicator={false} intent={intent} className={twMerge('mt-4 not-prose', className)}>{children}</Note>
  )
}
