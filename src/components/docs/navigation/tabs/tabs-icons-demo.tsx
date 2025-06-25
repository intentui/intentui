"use client"

import { Tab, TabList, TabPanel, Tabs } from "@/components/ui/tabs"
import { IconApple, IconClock, IconCut } from "@intentui/icons"

export default function TabsIconsDemo() {
  return (
    <Tabs aria-label="Fitness App">
      <TabList>
        <Tab id="w">
          <IconCut /> Workouts
        </Tab>
        <Tab id="n">
          <IconApple /> Nutrition
        </Tab>
        <Tab id="t">
          <IconClock /> Tracker
        </Tab>
      </TabList>
      <TabPanel id="w">
        Find a variety of workout plans tailored to your fitness level and goals.
      </TabPanel>
      <TabPanel id="n">
        Get nutrition tips and meal plans to complement your fitness journey.
      </TabPanel>
      <TabPanel id="t">Track your progress with detailed statistics and analytics.</TabPanel>
    </Tabs>
  )
}
