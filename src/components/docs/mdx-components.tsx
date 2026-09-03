import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import type React from 'react'
import { cn } from 'cn'
import { Sandbox } from '@/app/(app)/blocks/sandbox'
import {
  ApiDescription,
  ApiParameter,
  ApiParameters,
  ApiReference,
} from '@/components/docs/api-parameters'
import { CodeBlock } from '@/components/docs/code-block'
import { EditorText } from '@/components/docs/editor-text'
import PackageCommand from '@/components/docs/package-command'
import { McpRac } from '@/components/docs/mcp-rac'
import { McpTabs } from '@/components/docs/mcp-tabs'
import { PlainCode, Pre } from '@/components/docs/plain-code'
import { SourceCode } from '@/components/docs/source-code'
import { DocComposed } from '@/components/docs/doc-composed'
import { DocNote } from '@/components/docs/doc-note'
import { FrameworkGuides } from '@/components/docs/framework-guides'
import { ReleaseNotes } from '@/components/docs/release-notes'
import { Link } from '@/components/ui/link'
import { DocHow } from '@/components/docs/doc-how'
import { Heading } from '@/components/docs/heading'

export const mdxComponents = {
  pre: (props: React.ComponentProps<typeof PlainCode>) => (
    <PlainCode className="not-typeset bg-black" {...props}>
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
    <div className="not-typeset overflow-hidden overflow-x-auto">
      <table className="not-typeset w-full" {...props} />
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
      className="not-typeset xd2432 text-primary-subtle-fg outline-hidden hover:underline focus-visible:ring-1"
      target="_blank"
      {...props}
    >
      {(props.children as string) ?? 'Preview'}
      <ArrowUpRightIcon className="ml-1 inline size-3.5" />
    </Link>
  ),
  PackageCommand,
  ApiDescription,
  ApiParameters,
  ApiParameter,
  ApiReference,
  McpTabs,
  How: DocHow,
  h2: (props: React.ComponentProps<'h2'>) => (
    <Heading {...props} as="h2" className={cn('text-xl', props.className)} />
  ),
  h3: (props: React.ComponentProps<'h3'>) => (
    <Heading {...props} as="h3" className={cn('text-lg', props.className)} />
  ),
  h4: (props: React.ComponentProps<'h4'>) => (
    <Heading {...props} as="h4" className={cn('text-base', props.className)} />
  ),
  // a: ({ className, ...props }: React.ComponentProps<'a'>) => {
  //   const isHeadingAnchor =
  //     typeof className === 'string' && className.split(' ').includes('heading-anchor')
  //
  //   return (
  //     <a
  //       {...props}
  //       className={cn(
  //         isHeadingAnchor
  //           ? 'text-inherit no-underline outline-hidden hover:no-underline focus-visible:ring-1'
  //           : 'not-typeset xd2432 text-primary-subtle-fg outline-hidden hover:underline focus-visible:ring-1',
  //         className
  //       )}
  //     />
  //   )
  // },
  SourceCode: SourceCode,
}
