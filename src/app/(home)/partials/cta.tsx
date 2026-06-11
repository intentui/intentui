"use client"

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import { PageContainer } from "@/components/page-container"
import { CardHeader } from "@/components/ui/card"
import { Link } from "@/components/ui/link"
import { Strong, Text } from "@/components/ui/text"

export function Cta() {
  return (
    <>
      <div className="border-page border-y">
        <PageContainer>
          <div className="border-page py-6 sm:border-x sm:p-6">
            <CardHeader
              className="max-w-lg"
              title="Ready to get started?"
              description="Explore the core essentials to help you install, build, and start customizing your project with Intent UI in just a few steps."
            />
          </div>
        </PageContainer>
      </div>
      <PageContainer>
        <div className="grid grid-cols-1 gap-px border-page border-x bg-border/50 *:flex *:flex-col *:gap-y-1 *:bg-bg *:p-6 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            className="shadow-xs hover:bg-muted/50 hover:shadow-none"
            href="/docs/getting-started/installation"
          >
            <Strong>Setup</Strong>
            <Text>
              Follow a simple step-by-step guide to install and start building with Intent UI.
            </Text>
          </Link>
          <Link className="shadow-xs hover:bg-muted/50 hover:shadow-none" href="/components">
            <Strong>View components</Strong>
            <Text>
              Browse all available UI components with detailed examples and usage guidance.
            </Text>
          </Link>
          <Link className="shadow-xs hover:bg-muted/50 hover:shadow-none" href="/blocks">
            <Strong>View blocks</Strong>
            <Text>
              Pre-built application blocks with sidebars, navigation, authentication layouts and
              more.
            </Text>
          </Link>
          <Link
            className="relative shadow-xs hover:bg-muted/50 hover:shadow-none"
            href="https://design.intentui.com/themes"
            target="_blank"
          >
            <Strong>Themes</Strong>
            <ArrowTopRightOnSquareIcon
              data-slot="arrow"
              className="absolute top-4 right-4 size-4"
            />
            <Text>
              Customize the entire look and feel using built-in themes and styling options.
            </Text>
          </Link>
        </div>
      </PageContainer>
    </>
  )
}
