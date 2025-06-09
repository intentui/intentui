"use client"

import {
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
  DisclosureTrigger,
} from "@/components/ui/disclosure"
import {
  IconArchive,
  IconChartTrending,
  IconCheck,
  IconChevronRight,
  IconCircleCheck,
  IconGiroCard,
  IconHighlight,
  IconMacbookAir,
  IconPencilBox,
  IconRobot,
  IconService,
  IconShieldCheck,
  IconWhiteboard,
} from "@intentui/icons"

export default function DisclosureGroupWithIconDemo() {
  return (
    <DisclosureGroup
      className="rounded-xl border **:data-[slot=disclosure]:last:border-b-0"
      defaultExpandedKeys={[1]}
    >
      {items.map((item, index) => (
        <Disclosure key={index} id={index}>
          <DisclosureTrigger className="px-4">
            <item.icon /> {item.title}
          </DisclosureTrigger>
          <DisclosurePanel className="bg-muted">
            <DisclosureGroup allowsMultipleExpanded>
              {item.children.map((child, childIndex) => (
                <Disclosure key={childIndex} id={childIndex}>
                  <DisclosureTrigger className="group">
                    <span>
                      <IconChevronRight className="size-5 duration-300 group-aria-expanded:rotate-90" />
                      <child.icon />
                      {child.title}
                    </span>
                  </DisclosureTrigger>
                  <DisclosurePanel>{child.description}</DisclosurePanel>
                </Disclosure>
              ))}
            </DisclosureGroup>
          </DisclosurePanel>
        </Disclosure>
      ))}
    </DisclosureGroup>
  )
}

const items = [
  {
    id: 1,
    icon: IconMacbookAir,
    title: "Computer Science Department",
    description: "Explore our cutting-edge programs in computer science and technology.",
    children: [
      {
        id: 101,
        icon: IconRobot,
        title: "Artificial Intelligence",
        description: "Courses on machine learning, neural networks, and deep learning.",
      },
      {
        id: 102,
        icon: IconShieldCheck,
        title: "Cybersecurity",
        description: "Programs focused on protecting information and systems.",
      },
      {
        id: 103,
        icon: IconService,
        title: "Software Engineering",
        description: "Learn best practices for designing and building software.",
      },
    ],
  },
  {
    id: 2,
    icon: IconGiroCard,
    title: "Business Administration Department",
    description: "Develop skills in management, finance, and entrepreneurship.",
    children: [
      {
        id: 201,
        icon: IconWhiteboard,
        title: "Marketing Strategies",
        description: "Courses on digital marketing and customer engagement.",
      },
      {
        id: 202,
        icon: IconChartTrending,
        title: "Financial Analysis",
        description: "Learn techniques for financial decision-making and planning.",
      },
      {
        id: 203,
        icon: IconCircleCheck,
        title: "Entrepreneurship",
        description: "Develop your business ideas and startup skills.",
      },
    ],
  },
  {
    id: 3,
    icon: IconPencilBox,
    title: "Arts & Humanities Department",
    description: "Dive into creativity and the study of human culture.",
    children: [
      {
        id: 301,
        icon: IconHighlight,
        title: "Creative Writing",
        description: "Programs for aspiring authors and poets.",
      },
      {
        id: 302,
        icon: IconCheck,
        title: "Philosophy",
        description: "Explore key questions about life, existence, and ethics.",
      },
      {
        id: 303,
        icon: IconArchive,
        title: "Art History",
        description: "Study the evolution and impact of art across cultures.",
      },
    ],
  },
]
