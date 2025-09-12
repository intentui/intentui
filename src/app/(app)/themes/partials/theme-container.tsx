"use client"

import {
  IconBrandCss,
  IconChevronLgDown,
  IconDuplicate,
  IconLayoutColumnRightsideFill,
} from "@intentui/icons"
import { Suspense, useState } from "react"
import { toast } from "sonner"
import { Blocks } from "@/app/(app)/themes/partials/blocks"
import { GeneratedTheme } from "@/app/(app)/themes/partials/generated-theme"
import { ThemeCustomizer } from "@/app/(app)/themes/partials/theme-customizer"
import { CodeHighlighter } from "@/components/code/code-highlighter"
import { PageContainer } from "@/components/page-container"
import { Button } from "@/components/ui/button"
import { CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Menu, MenuContent, MenuItem } from "@/components/ui/menu"
import {
  SheetBody,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
} from "@/components/ui/sheet"
import { generateTheme } from "./themes"

export function ThemeContainer() {
  const [selectedColors, setSelectedColors] = useState({
    primary: "blue",
    gray: "zinc",
    accent: "zinc",
    radius: "0.5rem",
  })

  const copy = () => {
    navigator.clipboard.writeText(generateTheme(selectedColors))
    toast("Copied to clipboard.")
  }

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <PageContainer className="pb-16">
        <div className="flex flex-col divide-y rounded-lg border lg:flex-row lg:divide-x lg:divide-y-0">
          <div className="w-full p-4 lg:w-1/2 lg:p-6">
            <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:mb-6">
              <CardHeader>
                <CardTitle>Theme customizer</CardTitle>
                <CardDescription>
                  Customize your theme by selecting colors from the color picker or by entering a
                  hex code.
                </CardDescription>
              </CardHeader>
            </div>
            <div>
              <ThemeCustomizer {...{ selectedColors, setSelectedColors }} />
              <div className="mt-3 flex justify-end">
                <Button className="flex w-full lg:hidden" onPress={handleOpen}>
                  <IconBrandCss />
                  Get theme
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full px-4 pt-2 pb-4 lg:w-2/3 lg:p-6">
            <CardHeader className="mb-4">
              <CardTitle>Generated theme</CardTitle>
              <CardDescription>
                The generated colors are based on the selected gray color.
              </CardDescription>
              <CardAction className="hidden lg:inline-flex">
                <Menu>
                  <Button>
                    Get theme
                    <IconChevronLgDown />
                  </Button>
                  <MenuContent placement="bottom right" className="min-w-(--trigger-width)">
                    <MenuItem onAction={copy}>
                      <IconDuplicate />
                      Copy
                    </MenuItem>
                    <MenuItem onAction={handleOpen}>
                      <IconLayoutColumnRightsideFill />
                      Show theme
                    </MenuItem>
                  </MenuContent>
                </Menu>
              </CardAction>
            </CardHeader>
            <GeneratedTheme />
          </div>
        </div>

        <Blocks />
        <Suspense fallback={<div>Loading...</div>}>
          <style>{generateTheme(selectedColors)}</style>
        </Suspense>
      </PageContainer>

      <SheetContent
        onOpenChange={setOpen}
        isOpen={open}
        className="bg-shiki-bg sm:max-w-md"
        side="right"
      >
        <SheetHeader
          title="Theme"
          description="Copy the theme below and paste it into your CSS file."
        />
        <SheetBody className="border-y pb-4">
          <CodeHighlighter
            plain
            max96={false}
            className="pt-4"
            code={generateTheme(selectedColors)}
          />
        </SheetBody>
        <SheetFooter className="gap-x-1">
          <SheetClose onPress={handleClose} className="hidden sm:flex">
            Close
          </SheetClose>
          <Button
            onPress={() => {
              copy()
              handleClose()
            }}
          >
            <IconDuplicate />
            Copy
          </Button>
        </SheetFooter>
      </SheetContent>
    </>
  )
}
