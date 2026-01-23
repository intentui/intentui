"use client"

import {
  ArrowLeftEndOnRectangleIcon,
  Cog6ToothIcon,
  CommandLineIcon,
  LifebuoyIcon,
  MagnifyingGlassIcon,
  MicrophoneIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input, InputGroup } from "@/components/ui/input"
import {
  Menu,
  MenuContent,
  MenuHeader,
  MenuItem,
  MenuSection,
  MenuSeparator,
  MenuTrigger,
} from "@/components/ui/menu"
import { SearchField } from "@/components/ui/search-field"
import { SidebarNav, SidebarTrigger } from "@/components/ui/sidebar"

export default function AppSidebarNav() {
  return (
    <SidebarNav className="flex justify-between border-b-0 sm:mt-2">
      <SidebarTrigger />
      <div className="mx-auto flex items-center gap-x-2 sm:min-w-120">
        <SearchField aria-label="Search" className="w-full">
          <InputGroup>
            <MagnifyingGlassIcon />
            <Input placeholder="Search" />
            <MicrophoneIcon />
          </InputGroup>
        </SearchField>
        <Button size="sq-sm" className="size-10" intent="plain"></Button>
      </div>
      <div>
        <Menu>
          <MenuTrigger aria-label="Open Menu">
            <Avatar alt="cobain" src="https://intentui.com/images/avatar/cobain.jpg" />
          </MenuTrigger>
          <MenuContent placement="bottom" className="sm:min-w-56">
            <MenuSection>
              <MenuHeader separator>
                <span className="block">Kurt Cobain</span>
                <span className="font-normal text-muted-fg">@cobain</span>
              </MenuHeader>
            </MenuSection>

            <MenuItem href="#dashboard">
              <Squares2X2Icon />
              Dashboard
            </MenuItem>
            <MenuItem href="#settings">
              <Cog6ToothIcon />
              Settings
            </MenuItem>
            <MenuSeparator />
            <MenuItem>
              <CommandLineIcon />
              Command Menu
            </MenuItem>
            <MenuSeparator />
            <MenuItem href="#contact-s">
              <LifebuoyIcon />
              Contact Support
            </MenuItem>
            <MenuSeparator />
            <MenuItem href="#logout">
              <ArrowLeftEndOnRectangleIcon />
              Log out
            </MenuItem>
          </MenuContent>
        </Menu>
      </div>
    </SidebarNav>
  )
}
