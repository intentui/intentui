'use client'

import { CodeBracketIcon, DocumentTextIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { Tab } from 'react-aria-components/Tabs'
import { cn } from 'cn'
import generated from '@/../__registry__/generated'
import { CodeHighlighter } from '@/components/docs/code-highlighter'
import { CopyButton } from '@/components/docs/copy-button'
import { BrandCssIcon } from '@/components/icons/brand-css-icon'
import { BrandReactjsIcon } from '@/components/icons/brand-reactjs-icon'
import { BrandTypescriptIcon } from '@/components/icons/brand-typescript-icon'
import { TabList, TabPanel, Tabs } from '@/components/ui/tabs'
import { useClipboard } from '@/hooks/use-clipboard'
import type { RegistryItem } from '@/types'

interface Props {
  source: Record<string, string>
}

const registry = generated as Record<string, RegistryItem>

export function EditorText({ source }: Props) {
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({})
  const { copy } = useClipboard()

  const [rawSourceCode, setRawSourceCode] = useState<Record<string, string | null>>({})

  const handleCopy = async (key: string, value: string | null) => {
    if (value) {
      const didCopy = await copy(value)
      if (!didCopy) return
      setCopiedStates((prev) => ({ ...prev, [key]: true }))
      setTimeout(() => {
        setCopiedStates((prev) => ({ ...prev, [key]: false }))
      }, 2000)
    }
  }

  useEffect(() => {
    const fetchRegistryData = async () => {
      const fetchedSourceCode: Record<string, string | null> = {}
      await Promise.all(
        Object.entries(source)
          .filter(([key]) => key !== 'preview')

          .map(async ([key, path]) => {
            const registryKey = `${path}`
            const registryItem = registry[registryKey]

            if (registryItem) {
              try {
                const response = await fetch(`/registry/${registryKey}.json`)
                if (response.ok) {
                  const registryEntry = await response.json()
                  fetchedSourceCode[key] =
                    registryEntry.files?.[0]?.content || 'No content available'
                } else {
                  console.error(`Failed to fetch source code for ${path}:`, response.status)
                  fetchedSourceCode[key] = 'Error loading source code.'
                }
              } catch (error) {
                console.error(`Error fetching source code for ${path}:`, error)
                fetchedSourceCode[key] = 'Error loading source code.'
              }
            } else {
              console.error(`Registry item for ${registryKey} not found.`)
              fetchedSourceCode[key] = 'Registry item not found.'
            }
          })
      )
      setRawSourceCode(fetchedSourceCode)
    }

    fetchRegistryData()
  }, [source])

  return (
    <>
      {rawSourceCode && Object.keys(rawSourceCode).length > 0 ? (
        <Tabs className="relative mt-6 gap-0">
          <div className="flex items-center justify-between overflow-hidden rounded-t-lg border-x border-y">
            <TabList className="gap-0 border-0 py-0">
              {Object.keys(rawSourceCode).map((key) => (
                <Tab
                  className={(values) =>
                    cn(
                      'flex cursor-default items-center gap-x-1.5 whitespace-nowrap px-2 py-2.5 font-mono text-muted-fg text-xs tracking-tight first:pl-3',
                      'border-transparent border-x outline-hidden first:border-l-0 **:data-[slot=icon]:-ml-0.5 **:data-[slot=icon]:size-4 **:data-[slot=icon]:shrink-0',
                      (values.isSelected || values.isFocused || values.isFocusVisible) &&
                        'border-input bg-secondary/50 text-secondary-fg dark:bg-muted',
                      values.isHovered && 'bg-secondary/70 text-secondary-fg dark:bg-muted'
                    )
                  }
                  key={key}
                  id={key}
                >
                  {key.includes('css') ? (
                    <BrandCssIcon className="size-4 text-blue-500" />
                  ) : key.includes('.tsx') ? (
                    <BrandReactjsIcon className="size-4 text-sky-500" />
                  ) : key.includes('.ts') ? (
                    <BrandTypescriptIcon className="size-4 text-sky-500" />
                  ) : key.includes('.json') ? (
                    <CodeBracketIcon className="size-4 text-purple-400" />
                  ) : (
                    <DocumentTextIcon />
                  )}
                  <span>{key}</span>
                </Tab>
              ))}
            </TabList>
          </div>
          {Object.entries(rawSourceCode).map(([key, value]) => (
            <TabPanel
              key={key}
              id={key}
              className="overflow-hidden rounded-b-lg border-x border-b bg-shiki-bg"
            >
              <CopyButton
                className="absolute top-0.5 -right-6"
                alwaysVisible
                isCopied={copiedStates[key] || false}
                onPress={() => handleCopy(key, value)}
              />
              <CodeHighlighter
                plain
                removeLastLine
                className="p-4"
                code={value || 'No source code available'}
              />
            </TabPanel>
          ))}
        </Tabs>
      ) : (
        <div className="p-4 text-center">Loading source code...</div>
      )}
    </>
  )
}
