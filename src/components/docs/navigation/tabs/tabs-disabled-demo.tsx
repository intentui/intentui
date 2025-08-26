"use client"

import { Tab, TabList, TabPanel, Tabs } from "@/components/ui/tabs"

export default function TabsDisabledDemo() {
  return (
    <Tabs disabledKeys={["c", "a"]} aria-label="Services">
      <TabList>
        <Tab id="o">Overview</Tab>
        <Tab id="c">Contact</Tab>
        <Tab id="a">About Us</Tab>
      </TabList>
      <TabPanel id="o">
        Welcome to our service! Here, you’ll find a brief overview of what we offer, our
        mission, and how we strive to provide value to our customers.
      </TabPanel>
      <TabPanel id="c">
        Get in touch with us through our contact page. We are here to help you with any
        inquiries, support requests, or feedback you may have.
      </TabPanel>
      <TabPanel id="a">
        Learn more about our company, our history, and the team behind our success. We are
        dedicated to delivering the best service to our customers.
      </TabPanel>
    </Tabs>
  )
}
