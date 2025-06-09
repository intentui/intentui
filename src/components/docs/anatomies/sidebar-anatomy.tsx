import { Menu } from "@/components/ui/menu"
import {
  Sidebar,
  SidebarContent,
  SidebarDisclosure,
  SidebarDisclosureGroup,
  SidebarDisclosurePanel,
  SidebarDisclosureTrigger,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarItem,
  SidebarNav,
  SidebarProvider,
  SidebarRail,
  SidebarSection,
  SidebarSeparator,
} from "@/components/ui/sidebar"

export default function SidebarAnatomy() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader />
        <SidebarContent>
          <SidebarSection>
            <SidebarItem badge="32K" />
            <SidebarItem badge={409} />
            <SidebarItem />
          </SidebarSection>
          <SidebarSeparator />
          <SidebarDisclosureGroup>
            <SidebarDisclosure>
              <SidebarDisclosureTrigger />
              <SidebarDisclosurePanel>
                <SidebarItem />
                <SidebarItem />
              </SidebarDisclosurePanel>
            </SidebarDisclosure>
          </SidebarDisclosureGroup>
        </SidebarContent>
        <SidebarFooter>
          <Menu>
            <Menu.Trigger />
            <Menu.Content>
              <Menu.Section>
                <Menu.Header />
              </Menu.Section>
              <Menu.Item />
              <Menu.Separator />
              <Menu.Item />
            </Menu.Content>
          </Menu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>

      <SidebarInset>
        <SidebarNav />

        <div className="p-6">{/* Your main content */}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
