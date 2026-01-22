import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import type React from "react"
import { Sandbox } from "@/app/(app)/blocks/sandbox"
import { CodeBlock } from "@/components/code/code-block"
import { EditorText } from "@/components/code/editor-text"
import InstallCommand from "@/components/code/install-command"
import { PlainCode, Pre } from "@/components/code/plain-code"
import { SourceCode } from "@/components/code/source-code"
import { DocComposed } from "@/components/doc-composed"
import { DocNote } from "@/components/doc-note"
import { FrameworkGuides } from "@/components/framework-guides"
import { ReleaseNotes } from "@/components/release-notes"
import { Link } from "@/components/ui/link"
import { DocHow } from "./code/doc-how"

export const mdxComponents = {
  pre: (props: React.ComponentProps<typeof PlainCode>) => (
    <PlainCode className="not-prose bg-black" {...props}>
      <Pre>{props.children}</Pre>
    </PlainCode>
  ),
  CodeBlock,
  Sandbox,
  EditorText: (props: React.ComponentProps<typeof EditorText>) => <EditorText {...props} />,
  Note: DocNote,
  ReleaseNotes,
  Composed: DocComposed,
  FrameworkGuides,
  Image,
  table: (props: React.ComponentProps<"table">) => (
    <div className="overflow-x-auto">
      <table className="w-full" {...props} />
    </div>
  ),
  NewTab: (props: React.ComponentProps<typeof Link>) => (
    <Link
      className="not-prose xd2432 text-blue-600 outline-hidden hover:underline focus-visible:ring-1 dark:text-blue-400"
      target="_blank"
      {...props}
    >
      {(props.children as string) ?? "Preview"}
      <ArrowUpRightIcon className="ml-1 inline size-3.5" />
    </Link>
  ),
  InstallCommand,
  How: DocHow,
  a: (props: React.ComponentProps<"a">) => (
    <a
      {...props}
      className="not-prose xd2432 text-blue-600 outline-hidden hover:underline focus-visible:ring-1 dark:text-blue-400"
    />
  ),
  SourceCode: SourceCode,
}
