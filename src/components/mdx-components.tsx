import { IconArrowUpRight } from "@intentui/icons"
import Image from "next/image"
import type React from "react"
import { Sandbox } from "@/app/(app)/blocks/sandbox"
import { GeneratedTheme } from "@/app/(app)/themes/partials/generated-theme"
import { CodeBlock } from "@/components/code/code-block"
import { EditorText } from "@/components/code/editor-text"
import { PlainCode, Pre } from "@/components/code/plain-code"
import { SourceCode } from "@/components/code/source-code"
import { DocComposed } from "@/components/doc-composed"
import { DocNote } from "@/components/doc-note"
import { FrameworkGuides } from "@/components/framework-guides"
import { Link } from "@/components/ui/link"
import { DocHow } from "./code/doc-how"

export const mdxComponents = {
  GeneratedTheme,
  pre: (props: React.ComponentProps<typeof PlainCode>) => (
    <PlainCode className="not-prose bg-black" {...props}>
      <Pre>{props.children}</Pre>
    </PlainCode>
  ),
  CodeBlock,
  Sandbox,
  EditorText: (props: React.ComponentProps<typeof EditorText>) => <EditorText {...props} />,
  Note: DocNote,
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
      <IconArrowUpRight className="ml-1 inline size-3.5" />
    </Link>
  ),
  How: DocHow,
  a: (props: React.ComponentProps<"a">) => (
    <a
      {...props}
      className="not-prose xd2432 text-blue-600 outline-hidden hover:underline focus-visible:ring-1 dark:text-blue-400"
    />
  ),
  SourceCode: SourceCode,
}
