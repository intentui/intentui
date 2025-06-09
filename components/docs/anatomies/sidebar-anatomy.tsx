import { IconCreditCard, IconShoppingBag } from "@intentui/icons"
import { Sidebar } from "ui"

export default function SidebarAnatomy() {
  return (
    <Sidebar.Provider>
      <Sidebar>
        <Sidebar.Header>
          <Sidebar.Nav isSticky />
        </Sidebar.Header>
        <Sidebar.Content>
          <Sidebar.Section>
            <Sidebar.Item />
            <Sidebar.Item />
          </Sidebar.Section>
          <Sidebar.Section title="Projects">
            <Sidebar.Item icon={IconShoppingBag} />
            <Sidebar.Item icon={IconCreditCard} />
          </Sidebar.Section>
          <Sidebar.Section collapsible title="Team">
            <Sidebar.Item />
          </Sidebar.Section>
        </Sidebar.Content>
        <Sidebar.Footer />
        <Sidebar.Rail />
      </Sidebar>
      <Sidebar.Inset>{/* your main content */}</Sidebar.Inset>
    </Sidebar.Provider>
  )
}
