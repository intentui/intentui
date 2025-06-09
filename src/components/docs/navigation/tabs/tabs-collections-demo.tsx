"use client"

import { Tabs } from "@/components/ui/tabs"
import { Collection } from "react-aria-components"

const tabs = [
  { id: 1, title: "Overview", content: "This is the overview tab content." },
  { id: 2, title: "Features", content: "Details about the features are listed here." },
  { id: 3, title: "Pricing", content: "Find the pricing information on this tab." },
  { id: 4, title: "Reviews", content: "Read user reviews and ratings here." },
]

export default function TabsCollectionsDemo() {
  return (
    <Tabs aria-label="Project Management">
      <Tabs.List aria-label="Dynamic tabs" items={tabs}>
        {(item) => <Tabs.Tab>{item.title}</Tabs.Tab>}
      </Tabs.List>

      <Collection items={tabs}>
        {(item) => <Tabs.Panel key={item.id}>{item.content}</Tabs.Panel>}
      </Collection>
    </Tabs>
  )
}
