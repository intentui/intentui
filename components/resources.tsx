"use client"

import {
  IconBrandAstro,
  IconBrandIntentui,
  IconBrandLaravel,
  IconBrandNextjs,
  IconBrandRemix,
  IconHeartFill,
  IconWindowVisitFill
} from "@intentui/icons"
import { Badge, Card, Grid, Heading, Link } from "ui"

const resources = [
  {
    icon: IconBrandNextjs,
    name: "Next.js Starter Kit",
    url: "https://next.intentui.com/",
    description:
      "A Next.js starter kit with Justd installed. You don't need to set up anything, just run clone it and you're good to go!",
    label: "Starter Kit"
  },
  {
    icon: IconBrandLaravel,
    name: "Laravel Starter Kit",
    url: "https://github.com/intentuilabs/inertia.ts",
    description:
      "A Laravel starter kit with Justd installed. It includes a authentication system out of the box.",
    label: "Starter Kit"
  },
  {
    icon: IconBrandRemix,
    name: "Remix Starter Kit",
    url: "https://remix.intentui.com/",
    description: "A Remix starter kit with Justd installed, ready for use in any application.",
    label: "Starter Kit"
  },
  {
    icon: IconBrandAstro,
    name: "Astro Starter Kit",
    url: "https://astro.intentui.com/",
    description: "A Astro starter kit with Justd installed, ready for use in any application.",
    label: "Starter Kit"
  }
]

export function Resources() {
  return (
    <>
      <section id="starter-kit" className="mb-12">
        <Heading level={2} className="mb-6">
          Starter Kit
        </Heading>
        <Grid
          columns={{
            initial: 1,
            sm: 2
          }}
          gap={2}
          aria-label="Resources"
        >
          <Grid.Collection items={resources}>
            {(item) => (
              <Grid.Item
                aria-label={item.name}
                id={item.name.toLowerCase().replaceAll(" ", "-")}
                className="relative focus:outline-none p-4 lg:p-6 h-full flex flex-col w-full focus-visible:outline-none focus-visible:outline-primary rounded-xl bg-tertiary shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline"
              >
                <Link
                  aria-label={`Open ${item.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.url}
                  className="absolute inset-0 size-full"
                />
                <div className="flex-1">
                  <div className="px-6 pt-6">
                    <item.icon className="size-7" />
                  </div>
                  <Card.Header>
                    <Card.Title level={3}>{item.name}</Card.Title>
                    <Card.Description className="line-clamp-2">{item.description}</Card.Description>
                  </Card.Header>
                </div>
                <Card.Footer>
                  <Badge>{item.label}</Badge>
                </Card.Footer>
              </Grid.Item>
            )}
          </Grid.Collection>
        </Grid>
      </section>

      <section id="library" className="mb-12">
        <Heading level={2} className="mb-6">
          Icons
        </Heading>
        <Grid
          columns={{
            initial: 1,
            sm: 2
          }}
          gap={2}
          aria-label="Support"
        >
          <Grid.Item
            aria-label="Justd icons"
            id="@intentui/icons"
            className="relative focus:outline-none p-4 lg:p-6 h-full flex flex-col w-full focus-visible:outline-none focus-visible:outline-primary rounded-xl bg-tertiary shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline"
          >
            <Link
              aria-label={`Justd icons`}
              rel="noopener noreferrer"
              href="/icons"
              className="absolute inset-0 size-full"
            />
            <div className="flex-1">
              <div className="px-6 pt-6">
                <IconBrandIntentui className="size-7" />
              </div>
              <Card.Header>
                <Card.Title level={3}>Icons</Card.Title>
                <Card.Description className="line-clamp-2">
                  A library of beautifully crafted react icons, perfect for enhancing the visual
                  appeal and user experience of your web applications.
                </Card.Description>
              </Card.Header>
            </div>
            <Card.Footer>
              <Badge>justd-icons</Badge>
            </Card.Footer>
          </Grid.Item>
        </Grid>
      </section>
      <section id="support" className="mb-12">
        <Heading level={2} className="mb-6">
          Support
        </Heading>
        <Grid
          columns={{
            initial: 1,
            sm: 2
          }}
          gap={2}
          aria-label="Support"
        >
          <Grid.Item
            aria-label="Support"
            id="support"
            className="relative focus:outline-none p-4 lg:p-6 h-full flex flex-col w-full focus-visible:outline-none focus-visible:outline-primary rounded-xl bg-tertiary shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline"
          >
            <Link
              target="_blank"
              aria-label={`Justd icons`}
              rel="noopener noreferrer"
              href="https://github.com/sponsors/irsyadadl"
              className="absolute inset-0 size-full"
            />
            <div className="flex-1">
              <div className="px-6 pt-6">
                <IconHeartFill className="size-7 text-pink-500" />
              </div>
              <Card.Header>
                <Card.Title level={3}>Support This Project</Card.Title>
                <Card.Description className="line-clamp-2">
                  Join us in building something impactful. Your contributions, whether sharing,
                  coding, or spreading the word, help us grow and make a difference.
                </Card.Description>
              </Card.Header>
            </div>
            <Card.Footer>
              <Badge>support</Badge>
            </Card.Footer>
          </Grid.Item>
          <Grid.Item
            aria-label="Templates"
            id="templates"
            className="relative focus:outline-none p-4 lg:p-6 h-full flex flex-col w-full focus-visible:outline-none focus-visible:outline-primary rounded-xl bg-tertiary shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline"
          >
            <Link
              target="_blank"
              aria-label={`Justd icons`}
              rel="noopener noreferrer"
              href="https://irsyad.co/templates"
              className="absolute inset-0 size-full"
            />
            <div className="flex-1">
              <div className="px-6 pt-6">
                <IconWindowVisitFill className="size-7" />
              </div>
              <Card.Header>
                <Card.Title level={3}>Templates</Card.Title>
                <Card.Description className="line-clamp-2">
                  Looking for beautifully crafted templates to elevate your project? Browse through
                  a collection of designs tailored to meet your needs.
                </Card.Description>
              </Card.Header>
            </div>
            <Card.Footer>
              <Badge>support</Badge>
            </Card.Footer>
          </Grid.Item>
        </Grid>
      </section>
    </>
  )
}
