import { Tabs } from "@/components/ui/tabs"

export default function TabsAnatomy() {
  return (
    <Tabs aria-label="Recipe App">
      <Tabs.List>
        <Tabs.Tab id="i">Ingredients</Tabs.Tab>
        <Tabs.Tab id="m">Meal Plans</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel id="i">Check the list of ingredients needed for your chosen recipes.</Tabs.Panel>
      <Tabs.Panel id="m">Discover curated meal plans to simplify your weekly cooking.</Tabs.Panel>
    </Tabs>
  )
}
