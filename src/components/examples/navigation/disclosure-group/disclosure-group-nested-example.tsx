'use client'

import { ChevronRightIcon } from '@heroicons/react/20/solid'
import {
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
  DisclosureTrigger,
} from '@/components/ui/disclosure-group'

export default function DisclosureGroupNestedDemo() {
  return (
    <DisclosureGroup defaultExpandedKeys={[1]}>
      {items.map((item, index) => (
        <Disclosure key={index} id={index}>
          <DisclosureTrigger className="px-4">{item.title}</DisclosureTrigger>
          <DisclosurePanel>
            <DisclosureGroup
              allowsMultipleExpanded
              className="**:data-[slot=disclosure-indicator]:hidden"
            >
              {item.children.map((child, childIndex) => (
                <Disclosure key={childIndex} id={childIndex}>
                  <DisclosureTrigger className="group flex items-center justify-start gap-x-2">
                    <ChevronRightIcon className="size-4 duration-300 group-aria-expanded:rotate-90" />
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
    title: 'Clothing Categories',
    description: 'Explore our wide range of clothing options for every season.',
    children: [
      {
        id: 101,
        title: "Men's Wear",
        description: 'Stylish and comfortable outfits for men.',
      },
      {
        id: 102,
        title: "Women's Wear",
        description: 'Elegant and trendy fashion for women.',
      },
      {
        id: 103,
        title: "Kids' Wear",
        description: 'Colorful and playful clothing for kids.',
      },
    ],
  },
  {
    id: 2,
    title: 'Electronics',
    description: 'Discover the latest in technology and gadgets.',
    children: [
      {
        id: 201,
        title: 'Smartphones',
        description: 'Top brands and the latest models.',
      },
      {
        id: 202,
        title: 'Laptops',
        description: 'High-performance laptops for work and play.',
      },
      {
        id: 203,
        title: 'Accessories',
        description: 'Chargers, cases, and other must-have gadgets.',
      },
    ],
  },
  {
    id: 3,
    title: 'Home & Living',
    description: 'Everything you need to make your house a home.',
    children: [
      {
        id: 301,
        title: 'Furniture',
        description: 'Comfortable and stylish furniture for every room.',
      },
      {
        id: 302,
        title: 'Decor',
        description: 'Beautiful decor items to personalize your space.',
      },
      {
        id: 303,
        title: 'Kitchen Essentials',
        description: 'Practical and modern kitchen tools.',
      },
    ],
  },
]
