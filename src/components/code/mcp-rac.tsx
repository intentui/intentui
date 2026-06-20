'use client'

import { useState } from 'react'
import type { Key } from 'react-aria-components/Breadcrumbs'
import { CodeHighlighter } from '@/components/code/code-highlighter'
import {
  Snippet,
  SnippetTab,
  SnippetTabPanel,
  SnippetTabPanels,
  SnippetTabsList,
} from '@/components/ui/snippet'
import { Code } from '@/components/ui/text'

const commands = [
  {
    label: 'Codex',
    id: 'codex',
    code: 'codex mcp add react-aria -- npx @react-aria/mcp@latest',
  },
  {
    label: 'Claude',
    id: 'claude',
    code: 'claude mcp add react-aria -- npx @react-aria/mcp@latest',
  },
  {
    label: 'Cursor',
    id: 'cursor',
    code: 'cursor mcp add react-aria -- npx @react-aria/mcp@latest',
  },
  {
    label: 'Gemini',
    id: 'gemini',
    code: 'gemini mcp add react-aria -- npx @react-aria/mcp@latest',
  },
  {
    label: 'VS Code',
    id: 'vscode',
    code: 'code --add-mcp \'{"name":"React Aria","command":"npx","args":["@react-aria/mcp@latest"]}\'',
  },
]

export function McpRac() {
  const [tab, setTab] = useState<Key>('codex')
  return (
    <div>
      <Snippet onSelectionChange={setTab} selectedKey={tab}>
        <SnippetTabsList items={commands}>
          {(command) => <SnippetTab key={command.label}>{command.label}</SnippetTab>}
        </SnippetTabsList>

        <SnippetTabPanels items={commands}>
          {(command) => <SnippetTabPanel>{command.code}</SnippetTabPanel>}
        </SnippetTabPanels>
      </Snippet>
      <>
        {tab === 'codex' && (
          <div className="mt-6">
            <p>
              Add the following to <Code>~/.codex/config.toml</Code>:
            </p>

            <CodeHighlighter
              lang="toml"
              code={`[mcp_servers.react-aria]
command = "npx"
args = ["@react-aria/mcp@latest"]`}
            />

            <p className="mt-4">If you use both MCP servers, your config should look like this:</p>

            <CodeHighlighter
              lang="toml"
              code={`[mcp_servers.shadcn]
command = "npx"
args = ["shadcn@latest", "mcp"]

[mcp_servers.react-aria]
command = "npx"
args = ["@react-aria/mcp@latest"]`}
            />
          </div>
        )}
      </>
    </div>
  )
}
