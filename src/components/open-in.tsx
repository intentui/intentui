"use client"

import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid"
import type { Root as PageTreeRoot } from "fumadocs-core/page-tree"
import { useState } from "react"
import { BrandGithubIcon } from "@/components/icons/brand-github-icon"
import { MobilePager } from "@/components/mobile-pager"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Loader } from "@/components/ui/loader"
import { Menu, MenuContent, MenuItem, MenuSeparator } from "@/components/ui/menu"
import { app } from "@/config/app"
import { useClipboard } from "@/hooks/use-clipboard"
import { DuplicateIcon } from "./icons/duplicate-icon"

function getPromptUrl(baseURL: string, url: string) {
  return `${baseURL}?q=${encodeURIComponent(
    `I'm currently reading the ${app.name} documentation at: ${url}\n\n` +
      `Please help me understand it thoroughly. ` +
      `Explain the key concepts, show practical examples, and be ready to help me debug or implement features based on this documentation.`,
  )}`
}

function getPerplexityUrl(url: string) {
  return `https://www.perplexity.ai/search/new?q=${encodeURIComponent(
    `I'm currently reading the ${app.name} documentation at: ${url}\n\n` +
      `Please help me understand it thoroughly. ` +
      `Explain the key concepts, show practical examples, and be ready to help me debug or implement features based on this documentation.`,
  )}`
}

export function OpenIn({ tree, url, page }: { tree: PageTreeRoot; url: string; page: string }) {
  const fullUrl = `${app.url}${url}`
  const [pending, setPending] = useState(false)
  const llmUrl = `${fullUrl}.md`
  const { copied, copy } = useClipboard()

  async function getMarkdown() {
    setPending(true)

    try {
      const res = await fetch(llmUrl, { method: "GET" })
      const text = res.ok ? await res.text() : page
      await copy(text)
      window.aurelie?.track?.(`copy page: ${fullUrl}`, { url: fullUrl })
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="not-prose ml-auto flex items-center justify-between gap-x-1.5 md:border-transparent">
      <ButtonGroup className="hidden sm:flex">
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
          <MenuContent className="min-w-40" placement="bottom end">
            <MenuItem href={`${url}.md`} target="_blank" rel="noopener noreferrer">
              <svg strokeLinejoin="round" viewBox="0 0 22 16">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.5 2.25H2.5C1.80964 2.25 1.25 2.80964 1.25 3.5V12.5C1.25 13.1904 1.80964 13.75 2.5 13.75H19.5C20.1904 13.75 20.75 13.1904 20.75 12.5V3.5C20.75 2.80964 20.1904 2.25 19.5 2.25ZM2.5 1C1.11929 1 0 2.11929 0 3.5V12.5C0 13.8807 1.11929 15 2.5 15H19.5C20.8807 15 22 13.8807 22 12.5V3.5C22 2.11929 20.8807 1 19.5 1H2.5ZM3 4.5H4H4.25H4.6899L4.98715 4.82428L7 7.02011L9.01285 4.82428L9.3101 4.5H9.75H10H11V5.5V11.5H9V7.79807L7.73715 9.17572L7 9.97989L6.26285 9.17572L5 7.79807V11.5H3V5.5V4.5ZM15 8V4.5H17V8H19.5L17 10.5L16 11.5L15 10.5L12.5 8H15Z"
                  fill="currentColor"
                />
              </svg>
              View as Markdown
            </MenuItem>
            <MenuSeparator />
            <MenuItem
              href={getPromptUrl("https://grok.com", fullUrl)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                fill="currentColor"
                fillRule="evenodd"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Grok</title>
                <path d="M9.27 15.29l7.978-5.897c.391-.29.95-.177 1.137.272.98 2.369.542 5.215-1.41 7.169-1.951 1.954-4.667 2.382-7.149 1.406l-2.711 1.257c3.889 2.661 8.611 2.003 11.562-.953 2.341-2.344 3.066-5.539 2.388-8.42l.006.007c-.983-4.232.242-5.924 2.75-9.383.06-.082.12-.164.179-.248l-3.301 3.305v-.01L9.267 15.292M7.623 16.723c-2.792-2.67-2.31-6.801.071-9.184 1.761-1.763 4.647-2.483 7.166-1.425l2.705-1.25a7.808 7.808 0 00-1.829-1A8.975 8.975 0 005.984 5.83c-2.533 2.536-3.33 6.436-1.962 9.764 1.022 2.487-.653 4.246-2.34 6.022-.599.63-1.199 1.259-1.682 1.925l7.62-6.815" />
              </svg>
              Open in Grok
            </MenuItem>
            <MenuItem
              href={getPromptUrl("https://chatgpt.com", fullUrl)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5Z"
                  fill="currentColor"
                />
              </svg>
              Open in ChatGPT
            </MenuItem>
            <MenuItem href={getPerplexityUrl(llmUrl)} target="_blank" rel="noopener noreferrer">
              <svg
                fill="currentColor"
                fillRule="evenodd"
                height="1em"
                style={{ flex: "none", lineHeight: 1 }}
                viewBox="0 0 24 24"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Perplexity</title>
                <path d="M19.785 0v7.272H22.5V17.62h-2.935V24l-7.037-6.194v6.145h-1.091v-6.152L4.392 24v-6.465H1.5V7.188h2.884V0l7.053 6.494V.19h1.09v6.49L19.786 0zm-7.257 9.044v7.319l5.946 5.234V14.44l-5.946-5.397zm-1.099-.08l-5.946 5.398v7.235l5.946-5.234V8.965zm8.136 7.58h1.844V8.349H13.46l6.105 5.54v2.655zm-8.982-8.28H2.59v8.195h1.8v-2.576l6.192-5.62zM5.475 2.476v4.71h5.115l-5.115-4.71zm13.219 0l-5.115 4.71h5.115v-4.71z" />
              </svg>
              Open in Perplexity
            </MenuItem>
            <MenuItem
              href={getPromptUrl("https://t3.chat/new", fullUrl)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Avatar
                className="-ml-0.5 [--avatar-size:--spacing(4.2)]!"
                src="https://t3.chat/favicon.ico?favicon.71cdc391.ico"
              />
              Open in T3 chat
            </MenuItem>
            <MenuItem
              href={getPromptUrl("https://claude.ai/new", fullUrl)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="m4.714 15.956 4.718-2.648.079-.23-.08-.128h-.23l-.79-.048-2.695-.073-2.337-.097-2.265-.122-.57-.121-.535-.704.055-.353.48-.321.685.06 1.518.104 2.277.157 1.651.098 2.447.255h.389l.054-.158-.133-.097-.103-.098-2.356-1.596-2.55-1.688-1.336-.972-.722-.491L2 6.223l-.158-1.008.655-.722.88.06.225.061.893.686 1.906 1.476 2.49 1.833.364.304.146-.104.018-.072-.164-.274-1.354-2.446-1.445-2.49-.644-1.032-.17-.619a2.972 2.972 0 0 1-.103-.729L6.287.133 6.7 0l.995.134.42.364.619 1.415L9.735 4.14l1.555 3.03.455.898.243.832.09.255h.159V9.01l.127-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.583.28.48.685-.067.444-.286 1.851-.558 2.903-.365 1.942h.213l.243-.242.983-1.306 1.652-2.064.728-.82.85-.904.547-.431h1.032l.759 1.129-.34 1.166-1.063 1.347-.88 1.142-1.263 1.7-.79 1.36.074.11.188-.02 2.853-.606 1.542-.28 1.84-.315.832.388.09.395-.327.807-1.967.486-2.307.462-3.436.813-.043.03.049.061 1.548.146.662.036h1.62l3.018.225.79.522.473.638-.08.485-1.213.62-1.64-.389-3.825-.91-1.31-.329h-.183v.11l1.093 1.068 2.003 1.81 2.508 2.33.127.578-.321.455-.34-.049-2.204-1.657-.85-.747-1.925-1.62h-.127v.17l.443.649 2.343 3.521.122 1.08-.17.353-.607.213-.668-.122-1.372-1.924-1.415-2.168-1.141-1.943-.14.08-.674 7.254-.316.37-.728.28-.607-.461-.322-.747.322-1.476.388-1.924.316-1.53.285-1.9.17-.632-.012-.042-.14.018-1.432 1.967-2.18 2.945-1.724 1.845-.413.164-.716-.37.066-.662.401-.589 2.386-3.036 1.439-1.882.929-1.086-.006-.158h-.055L4.138 18.56l-1.13.146-.485-.456.06-.746.231-.243 1.907-1.312Z"
                  fill="#d97757"
                />
              </svg>
              Open in Claude
            </MenuItem>
            <MenuItem
              href={`${app.repo.url}/blob/${app.repo.currentVersion}/src/content${url}.mdx`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BrandGithubIcon />
              Open in Github
            </MenuItem>
          </MenuContent>
        </Menu>
      </ButtonGroup>

      <MobilePager tree={tree} url={url} />
    </div>
  )
}
