"use client"

import { Tab, TabList, TabPanel, Tabs } from "@/components/ui/tabs"

export default function TabsOrientationDemo() {
  return (
    <Tabs orientation="vertical" aria-label="E-Learning Platform">
      <TabList>
        <Tab id="c">Courses</Tab>
        <Tab id="e">Exams</Tab>
        <Tab id="g">Grades</Tab>
        <Tab id="f">Forums</Tab>
        <Tab id="p">Profile</Tab>
      </TabList>
      <TabPanel id="c">
        Enroll in courses and access learning materials on various subjects.
      </TabPanel>
      <TabPanel id="e">Take practice exams and quizzes to test your knowledge.</TabPanel>
      <TabPanel id="g">View your grades and track your academic progress.</TabPanel>
      <TabPanel id="f">
        Participate in discussion forums with other students and instructors.
      </TabPanel>
      <TabPanel id="p">
        Update your profile and customize your learning preferences.
      </TabPanel>
    </Tabs>
  )
}
