"use client"

import { ChevronRightIcon } from "@heroicons/react/20/solid"
import {
  ArchiveBoxIcon,
  ArrowTrendingUpIcon,
  CheckCircleIcon,
  CheckIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  CreditCardIcon,
  PencilSquareIcon,
  PresentationChartBarIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline"
import {
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
  DisclosureTrigger,
} from "@/components/ui/disclosure-group"

export default function DisclosureGroupWithIconDemo() {
  return (
    <DisclosureGroup defaultExpandedKeys={[1]}>
      {items.map((item, index) => (
        <Disclosure key={index} id={index}>
          <DisclosureTrigger>
            <span className="flex items-center gap-x-2">
              <item.icon /> {item.title}
            </span>
          </DisclosureTrigger>
          <DisclosurePanel>
            <DisclosureGroup
              className="**:data-[slot=disclosure-indicator]:hidden"
              allowsMultipleExpanded
            >
              {item.children.map((child, childIndex) => (
                <Disclosure key={childIndex} id={childIndex}>
                  <DisclosureTrigger className="group justify-start">
                    <span className="mr-2 flex items-center gap-x-2">
                      <ChevronRightIcon className="size-4 duration-300 group-aria-expanded:rotate-90" />
                      <child.icon />
                    </span>
                    {child.title}
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
    icon: ComputerDesktopIcon,
    title: "Computer Science Department",
    description: "Explore our cutting-edge programs in computer science and technology.",
    children: [
      {
        id: 101,
        icon: CpuChipIcon,
        title: "Artificial Intelligence",
        description: "Courses on machine learning, neural networks, and deep learning.",
      },
      {
        id: 102,
        icon: ShieldCheckIcon,
        title: "Cybersecurity",
        description: "Programs focused on protecting information and systems.",
      },
      {
        id: 103,
        icon: WrenchScrewdriverIcon,
        title: "Software Engineering",
        description: "Learn best practices for designing and building software.",
      },
    ],
  },
  {
    id: 2,
    icon: CreditCardIcon,
    title: "Business administration",
    description: "Develop skills in management, finance, and entrepreneurship.",
    children: [
      {
        id: 201,
        icon: PresentationChartBarIcon,
        title: "Marketing Strategies",
        description: "Courses on digital marketing and customer engagement.",
      },
      {
        id: 202,
        icon: ArrowTrendingUpIcon,
        title: "Financial Analysis",
        description: "Learn techniques for financial decision-making and planning.",
      },
      {
        id: 203,
        icon: CheckCircleIcon,
        title: "Entrepreneurship",
        description: "Develop your business ideas and startup skills.",
      },
    ],
  },
  {
    id: 3,
    icon: PencilSquareIcon,
    title: "Arts & Humanities Department",
    description: "Dive into creativity and the study of human culture.",
    children: [
      {
        id: 301,
        icon: PencilSquareIcon,
        title: "Creative Writing",
        description: "Programs for aspiring authors and poets.",
      },
      {
        id: 302,
        icon: CheckIcon,
        title: "Philosophy",
        description: "Explore key questions about life, existence, and ethics.",
      },
      {
        id: 303,
        icon: ArchiveBoxIcon,
        title: "Art History",
        description: "Study the evolution and impact of art across cultures.",
      },
    ],
  },
]
