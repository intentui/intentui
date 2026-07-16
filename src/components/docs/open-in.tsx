'use client'

import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { BrandGithubIcon } from '@/components/icons/brand-github-icon'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { Loader } from '@/components/ui/loader'
import {
  Menu,
  MenuContent,
  MenuDescription,
  MenuItem,
  MenuLabel,
  MenuSeparator,
} from '@/components/ui/menu'
import { app } from '@/config/app'
import { useClipboard } from '@/hooks/use-clipboard'
import { DuplicateIcon } from '@/components/icons/duplicate-icon'
import { BrandGrokIcon } from '@/components/icons/brand-grok-icon'
import { BrandChatgptIcon } from '@/components/icons/brand-chatgpt-icon'
import { BrandPerflexityIcon } from '@/components/icons/brand-perflexity-icon'
import { BrandClaudeIcon } from '@/components/icons/brand-claude-icon'
import { IconMarkdown } from '@/components/icons/icon-markdown'

function getPromptUrl(baseURL: string, url: string) {
  return `${baseURL}?q=${encodeURIComponent(
    `I'm currently reading the ${app.name} documentation at: ${url}\n\n` +
      `Please help me understand it thoroughly. ` +
      `Explain the key concepts, show practical examples, and be ready to help me debug or implement features based on this documentation.`
  )}`
}

function getPerplexityUrl(url: string) {
  return `https://www.perplexity.ai/search/new?q=${encodeURIComponent(
    `I'm currently reading the ${app.name} documentation at: ${url}\n\n` +
      `Please help me understand it thoroughly. ` +
      `Explain the key concepts, show practical examples, and be ready to help me debug or implement features based on this documentation.`
  )}`
}

export function OpenIn({ url, page }: { url: string; page: string }) {
  const fullUrl = `${app.url}${url}`
  const [pending, setPending] = useState(false)
  const llmUrl = `${fullUrl}.md`
  const { copied, copy } = useClipboard()

  async function getMarkdown() {
    setPending(true)

    try {
      const res = await fetch(llmUrl, { method: 'GET' })
      const text = res.ok ? await res.text() : page
      await copy(text)
    } finally {
      setPending(false)
    }
  }

  return (
    <ButtonGroup>
      <Button
        className="h-10 rounded-sm sm:h-auto dark:bg-secondary/50 dark:hover:bg-secondary"
        intent="outline"
        size="sm"
        onPress={() => void getMarkdown()}
        isPending={pending}
      >
        {pending ? <Loader /> : copied ? <CheckIcon /> : <DuplicateIcon />}
        Copy page
      </Button>
      <Menu>
        <Button
          className="h-10 rounded-sm pressed:bg-secondary pressed:*:text-fg sm:h-auto dark:bg-secondary/50 dark:hover:bg-secondary"
          intent="outline"
          size="sm"
        >
          <ChevronDownIcon className="rotate-180 sm:rotate-0" />
        </Button>
        <MenuContent className="min-w-64" placement="bottom end">
          <MenuItem href={`${url}.md`} target="_blank" rel="noopener noreferrer">
            <IconMarkdown />
            <MenuLabel>View as Markdown</MenuLabel>
            <MenuDescription>Open the raw Markdown version.</MenuDescription>
          </MenuItem>
          <MenuSeparator />
          <MenuItem
            href={getPromptUrl('https://grok.com', fullUrl)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BrandGrokIcon />
            <MenuLabel>Open in Grok</MenuLabel>
            <MenuDescription>Ask Grok about this page.</MenuDescription>
          </MenuItem>
          <MenuItem
            href={getPromptUrl('https://chatgpt.com', fullUrl)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BrandChatgptIcon />
            <MenuLabel>Open in ChatGPT</MenuLabel>
            <MenuDescription>Ask ChatGPT about this page.</MenuDescription>
          </MenuItem>
          <MenuItem href={getPerplexityUrl(llmUrl)} target="_blank" rel="noopener noreferrer">
            <BrandPerflexityIcon />
            <MenuLabel>Open in Perplexity</MenuLabel>
            <MenuDescription>Explore this page with Perplexity.</MenuDescription>
          </MenuItem>
          <MenuItem
            href={getPromptUrl('https://claude.ai/new', fullUrl)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BrandClaudeIcon />
            <MenuLabel>Open in Claude</MenuLabel>
            <MenuDescription>Ask Claude about this page.</MenuDescription>
          </MenuItem>
          <MenuItem
            href={`${app.repo.url}/blob/${app.repo.currentVersion}/src/content${url}.mdx`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BrandGithubIcon />
            <MenuLabel>Open in GitHub</MenuLabel>
            <MenuDescription>View the source file on GitHub.</MenuDescription>
          </MenuItem>
        </MenuContent>
      </Menu>
    </ButtonGroup>
  )
}
