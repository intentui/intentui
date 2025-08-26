"use client"

import { Tab, TabList, TabPanel, Tabs } from "@/components/ui/tabs"

export default function TabsDemo() {
  return (
    <Tabs aria-label="Recipe App">
      <TabList>
        <Tab id="r">Recipes</Tab>
        <Tab id="i">Ingredients</Tab>
        <Tab id="m">Meal Plans</Tab>
        <Tab id="v">Videos</Tab>
      </TabList>
      <TabPanel id="r">
        Browse through a wide selection of recipes for all occasions and dietary
        preferences.
      </TabPanel>
      <TabPanel id="i">
        Check the list of ingredients needed for your chosen recipes.
      </TabPanel>
      <TabPanel id="m">
        Discover curated meal plans to simplify your weekly cooking.
      </TabPanel>
      <TabPanel id="v">
        Watch cooking videos to learn new techniques and recipes.
      </TabPanel>
    </Tabs>
  )
}
