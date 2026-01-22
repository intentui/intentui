"use client"

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import { PageContainer } from "@/components/page-container"
import { CardHeader } from "@/components/ui/card"
import {
  ChoiceBox,
  ChoiceBoxDescription,
  ChoiceBoxItem,
  ChoiceBoxLabel,
} from "@/components/ui/choice-box"

export function Cta() {
  return (
    <div className="py-6 sm:py-12">
      <PageContainer>
        <CardHeader
          className="mb-6 max-w-lg"
          title="Ready to get started?"
          description="Explore the core essentials to help you install, build, and start customizing your project with Intent UI in just a few steps."
        />
        <ChoiceBox
          className="*:hover:bg-muted"
          aria-label="Get started"
          selectionMode="none"
          gap={2}
          columns={4}
        >
          <ChoiceBoxItem href="/docs/getting-started/installation" textValue="install">
            <ChoiceBoxLabel>Setup</ChoiceBoxLabel>
            <ChoiceBoxDescription>
              Follow a simple step-by-step guide to install and start building with Intent UI.
            </ChoiceBoxDescription>
          </ChoiceBoxItem>
          <ChoiceBoxItem href="/components" textValue="components">
            <ChoiceBoxLabel>View components</ChoiceBoxLabel>
            <ChoiceBoxDescription>
              Browse all available UI components with detailed examples and usage guidance.
            </ChoiceBoxDescription>
          </ChoiceBoxItem>
          <ChoiceBoxItem href="/blocks" textValue="blocks">
            <ChoiceBoxLabel>View blocks</ChoiceBoxLabel>
            <ChoiceBoxDescription>
              Pre-built application blocks with sidebars, navigation, authentication layouts and
              more.
            </ChoiceBoxDescription>
          </ChoiceBoxItem>
          <ChoiceBoxItem
            className="relative"
            href="https://design.intentui.com/themes"
            target="_blank"
            textValue="themes"
          >
            <ChoiceBoxLabel>Themes</ChoiceBoxLabel>
            <ArrowTopRightOnSquareIcon
              data-slot="arrow"
              className="absolute top-4 right-4 size-4"
            />
            <ChoiceBoxDescription>
              Customize the entire look and feel using built-in themes and styling options.
            </ChoiceBoxDescription>
          </ChoiceBoxItem>
        </ChoiceBox>
      </PageContainer>
    </div>
  )
}
