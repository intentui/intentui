'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  Snippet,
  SnippetTab,
  SnippetTabPanel,
  SnippetTabPanels,
  SnippetTabsList,
} from '@/components/ui/snippet'

interface CommandItem {
  id: 'npm' | 'pnpm' | 'yarn' | 'bun'
  command: string
}

type InstallCommandProps = {
  command: string
  mode?: 'auto' | 'install' | 'exec'
}

type PackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun'

const PM_STORAGE_KEY = 'preferred-package-manager'
const PM_EVENT = 'package-manager-change'

function getStoredPackageManager(): PackageManager {
  if (typeof window === 'undefined') return 'npm'
  const v = localStorage.getItem(PM_STORAGE_KEY)
  if (v === 'npm' || v === 'pnpm' || v === 'yarn' || v === 'bun') return v
  return 'npm'
}

function setStoredPackageManager(pm: PackageManager) {
  if (typeof window === 'undefined') return
  localStorage.setItem(PM_STORAGE_KEY, pm)
  window.dispatchEvent(new CustomEvent(PM_EVENT, { detail: pm }))
}

function parseCommand(
  input: string,
  mode: InstallCommandProps['mode']
): { mode: 'install' | 'exec'; args: string } {
  const cmd = input.trim().replace(/\s+/g, ' ')

  if (mode === 'install') {
    return {
      mode: 'install',
      args: cmd.replace(/^(npm\s+(?:i|install)|pnpm\s+add|yarn\s+add|bun\s+add)\s+/, ''),
    }
  }

  if (mode === 'exec') {
    return { mode: 'exec', args: cmd.replace(/^(npx|pnpm\s+dlx|yarn\s+dlx|bunx)\s+/, '') }
  }

  if (/^(npm\s+(?:i|install)|pnpm\s+add|yarn\s+add|bun\s+add)\s+/.test(cmd)) {
    return {
      mode: 'install',
      args: cmd.replace(/^(npm\s+(?:i|install)|pnpm\s+add|yarn\s+add|bun\s+add)\s+/, ''),
    }
  }

  if (/^(npx|pnpm\s+dlx|yarn\s+dlx|bunx)\s+/.test(cmd)) {
    return { mode: 'exec', args: cmd.replace(/^(npx|pnpm\s+dlx|yarn\s+dlx|bunx)\s+/, '') }
  }

  if (
    /(^|\/)shadcn(@|$)/.test(cmd) ||
    /\badd\s+@/.test(cmd) ||
    /\binit\b/.test(cmd) ||
    /@latest\b/.test(cmd)
  ) {
    return { mode: 'exec', args: cmd }
  }

  return { mode: 'install', args: cmd }
}

function buildItems(parsed: { mode: 'install' | 'exec'; args: string }): CommandItem[] {
  const { mode, args } = parsed

  if (mode === 'exec') {
    return [
      { id: 'npm', command: `npx ${args}` },
      { id: 'pnpm', command: `pnpm dlx ${args}` },
      { id: 'yarn', command: `yarn dlx ${args}` },
      { id: 'bun', command: `bunx ${args}` },
    ]
  }

  return [
    { id: 'npm', command: `npm install ${args}` },
    { id: 'pnpm', command: `pnpm add ${args}` },
    { id: 'yarn', command: `yarn add ${args}` },
    { id: 'bun', command: `bun add ${args}` },
  ]
}

export default function InstallCommand({ command, mode = 'auto' }: InstallCommandProps) {
  const parsed = useMemo(() => parseCommand(command, mode), [command, mode])
  const items = useMemo(() => buildItems(parsed), [parsed])
  const [selectedPM, setSelectedPM] = useState<PackageManager>('npm')

  useEffect(() => {
    setSelectedPM(getStoredPackageManager())

    const handlePMChange = (e: Event) => {
      const customEvent = e as CustomEvent<PackageManager>
      setSelectedPM(customEvent.detail)
    }

    window.addEventListener(PM_EVENT, handlePMChange)
    return () => window.removeEventListener(PM_EVENT, handlePMChange)
  }, [])

  const handleSelectionChange = (key: string | number) => {
    const pm = String(key) as PackageManager
    setSelectedPM(pm)
    setStoredPackageManager(pm)
  }

  return (
    <Snippet selectedKey={selectedPM} onSelectionChange={handleSelectionChange}>
      <SnippetTabsList className="bg-shiki-bg" items={items}>
        {(cmd) => (
          <SnippetTab id={cmd.id} key={cmd.id}>
            {cmd.id}
          </SnippetTab>
        )}
      </SnippetTabsList>
      <SnippetTabPanels items={items}>
        {(cmd) => (
          <SnippetTabPanel className="dark:bg-shiki-bg" id={cmd.id}>
            {cmd.command}
          </SnippetTabPanel>
        )}
      </SnippetTabPanels>
    </Snippet>
  )
}
