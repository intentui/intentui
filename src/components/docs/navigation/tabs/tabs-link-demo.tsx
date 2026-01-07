"use client"

import { Tab, TabList, Tabs } from "@/components/ui/tabs"

const navs = [
  { url: "/", label: "Home" },
  { url: "https://design.intentui.com/themes", label: "Themes" },
  { url: "/colors", label: "Colors" },
]

export default function TabsLinkDemo() {
  return (
    <Tabs aria-label="Navbar">
      <TabList items={navs}>
        {(item) => (
          <Tab id={item.label} href={item.url}>
            {item.label}
          </Tab>
        )}
      </TabList>
    </Tabs>
  )
}
