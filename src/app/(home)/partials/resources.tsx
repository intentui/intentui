"use client"

import { PageContainer } from "@/components/page-container"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Heading } from "@/components/ui/heading"
import { Link } from "@/components/ui/link"
import { IconBrandIntentui } from "@intentui/icons"
import { IconWindowVisitFill } from "@intentui/icons"
import { twMerge } from "tailwind-merge"

const resources = [
  {
    name: "Next.js Starter Kit",
    url: "https://github.com/intentuilabs/next.js",
    description:
      "A Next.js starter kit with Intent installed. You don't need to set up anything, just run clone it and you're good to go!",
    label: "Starter Kit",
  },
  {
    name: "Laravel Starter Kit",
    url: "https://github.com/intentuilabs/inertia.ts",
    description:
      "A Laravel starter kit with Intent installed. It includes a authentication system out of the box.",
    label: "Starter Kit",
  },
  {
    name: "Remix Starter Kit",
    url: "https://github.com/intentuilabs/remix",
    description: "A Remix starter kit with Intent installed, ready for use in any application.",
    label: "Starter Kit",
  },
  {
    name: "Astro Starter Kit",
    url: "https://github.com/intentuilabs/astro",
    description: "A Astro starter kit with Intent installed, ready for use in any application.",
    label: "Starter Kit",
  },
  {
    name: "Tanstack Router",
    url: "https://github.com/intentuilabs/tanstack-router",
    description: "Tanstack Router is a powerful and flexible router for React applications.",
    label: "Starter Kit",
  },
  {
    name: "Vite",
    url: "https://github.com/intentuilabs/vite",
    description: "The simple way to start vite with Intent installed.",
    label: "Starter Kit",
  },
]

export function Resources() {
  return (
    <PageContainer>
      <div className="-mx-4 sm:mx-0">
        <section id="starter-kit" className="mb-14">
          <Heading level={2} className="mb-4 px-4 text-2xl sm:px-0 sm:text-2xl">
            Starter Kit
          </Heading>
          <div
            className="grid grid-cols-1 gap-px divide-y border-y p-px sm:grid-cols-3 sm:divide-y-0 sm:border-y-0 sm:bg-border"
            aria-label="Resources"
          >
            {resources.map((item) => (
              <Link
                target="_blank"
                href={item.url}
                className="group relative bg-bg p-4 hover:bg-overlay sm:p-8 lg:p-10"
                aria-label={item.name}
                key={item.name.toLowerCase().replaceAll(" ", "-")}
              >
                <div className="flex">
                  <Card.Header className="flex flex-col gap-y-2">
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Description>{item.description}</Card.Description>
                  </Card.Header>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="extra">
          <div className="mb-4 px-4 sm:px-0">
            <Heading level={2} className="text-2xl sm:text-2xl">
              Intent Blocks
            </Heading>
            <p className="text-muted-fg leading-relaxed lg:text-lg">
              Build your next idea even faster with ready-made blocks & templates.
            </p>
          </div>
          <div
            className="grid grid-cols-1 gap-px divide-y border-y p-px sm:grid-cols-2 sm:divide-y-0 sm:border-y-0 sm:bg-border"
            aria-label="Extra"
          >
            <Link
              className="group relative bg-bg p-4 hover:bg-overlay sm:p-8 lg:p-10"
              target="_blank"
              aria-label={"Intent Blocks"}
              rel="noopener noreferrer"
              href="https://dub.sh/RNMV32k"
            >
              <div className="flex">
                <WrapperIcon>
                  <IconBrandIntentui />
                </WrapperIcon>
                <Card.Header className="flex flex-col gap-y-2">
                  <Card.Title>Intent Blocks</Card.Title>
                  <Card.Description>
                    Pre-designed, ready-to-use React components for seamless integration,
                    customizable and optimized for modern web applications.
                  </Card.Description>
                  <div>
                    <Badge>Premium</Badge>
                  </div>
                </Card.Header>
              </div>
            </Link>
            <Link
              className="group relative bg-bg p-4 hover:bg-overlay sm:p-8 lg:p-10"
              target="_blank"
              aria-label={"Intent icons"}
              rel="noopener noreferrer"
              href="https://blocks.intentui.com/templates"
            >
              <div className="flex">
                <WrapperIcon>
                  <IconWindowVisitFill className="size-6" />
                </WrapperIcon>
                <Card.Header className="flex flex-col gap-y-2">
                  <Card.Title>Templates</Card.Title>
                  <Card.Description>
                    Looking for beautifully crafted templates to elevate your project? Browse
                    through a collection of designs tailored to meet your needs.
                  </Card.Description>
                  <div>
                    <Badge>Premium</Badge>
                  </div>
                </Card.Header>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </PageContainer>
  )
}

export function Wrapper({
  slot = "wrapper-card",
  className,
  ...props
}: React.ComponentProps<"div"> & { slot?: string }) {
  return (
    <div
      data-slot={slot}
      className={twMerge(
        "relative rounded-md border bg-overlay px-4 py-10 sm:px-6 sm:py-8",
        className,
      )}
      {...props}
    />
  )
}

export function WrapperIcon(props: React.ComponentProps<"div">) {
  return (
    <div
      id="support"
      className="inset-ring inset-ring-fg/10 mr-4 grid size-14 shrink-0 place-content-center rounded-full bg-secondary/20 text-xl group-hover:inset-ring-primary/25 group-hover:bg-primary/5 **:group-hover:text-primary **:[svg]:size-6"
      {...props}
    />
  )
}
