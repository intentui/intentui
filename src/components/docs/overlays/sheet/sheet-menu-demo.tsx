"use client"

import { useState } from "react"

import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Menu } from "@/components/ui/menu"
import { Modal } from "@/components/ui/modal"
import { Select } from "@/components/ui/select"
import { Sheet } from "@/components/ui/sheet"
import { TextField } from "@/components/ui/text-field"
import {
  IconBook,
  IconBrandCopilot,
  IconBrandGithub,
  IconGear,
  IconHeart,
  IconLogout,
  IconMessageDots,
  IconPerson,
  IconStar,
} from "@intentui/icons"
import { Menu as MenuPrimitive } from "react-aria-components"

export default function SheetMenuDemo() {
  const [isOpen, setIsOpen] = useState(false)
  const closeModal = () => setIsOpen(false)
  return (
    <>
      <Modal.Content isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Header>
          <Modal.Title>Edit status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            <TextField
              prefix={<IconBrandGithub />}
              label="Status"
              placeholder="What's your status?"
            />
            <Select label="Clear Status">
              <Select.Trigger />
              <Select.List>
                <Select.Option>Never</Select.Option>
                <Select.Option>in 30 Minutes</Select.Option>
                <Select.Option>in 1 Hour</Select.Option>
                <Select.Option>in 8 Hours</Select.Option>
                <Select.Option>after Today</Select.Option>
                <Select.Option>after a Week</Select.Option>
                <Select.Option>after a Month</Select.Option>
              </Select.List>
            </Select>
            <Select label="Visible to">
              <Select.Trigger />
              <Select.List>
                <Select.Option>Everyone</Select.Option>
                <Select.Option>Organization</Select.Option>
                <Select.Option>Public</Select.Option>
              </Select.List>
            </Select>
            <Checkbox
              label="Busy"
              description="When others mention you, assign you, or request your review, GitHub will let them know that you have limited availability."
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Close>Clear Status</Modal.Close>
          <Button onPress={closeModal}>Set Status</Button>
        </Modal.Footer>
      </Modal.Content>
      <Sheet>
        <Sheet.Trigger aria-label="Open menu">
          <Avatar src="/images/avatar/cobain.jpg" alt="irsyadadl" />
        </Sheet.Trigger>
        <Sheet.Content isFloat={false} closeButton={false}>
          <Sheet.Header className="flex flex-row gap-x-3.5 border-b sm:gap-x-3 sm:px-4 sm:pt-3 sm:pb-2">
            <Avatar src="/images/avatar/cobain.jpg" shape="square" alt="cobain" />
            <div>
              <Sheet.Title className="text-base/4 sm:text-base/4">Kurt Cobain</Sheet.Title>
              <Sheet.Description>@cobain</Sheet.Description>
            </div>
          </Sheet.Header>
          <Sheet.Body className="px-0 sm:px-0">
            <MenuPrimitive className="divide-y *:[[role=group]]:p-2">
              <Menu.Section>
                <Menu.Item>
                  <IconPerson />
                  <Menu.Label>Your profile</Menu.Label>
                </Menu.Item>
                <Menu.Item>
                  <IconBook /> <Menu.Label>Your repositories</Menu.Label>
                </Menu.Item>
                <Menu.Item>
                  <IconBrandCopilot /> <Menu.Label>Copilot</Menu.Label>
                </Menu.Item>
                <Menu.Item>
                  <Menu.Label>Your projects</Menu.Label>
                </Menu.Item>
                <Menu.Item>
                  <IconStar /> <Menu.Label>Your stars</Menu.Label>
                </Menu.Item>
                <Menu.Item>
                  <Menu.Label>Your gists</Menu.Label>
                </Menu.Item>
                <Menu.Item>
                  <Menu.Label>Your organizations</Menu.Label>
                </Menu.Item>
                <Menu.Item>
                  <Menu.Label>Your enterprises</Menu.Label>
                </Menu.Item>
                <Menu.Item>
                  <IconHeart />
                  <Menu.Label>Your sponsors</Menu.Label>
                </Menu.Item>
              </Menu.Section>
              <Menu.Section>
                <Menu.Item>
                  <Menu.Label>Feature preview</Menu.Label>
                </Menu.Item>
                <Menu.Item>
                  <IconGear />
                  <Menu.Label>Settings</Menu.Label>
                </Menu.Item>
              </Menu.Section>
              <Menu.Section>
                <Menu.Item>
                  <Menu.Label>GitHub Docs</Menu.Label>
                </Menu.Item>
                <Menu.Item>
                  <Menu.Label>GitHub Support</Menu.Label>
                </Menu.Item>
                <Menu.Item>
                  <IconMessageDots /> <Menu.Label>GitHub Community</Menu.Label>
                </Menu.Item>
              </Menu.Section>
            </MenuPrimitive>
          </Sheet.Body>
          <Sheet.Footer className="border-t bg-muted/20 sm:p-4">
            <Button size="small" className="w-full justify-between bg-bg" intent="outline">
              <span>Sign out</span>
              <IconLogout />
            </Button>
          </Sheet.Footer>
        </Sheet.Content>
      </Sheet>
    </>
  )
}
