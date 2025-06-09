"use client"

import { Tabs } from "@/components/ui/tabs"

export default function TabsOrientationDemo() {
  return (
    <Tabs orientation="vertical" aria-label="E-Learning Platform">
      <Tabs.List>
        <Tabs.Tab id="c">Courses</Tabs.Tab>
        <Tabs.Tab id="e">Exams</Tabs.Tab>
        <Tabs.Tab id="g">Grades</Tabs.Tab>
        <Tabs.Tab id="f">Forums</Tabs.Tab>
        <Tabs.Tab id="p">Profile</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel id="c">
        Enroll in courses and access learning materials on various subjects.
      </Tabs.Panel>
      <Tabs.Panel id="e">Take practice exams and quizzes to test your knowledge.</Tabs.Panel>
      <Tabs.Panel id="g">View your grades and track your academic progress.</Tabs.Panel>
      <Tabs.Panel id="f">
        Participate in discussion forums with other students and instructors.
      </Tabs.Panel>
      <Tabs.Panel id="p">Update your profile and customize your learning preferences.</Tabs.Panel>
    </Tabs>
  )
}
