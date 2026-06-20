import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import type React from 'react'
import { twMerge } from 'tailwind-merge'
import { Sandbox } from '@/app/(app)/blocks/sandbox'
import { CodeBlock } from '@/components/code/code-block'
import { EditorText } from '@/components/code/editor-text'
import InstallCommand from '@/components/code/install-command'
import { McpRac } from '@/components/code/mcp-rac'
import { McpTabs } from '@/components/code/mcp-tabs'
import { PlainCode, Pre } from '@/components/code/plain-code'
import { SourceCode } from '@/components/code/source-code'
import { DocComposed } from '@/components/doc-composed'
import { DocNote } from '@/components/doc-note'
import { FrameworkGuides } from '@/components/framework-guides'
import { ReleaseNotes } from '@/components/release-notes'
import { Link } from '@/components/ui/link'
import { DocHow } from './code/doc-how'

export const mdxComponents = {
  pre: (props: React.ComponentProps<typeof PlainCode>) => (
    <PlainCode className="not-prose bg-black" {...props}>
      <Pre>{props.children}</Pre>
    </PlainCode>
  ),
  CodeBlock,
  Sandbox,
  McpRac,
  EditorText: (props: React.ComponentProps<typeof EditorText>) => <EditorText {...props} />,
  Note: DocNote,
  ReleaseNotes,
  Composed: DocComposed,
  FrameworkGuides,
  Image,
  table: (props: React.ComponentProps<'table'>) => (
    <div className="not-prose overflow-hidden overflow-x-auto">
      <table className="not-prose w-full" {...props} />
    </div>
  ),
  thead: (props: React.ComponentProps<'thead'>) => (
    <thead className="border-border border-b-2" {...props} />
  ),
  th: (props: React.ComponentProps<'th'>) => (
    <th className="px-6 py-2.5 text-left font-medium text-fg text-sm/6 first:px-0" {...props} />
  ),
  td: (props: React.ComponentProps<'td'>) => (
    <td
      className="border-border/70 border-t px-6 py-2.5 text-muted-fg text-sm first:px-0 *:[code]:font-medium *:[code]:text-fg"
      {...props}
    />
  ),
  NewTab: (props: React.ComponentProps<typeof Link>) => (
    <Link
      className="not-prose xd2432 text-primary-subtle-fg outline-hidden hover:underline focus-visible:ring-1"
      target="_blank"
      {...props}
    >
      {(props.children as string) ?? 'Preview'}
      <ArrowUpRightIcon className="ml-1 inline size-3.5" />
    </Link>
  ),
  InstallCommand,
  McpTabs,
  How: DocHow,
  a: ({ className, ...props }: React.ComponentProps<'a'>) => {
    const isHeadingAnchor =
      typeof className === 'string' && className.split(' ').includes('heading-anchor')

    return (
      <a
        {...props}
        className={twMerge(
          isHeadingAnchor
            ? 'text-inherit no-underline outline-hidden hover:no-underline focus-visible:ring-1'
            : 'not-prose xd2432 text-primary-subtle-fg outline-hidden hover:underline focus-visible:ring-1',
          className
        )}
      />
    )
  },
  SourceCode: SourceCode,
}
