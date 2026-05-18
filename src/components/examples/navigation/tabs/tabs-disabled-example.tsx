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
      <TabPanel id="o">Overview</TabPanel>
      <TabPanel id="c">Contact</TabPanel>
      <TabPanel id="a">About Us</TabPanel>
    </Tabs>
  )
}
