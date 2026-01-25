"use client"

import type { TabPanelProps, TabsProps } from "react-aria-components"
import { TabsContext, useSlottedContext } from "react-aria-components"
import { Button } from "@/components/ui/button"
import { Tab, TabList, type TabListProps, TabPanel, TabPanels, Tabs } from "@/components/ui/tabs"
import { useClipboard } from "@/hooks/use-clipboard"
import { cx } from "@/lib/primitive"

export const Snippet = ({ className, ...props }: TabsProps) => (
  <Tabs
    className={cx(
      "not-prose group w-full gap-0 overflow-hidden rounded-md border bg-bg",
      className,
    )}
    {...props}
  />
)

export function SnippetTabsList<T extends object>({ className, ...props }: TabListProps<T>) {
  const { orientation } = useSlottedContext(TabsContext)!
  return (
    <TabList
      className={cx(
        orientation === "horizontal" &&
          "flex-row gap-x-(--tab-list-gutter) rounded-(--tab-list-rounded) border-b px-4 py-(--tab-list-gutter)",
        "bg-muted",
        className,
      )}
      {...props}
    />
  )
}

export const SnippetTab = ({ className, ...props }: React.ComponentProps<typeof Tab>) => (
  <Tab className={cx("gap-1.5", className)} {...props} />
)

export const SnippetTabPanels = TabPanels

export function SnippetTabPanel({ className, children, ...props }: TabPanelProps) {
  const { copy, copied } = useClipboard()
  return (
    <TabPanel className={cx("mt-0 px-4 py-2 text-sm dark:bg-secondary/70", className)} {...props}>
      {(values) => (
        <>
          {typeof children === "function" ? (
            <pre className="truncate">{children(values)}</pre>
          ) : (
            <div className="flex items-center justify-between">
              <pre className="truncate">{children}</pre>
              <Button
                className="-me-2"
                size="sq-sm"
                intent="plain"
                onPress={() => {
                  copy(children as string)
                }}
              >
                {copied ? (
                  <>
                    <svg
                      data-slot="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    <span className="sr-only">Copied</span>
                  </>
                ) : (
                  <>
                    <svg
                      data-slot="icon"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.25 5.25H7.25C6.14543 5.25 5.25 6.14543 5.25 7.25V14.25C5.25 15.3546 6.14543 16.25 7.25 16.25H14.25C15.3546 16.25 16.25 15.3546 16.25 14.25V7.25C16.25 6.14543 15.3546 5.25 14.25 5.25Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.80103 11.998L1.77203 5.07397C1.61003 3.98097 2.36403 2.96397 3.45603 2.80197L10.38 1.77297C11.313 1.63397 12.19 2.16297 12.528 3.00097"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="sr-only">Copy to clipboard</span>
                  </>
                )}
              </Button>
            </div>
          )}
        </>
      )}
    </TabPanel>
  )
}
