import type { TextProps } from 'react-aria-components/Text'
import { twMerge } from 'tailwind-merge'
import { Note, type NoteProps } from '@/components/ui/note'

interface DocsNoteProps extends NoteProps {
  children: TextProps['children']
}

export function DocNote({ className, intent = 'info', children }: DocsNoteProps) {
  return (
    <Note indicator={false} intent={intent} className={twMerge('not-prose mt-4', className)}>
      {children}
    </Note>
  )
}
