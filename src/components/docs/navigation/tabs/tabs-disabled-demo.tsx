"use client"

import { Tabs } from "@/components/ui/tabs"

export default function TabsDisabledDemo() {
  return (
    <Tabs disabledKeys={["c", "a"]} aria-label="Services">
      <Tabs.List>
        <Tabs.Tab id="o">Overview</Tabs.Tab>
        <Tabs.Tab id="c">Contact</Tabs.Tab>
        <Tabs.Tab id="a">About Us</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel id="o">
        Welcome to our service! Here, you’ll find a brief overview of what we offer, our mission,
        and how we strive to provide value to our customers.
      </Tabs.Panel>
      <Tabs.Panel id="c">
        Get in touch with us through our contact page. We are here to help you with any inquiries,
        support requests, or feedback you may have.
      </Tabs.Panel>
      <Tabs.Panel id="a">
        Learn more about our company, our history, and the team behind our success. We are dedicated
        to delivering the best service to our customers.
      </Tabs.Panel>
    </Tabs>
  )
}
