"use client"

import { Tabs } from "@/components/ui/tabs"
import { IconApple, IconClock, IconCut } from "@intentui/icons"

export default function TabsIconsDemo() {
  return (
    <Tabs aria-label="Fitness App">
      <Tabs.List>
        <Tabs.Tab id="w">
          <IconCut /> Workouts
        </Tabs.Tab>
        <Tabs.Tab id="n">
          <IconApple /> Nutrition
        </Tabs.Tab>
        <Tabs.Tab id="t">
          <IconClock /> Tracker
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel id="w">
        Find a variety of workout plans tailored to your fitness level and goals.
      </Tabs.Panel>
      <Tabs.Panel id="n">
        Get nutrition tips and meal plans to complement your fitness journey.
      </Tabs.Panel>
      <Tabs.Panel id="t">Track your progress with detailed statistics and analytics.</Tabs.Panel>
    </Tabs>
  )
}
