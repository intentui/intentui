"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { CommandMenu } from "@/components/ui/command-menu"

export default function CommandMenuSeparatorDemo() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button intent="outline" onPress={() => setIsOpen(true)}>
        Open
      </Button>
      <CommandMenu isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandMenu.Search placeholder="Quick search..." />
        <CommandMenu.List>
          <CommandMenu.Section>
            <CommandMenu.Item textValue="profile overview" href="#">
              Profile Overview
            </CommandMenu.Item>
            <CommandMenu.Item textValue="profile settings" href="#">
              Profile Settings
            </CommandMenu.Item>
            <CommandMenu.Item textValue="security settings" href="#">
              Security Settings
            </CommandMenu.Item>
            <CommandMenu.Separator />
            <CommandMenu.Item textValue="notification preferences" href="#">
              Notification Preferences
            </CommandMenu.Item>
            <CommandMenu.Item textValue="privacy settings" href="#">
              Privacy Settings
            </CommandMenu.Item>
            <CommandMenu.Separator />

            <CommandMenu.Item textValue="billing information" href="#">
              Billing Information
            </CommandMenu.Item>
            <CommandMenu.Item textValue="subscription plans" href="#">
              Subscription Plans
            </CommandMenu.Item>
            <CommandMenu.Separator />
            <CommandMenu.Item textValue="connected apps" href="#">
              Connected Apps
            </CommandMenu.Item>
          </CommandMenu.Section>
        </CommandMenu.List>
      </CommandMenu>
    </>
  )
}
