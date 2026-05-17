"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  CommandMenu,
  CommandMenuItem,
  CommandMenuList,
  CommandMenuSearch,
  CommandMenuSection,
  CommandMenuSeparator,
} from "@/components/ui/command-menu"

export default function CommandMenuSeparatorDemo() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button intent="outline" onPress={() => setIsOpen(true)}>
        Open
      </Button>
      <CommandMenu isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandMenuSearch placeholder="Quick search..." />
        <CommandMenuList>
          <CommandMenuSection>
            <CommandMenuItem textValue="profile overview" href="#">
              Profile Overview
            </CommandMenuItem>
            <CommandMenuItem textValue="profile settings" href="#">
              Profile Settings
            </CommandMenuItem>
            <CommandMenuItem textValue="security settings" href="#">
              Security Settings
            </CommandMenuItem>
            <CommandMenuSeparator className="my-1" />
            <CommandMenuItem textValue="notification preferences" href="#">
              Notification Preferences
            </CommandMenuItem>
            <CommandMenuItem textValue="privacy settings" href="#">
              Privacy Settings
            </CommandMenuItem>
            <CommandMenuSeparator className="my-1" />

            <CommandMenuItem textValue="billing information" href="#">
              Billing Information
            </CommandMenuItem>
            <CommandMenuItem textValue="subscription plans" href="#">
              Subscription Plans
            </CommandMenuItem>
            <CommandMenuSeparator className="my-1" />
            <CommandMenuItem textValue="connected apps" href="#">
              Connected Apps
            </CommandMenuItem>
          </CommandMenuSection>
        </CommandMenuList>
      </CommandMenu>
    </>
  )
}
