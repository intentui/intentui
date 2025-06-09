"use client"

import {
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
  DisclosureTrigger,
} from "@/components/ui/disclosure"

export default function DisclosureGroupDemo() {
  return (
    <DisclosureGroup>
      <Disclosure id={1}>
        <DisclosureTrigger>What is a VPS?</DisclosureTrigger>
        <DisclosurePanel>
          A VPS is a Virtual Private Server, which provides dedicated resources on a server shared
          with other users, offering more control and customization than shared hosting.
        </DisclosurePanel>
      </Disclosure>

      <Disclosure id={2}>
        <DisclosureTrigger>What is cloud hosting?</DisclosureTrigger>
        <DisclosurePanel>
          Cloud hosting utilizes multiple servers to balance load and maximize uptime. Instead of
          being hosted on a single server, your data and resources are spread across multiple
          servers.
        </DisclosurePanel>
      </Disclosure>

      <Disclosure id={3}>
        <DisclosureTrigger>What is shared hosting?</DisclosureTrigger>
        <DisclosurePanel>
          Shared hosting is a type of web hosting where multiple websites share the same server and
          its resources. It's an affordable option, but may have limitations on performance and
          customization.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure id={4}>
        <DisclosureTrigger>What is dedicated hosting?</DisclosureTrigger>
        <DisclosurePanel>
          Dedicated hosting means your website is hosted on a single server exclusively reserved for
          your site. This provides maximum performance and customization, but at a higher cost.
        </DisclosurePanel>
      </Disclosure>
    </DisclosureGroup>
  )
}
