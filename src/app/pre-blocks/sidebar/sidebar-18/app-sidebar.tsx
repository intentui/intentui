'use client'

import {
  ArchiveBoxIcon,
  BookOpenIcon,
  CircleStackIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CubeIcon,
  FolderIcon,
  PaintBrushIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline'
import { BrandIntentuiIcon } from '@/components/icons/brand-intentui-icon'
import { Link } from '@/components/ui/link'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarLabel,
  SidebarRail,
  SidebarTree,
  SidebarTreeContent,
  SidebarTreeItem,
} from '@/components/ui/sidebar'

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Link
          className="flex items-center gap-x-2 px-1.5 pt-1"
          href="/docs/components/layouts/sidebar"
        >
          <BrandIntentuiIcon className="size-6" />
          <SidebarLabel className="font-medium">
            Intent <span className="text-muted-fg">UI</span>
          </SidebarLabel>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarTree
          aria-label="Documentation"
          defaultExpandedKeys={['components', 'collections', 'layouts']}
        >
          <SidebarTreeItem id="getting-started" textValue="Getting started">
            <SidebarTreeContent>
              <BookOpenIcon />
              <SidebarLabel>Getting started</SidebarLabel>
            </SidebarTreeContent>
            <SidebarTreeItem id="installation" textValue="Installation" href="#installation">
              <SidebarTreeContent>
                <CommandLineIcon />
                <SidebarLabel>Installation</SidebarLabel>
              </SidebarTreeContent>
            </SidebarTreeItem>
            <SidebarTreeItem id="themes" textValue="Themes" href="#themes">
              <SidebarTreeContent>
                <PaintBrushIcon />
                <SidebarLabel>Themes</SidebarLabel>
              </SidebarTreeContent>
            </SidebarTreeItem>
          </SidebarTreeItem>

          <SidebarTreeItem id="components" textValue="Components">
            <SidebarTreeContent>
              <CubeIcon />
              <SidebarLabel>Components</SidebarLabel>
            </SidebarTreeContent>
            <SidebarTreeItem id="collections" textValue="Collections">
              <SidebarTreeContent>
                <CircleStackIcon />
                <SidebarLabel>Collections</SidebarLabel>
              </SidebarTreeContent>
              <SidebarTreeItem id="menu" textValue="Menu" href="#menu">
                <SidebarTreeContent>
                  <SidebarLabel>Menu</SidebarLabel>
                </SidebarTreeContent>
              </SidebarTreeItem>
              <SidebarTreeItem id="table" textValue="Table" href="#table">
                <SidebarTreeContent>
                  <SidebarLabel>Table</SidebarLabel>
                </SidebarTreeContent>
              </SidebarTreeItem>
              <SidebarTreeItem id="tree" textValue="Tree" href="#tree">
                <SidebarTreeContent>
                  <SidebarLabel>Tree</SidebarLabel>
                </SidebarTreeContent>
              </SidebarTreeItem>
            </SidebarTreeItem>
            <SidebarTreeItem id="layouts" textValue="Layouts">
              <SidebarTreeContent>
                <Squares2X2Icon />
                <SidebarLabel>Layouts</SidebarLabel>
              </SidebarTreeContent>
              <SidebarTreeItem id="sidebar" textValue="Sidebar" href="#sidebar">
                <SidebarTreeContent isCurrent>
                  <SidebarLabel>Sidebar</SidebarLabel>
                </SidebarTreeContent>
              </SidebarTreeItem>
            </SidebarTreeItem>
          </SidebarTreeItem>

          <SidebarTreeItem id="resources" textValue="Resources">
            <SidebarTreeContent>
              <FolderIcon />
              <SidebarLabel>Resources</SidebarLabel>
            </SidebarTreeContent>
            <SidebarTreeItem id="blocks" textValue="Blocks" href="#blocks">
              <SidebarTreeContent>
                <ArchiveBoxIcon />
                <SidebarLabel>Blocks</SidebarLabel>
              </SidebarTreeContent>
            </SidebarTreeItem>
            <SidebarTreeItem id="changelog" textValue="Changelog" href="#changelog">
              <SidebarTreeContent>
                <CodeBracketIcon />
                <SidebarLabel>Changelog</SidebarLabel>
              </SidebarTreeContent>
            </SidebarTreeItem>
          </SidebarTreeItem>
        </SidebarTree>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
