'use client'

import { CheckIcon } from '@heroicons/react/20/solid'
import { FaceSmileIcon, ScissorsIcon } from '@heroicons/react/24/outline'
import { Tab, TabList, TabPanel, Tabs } from '@/components/ui/tabs'

export default function TabsIconsDemo() {
  return (
    <Tabs aria-label="Fitness App">
      <TabList>
        <Tab id="w">
          <ScissorsIcon /> Workouts
        </Tab>
        <Tab id="n">
          <FaceSmileIcon /> Nutrition
        </Tab>
        <Tab id="t">
          <CheckIcon /> Tracker
        </Tab>
      </TabList>
      <TabPanel id="w">Workouts</TabPanel>
      <TabPanel id="n">Nutrition</TabPanel>
      <TabPanel id="t">Tracker</TabPanel>
    </Tabs>
  )
}
