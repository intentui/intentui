import type { TextProps } from 'react-aria-components/Text'
import { cn } from 'cn'
import { Note, type NoteProps } from '@/components/ui/note'

interface DocsNoteProps extends NoteProps {
  children: TextProps['children']
}

export function DocNote({ className, intent = 'info', children }: DocsNoteProps) {
  return (
    <Note indicator={false} intent={intent} className={cn('not-typeset mt-4', className)}>
      {children}
    </Note>
  )
}
