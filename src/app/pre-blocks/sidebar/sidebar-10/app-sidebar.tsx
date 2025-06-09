"use client"

import { Link } from "@/components/ui/link"
import {
  Sidebar,
  SidebarContent,
  SidebarDisclosure,
  SidebarDisclosureGroup,
  SidebarDisclosurePanel,
  SidebarDisclosureTrigger,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import {
  IconBrandApple,
  IconBulletList,
  IconChartTrending,
  IconCirclePerson,
  IconCreditCard,
  IconGear,
  IconHashtag,
  IconInbox,
  IconMessages,
  IconNotes,
  IconSettings,
  IconShippingBag,
  IconStore,
  IconWhiteboard,
} from "@intentui/icons"

export default function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link
          className="flex items-center gap-x-2 group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center"
          href="/docs/2.x/components/layouts/sidebar"
        >
          <IconBrandApple className="size-5" />
          <SidebarLabel className="font-medium">Apple</SidebarLabel>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarDisclosureGroup defaultExpandedKeys={[1, 2]}>
          {sections.map((section, sectionIndex) => (
            <SidebarDisclosure key={sectionIndex} id={sectionIndex + 1}>
              <SidebarDisclosureTrigger>
                <section.icon />
                <SidebarLabel> {section.label}</SidebarLabel>
              </SidebarDisclosureTrigger>
              <SidebarDisclosurePanel>
                {section.items.map((item, itemIndex) => (
                  <SidebarItem key={itemIndex} href="#">
                    {item.icon && <item.icon />}
                    <SidebarLabel>{item.name}</SidebarLabel>
                  </SidebarItem>
                ))}
              </SidebarDisclosurePanel>
            </SidebarDisclosure>
          ))}
        </SidebarDisclosureGroup>
        <SidebarSeparator />
        <SidebarDisclosureGroup defaultExpandedKeys={[1, 2]}>
          {sections.map((section, sectionIndex) => (
            <SidebarDisclosure key={sectionIndex} id={sectionIndex + 1}>
              <SidebarDisclosureTrigger>
                <section.icon />
                <SidebarLabel> {section.label}</SidebarLabel>
              </SidebarDisclosureTrigger>
              <SidebarDisclosurePanel>
                {section.items.map((item, itemIndex) => (
                  <SidebarItem key={itemIndex} href="#">
                    {item.icon && <item.icon />}
                    <SidebarLabel>{item.name}</SidebarLabel>
                  </SidebarItem>
                ))}
              </SidebarDisclosurePanel>
            </SidebarDisclosure>
          ))}
        </SidebarDisclosureGroup>
      </SidebarContent>
    </Sidebar>
  )
}

const sections = [
  {
    icon: IconNotes,
    label: "Blog",
    items: [
      { href: "#", name: "Articles", icon: IconNotes },
      { href: "#", name: "Tags", icon: IconHashtag },
      { href: "#", name: "Comments", icon: IconMessages },
      { href: "#", name: "Authors" },
      { href: "#", name: "Categories" },
    ],
  },
  {
    icon: IconStore,
    label: "Commerce",
    items: [
      { href: "#", name: "Orders", icon: IconShippingBag },
      { href: "#", name: "Products" },
      { href: "#", name: "Customers" },
      { href: "#", name: "Coupons" },
      { href: "#", name: "Discounts" },
    ],
  },
  {
    icon: IconWhiteboard,
    label: "Analytics",
    items: [
      { href: "#", name: "Engagement", icon: IconChartTrending },
      { href: "#", name: "Reports", icon: IconBulletList },
      { href: "#", name: "Traffic" },
      { href: "#", name: "Conversions" },
      { href: "#", name: "Audience" },
    ],
  },
  {
    icon: IconSettings,
    label: "Settings",
    items: [
      { href: "#", name: "General", icon: IconGear },
      { href: "#", name: "Profile", icon: IconCirclePerson },
      { href: "#", name: "Billing", icon: IconCreditCard },
      { href: "#", name: "Notifications", icon: IconInbox },
      { href: "#", name: "Integrations" },
    ],
  },
]
