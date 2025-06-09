import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { Menu } from "@/components/ui/menu"
import { SidebarHeader as Header, SidebarLabel, useSidebar } from "@/components/ui/sidebar"
import {
  IconArrowDownLeft,
  IconArrowDownRight,
  IconArrowLeft,
  IconArrowRight,
  IconArrowShrink,
  IconArrowUp,
  IconArrowUpLeft,
  IconArrowUpRight,
  IconDotsVertical,
  IconFolderFill,
  IconMinus,
} from "@intentui/icons"

export function SidebarHeader() {
  const { toggleSidebar } = useSidebar()
  return (
    <Header className="flex h-12 flex-row items-center justify-between border-b bg-linear-to-b py-0">
      <Link
        className="flex items-center gap-x-2 group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center"
        href="/docs/2.x/components/layouts/sidebar"
      >
        <IconFolderFill className="size-4.5" />
        <SidebarLabel className="font-medium text-sm">intentui.com</SidebarLabel>
      </Link>
      <div className="-mr-2 flex items-center gap-x-0.5 text-muted-fg **:[button]:text-muted-fg **:[button]:hover:text-fg **:[button]:*:data-[slot=icon]:size-3.5">
        <Button className="size-7" size="square-petite" intent="plain" aria-label="Collapse">
          <IconArrowUp />
        </Button>
        <Button className="size-7" size="square-petite" intent="plain" aria-label="Shrink All">
          <IconArrowShrink />
        </Button>
        <Menu>
          <Button className="size-7" size="square-petite" intent="plain" aria-label="Options">
            <IconDotsVertical />
          </Button>
          <Menu.Content className="sm:min-w-56">
            <Menu.Submenu>
              <Menu.Item>Behavior</Menu.Item>
              <Menu.Content defaultSelectedKeys={["2", "3"]}>
                <Menu.Item id="0">Enable Preview Tab</Menu.Item>
                <Menu.Item id="1">Open Files with Single Click</Menu.Item>
                <Menu.Item id="2">Open Directories with Single Click</Menu.Item>
                <Menu.Item id="3">Show Hidden Files</Menu.Item>
                <Menu.Item id="4">Always Select Open Files</Menu.Item>
              </Menu.Content>
            </Menu.Submenu>
            <Menu.Submenu>
              <Menu.Item>Appearance</Menu.Item>
              <Menu.Content defaultSelectedKeys={[2]}>
                <Menu.Item id={1}>Members</Menu.Item>
                <Menu.Item id={2}>Exclude Files</Menu.Item>
                <Menu.Item id={3}>Scratches and Consoles</Menu.Item>
                <Menu.Item id={4}>Files Details</Menu.Item>
                <Menu.Separator />
                <Menu.Item id={5}>File Nesting</Menu.Item>
                <Menu.Separator />
                <Menu.Item id={6}>Customize Tree View</Menu.Item>
              </Menu.Content>
            </Menu.Submenu>
            <Menu.Submenu>
              <Menu.Item>Sort By</Menu.Item>
              <Menu.Content defaultSelectedKeys={[2]}>
                <Menu.Item id={1}>Name</Menu.Item>
                <Menu.Item id={2}>Type</Menu.Item>
                <Menu.Item id={3}>Modified</Menu.Item>
                <Menu.Item id={4}>Folder Always On Top</Menu.Item>
              </Menu.Content>
            </Menu.Submenu>
            <Menu.Item>Edit Scopes...</Menu.Item>
            <Menu.Item>Group Tabs</Menu.Item>
            <Menu.Submenu>
              <Menu.Item>View Mode</Menu.Item>
              <Menu.Content defaultSelectedKeys={[1]}>
                <Menu.Item id={1}>Dock Pinned</Menu.Item>
                <Menu.Item id={2}>Dock Unpinned</Menu.Item>
                <Menu.Item id={3}>Undocked</Menu.Item>
                <Menu.Item id={4}>Float</Menu.Item>
                <Menu.Item id={5}>Window</Menu.Item>
              </Menu.Content>
            </Menu.Submenu>
            <Menu.Submenu>
              <Menu.Item>Move to</Menu.Item>
              <Menu.Content defaultSelectedKeys={[1]}>
                <Menu.Item id={1}>
                  <IconArrowRight />
                  Right
                </Menu.Item>
                <Menu.Item id={2}>
                  <IconArrowLeft />
                  Left
                </Menu.Item>
                <Menu.Separator />
                <Menu.Item id={5}>
                  <IconArrowDownLeft />
                  Bottom Left
                </Menu.Item>
                <Menu.Item id={6}>
                  <IconArrowDownRight />
                  Bottom Right
                </Menu.Item>
                <Menu.Item id={7}>
                  <IconArrowUpLeft />
                  Top Left
                </Menu.Item>
                <Menu.Item id={8}>
                  <IconArrowUpRight />
                  Top Right
                </Menu.Item>
              </Menu.Content>
            </Menu.Submenu>
            <Menu.Submenu>
              <Menu.Item>Resize</Menu.Item>
              <Menu.Content>
                <Menu.Item id={1}>
                  Stretch to Left
                  <Menu.Keyboard keys={"⌃⌥←"} />
                </Menu.Item>
                <Menu.Item id={2}>
                  Stretch to Right
                  <Menu.Keyboard keys={"⌃⌥→"} />
                </Menu.Item>
                <Menu.Item isDisabled id={3}>
                  Stretch to Top
                  <Menu.Keyboard keys={"⌃⌥↑"} />
                </Menu.Item>
                <Menu.Item isDisabled id={4}>
                  Stretch to Bottom
                  <Menu.Keyboard keys={"⌃⌥↓"} />
                </Menu.Item>
                <Menu.Item id={5}>
                  Stretch to Fit
                  <Menu.Keyboard keys={"⌃⌥⌘→"} />
                </Menu.Item>
                <Menu.Item id={5}>
                  Maximize Tool Window
                  <Menu.Keyboard keys={"⌃⌥⌘→"} />
                </Menu.Item>
              </Menu.Content>
            </Menu.Submenu>
            <Menu.Separator />
            <Menu.Item>Remove From Sidebar</Menu.Item>
          </Menu.Content>
        </Menu>
        <Button
          onPress={toggleSidebar}
          className="size-7"
          size="square-petite"
          intent="plain"
          aria-label="Minimize"
        >
          <IconMinus />
        </Button>
      </div>
    </Header>
  )
}
