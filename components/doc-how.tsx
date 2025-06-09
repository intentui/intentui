"use client"

import * as React from "react"

import { previews } from "@/components/docs/generated/previews"
import jsonPreviews from "@/components/docs/generated/previews.json"
import { Code } from "@/components/docs/rehype/code"
import { cn } from "@/resources/lib/utils"
import { IconFullscreen } from "@intentui/icons"
import { LayoutGroup, motion } from "motion/react"
import { composeRenderProps, Tab as TabPrimitive, type TabProps } from "react-aria-components"
import { twJoin } from "tailwind-merge"
import { tv } from "tailwind-variants"
import { Loader, Tabs } from "ui"

interface HowProps extends React.HTMLAttributes<HTMLDivElement> {
  toUse: string
  minW72?: boolean
  description?: string
  isCenter?: boolean
  className?: string
  withNoPadding?: boolean
  fullscreenUrl?: string
}

export function DocHow({
  toUse,
  className,
  minW72 = false,
  isCenter = true,
  withNoPadding = false,
  fullscreenUrl,
  ...props
}: HowProps) {
  const Preview = previews[toUse] ? previews[toUse].component : null

  // @ts-ignore
  let codeString = jsonPreviews[toUse].raw ?? ""

  codeString = codeString.replace(/function\s+\w+\s*\(/g, "function App(")
  const divProps = { ...props } as React.HTMLProps<HTMLDivElement>
  return (
    <div className={cn("not-prose forced-color-adjust-non relative my-4", className)} {...divProps}>
      <Tabs aria-label="Packages">
        <TabsList fullscreenUrl={fullscreenUrl} />
        <Tabs.Panel className="w-full" id="preview">
          <div
            className={cn(
              !withNoPadding && "relative gap-4 rounded-lg border bg-overlay p-6",
              isCenter &&
                "flex min-h-56 lg:min-h-80 items-center justify-center py-6 preview sm:py-24",
              "overflow-x-auto"
            )}
          >
            <React.Suspense
              fallback={
                <div className="flex py-6 justify-center items-center text-sm text-muted-foreground">
                  <Loader variant="spin" />
                  <span className="sr-only">Loading...</span>
                </div>
              }
            >
              <div className={cn(minW72 && "min-w-72", "not-prose", className)}>
                <Preview />
              </div>
            </React.Suspense>
          </div>
        </Tabs.Panel>
        <Tabs.Panel id="code">
          <Code
            className="border [&_pre_span[data-line]:last-of-type]:hidden [&_pre]:!border-0 border-zinc-800 bg-[#0e0e10] rounded-lg"
            code={codeString}
          />
        </Tabs.Panel>
      </Tabs>
    </div>
  )
}

const tabStyles = tv({
  base: [
    "relative flex whitespace-nowrap cursor-default items-center rounded-full text-sm font-medium outline-none transition forced-color-adjust-none hover:text-fg [&>[data-slot=icon]]:size-4 [&>[data-slot=icon]]:mr-2",
    "group-orientation-vertical:w-full group-orientation-vertical:py-0 group-orientation-vertical:pl-4 group-orientation-vertical:pr-2",
    "group-orientation-horizontal:pb-3"
  ],
  variants: {
    isSelected: {
      false: "text-muted-fg forced-colors:text-[Gray] forced-colors:hover:text-[MenuText]",
      true: "text-fg forced-colors:text-[MenuText] forced-colors:hover:text-[MenuText]"
    },
    isFocused: { false: "ring-0", true: "text-fg forced-colors:text-[MenuText]" },
    isDisabled: {
      true: "text-muted-fg/50 forced-colors:text-[GrayText] forced-colors:selected:bg-[GrayText] forced-colors:selected:text-[HighlightText]"
    }
  }
})

const Tab = ({ children, ...props }: TabProps) => {
  return (
    <TabPrimitive
      {...props}
      className={composeRenderProps(props.className, (_className, renderProps) =>
        tabStyles({
          ...renderProps,
          className: twJoin("href" in props && "cursor-pointer", _className)
        })
      )}
    >
      {({ isSelected }) => (
        <>
          {children as React.ReactNode}
          {isSelected && (
            <motion.span
              layoutId="current_indicator"
              transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              className={cn(
                "absolute rounded bg-fg forced-colors:bg-[ActiveBorder]",
                "group-orientation-horizontal:inset-x-0 group-orientation-horizontal:-bottom-px group-orientation-horizontal:h-0.5 group-orientation-horizontal:w-full group-orientation-vertical:left-0 group-orientation-vertical:h-[calc(100%-10%)] group-orientation-vertical:w-0.5 group-orientation-vertical:transform"
              )}
            />
          )}
        </>
      )}
    </TabPrimitive>
  )
}

const TabsList = ({ fullscreenUrl }: { fullscreenUrl?: string }) => {
  const id = React.useId()
  return (
    <div>
      <LayoutGroup id={id}>
        <Tabs.List>
          <Tab id="preview">Preview</Tab>
          <Tab id="code">Code</Tab>
          {fullscreenUrl && (
            <Tab className="ml-auto flex items-center" target="_blank" href={fullscreenUrl}>
              <IconFullscreen />
              Fullscreen
            </Tab>
          )}
        </Tabs.List>
      </LayoutGroup>
    </div>
  )
}
