import { Tab, TabList, TabPanel, Tabs } from "@/components/ui/tabs"

export default function TabsAnatomy() {
  return (
    <Tabs aria-label="Recipe App">
      <TabList>
        <Tab id="i">Ingredients</Tab>
        <Tab id="m">Meal Plans</Tab>
      </TabList>
      <TabPanel id="i">Check the list of ingredients needed for your chosen recipes.</TabPanel>
      <TabPanel id="m">Discover curated meal plans to simplify your weekly cooking.</TabPanel>
    </Tabs>
  )
}
