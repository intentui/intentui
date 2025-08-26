"use client"

import { PageContainer } from "@/components/page-container"
import { CardHeader } from "@/components/ui/card"
import { Choicebox } from "@/components/ui/choicebox"

export function Cta() {
  return (
    <div className="py-6 sm:py-12">
      <PageContainer>
        <CardHeader
          className="mb-6 max-w-lg"
          title="Ready to get started?"
          description="Explore the core essentials to help you install, build, and start customizing your project with Intent UI in just a few steps."
        />
        <Choicebox aria-label="Get started" selectionMode="single" gap={6} columns={3}>
          <Choicebox.Item href="/docs/getting-started/installation" textValue="install">
            <Choicebox.Label>Setup</Choicebox.Label>
            <Choicebox.Description>
              Follow a simple step-by-step guide to install and start building with Intent
              UI.
            </Choicebox.Description>
          </Choicebox.Item>
          <Choicebox.Item href="/components" textValue="components">
            <Choicebox.Label>View components</Choicebox.Label>
            <Choicebox.Description>
              Browse all available UI components with detailed examples and usage
              guidance.
            </Choicebox.Description>
          </Choicebox.Item>
          <Choicebox.Item href="/themes" textValue="themes">
            <Choicebox.Label>Themes</Choicebox.Label>
            <Choicebox.Description>
              Customize the entire look and feel using built-in themes and styling
              options.
            </Choicebox.Description>
          </Choicebox.Item>
        </Choicebox>
      </PageContainer>
    </div>
  )
}
