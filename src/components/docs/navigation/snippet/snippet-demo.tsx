"use client"

import {
  Snippet,
  SnippetTab,
  SnippetTabPanel,
  SnippetTabPanels,
  SnippetTabsList,
} from "@/components/ui/snippet"

const commands = [
  { id: "npm", label: "NPM", command: "npm install react-aria-components" },
  { id: "pnpm", label: "PNPM", command: "pnpm add react-aria-components" },
  { id: "yarn", label: "Yarn", command: "yarn add react-aria-components" },
  { id: "bun", label: "Bun", command: "bun add react-aria-components" },
]

export default function SnippetDemo() {
  return (
    <div data-slot="layout" className="h-56 min-w-lg">
      <Snippet>
        <SnippetTabsList items={commands}>
          {(cmd) => <SnippetTab key={cmd.id}>{cmd.label}</SnippetTab>}
        </SnippetTabsList>
        <SnippetTabPanels items={commands}>
          {(cmd) => <SnippetTabPanel id={cmd.id}>{cmd.command}</SnippetTabPanel>}
        </SnippetTabPanels>
      </Snippet>
    </div>
  )
}
