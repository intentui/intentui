"use client"

import React from "react"

import {
  IconBook,
  IconBookOpen,
  IconBrandCopilot,
  IconBrandGithub,
  IconBuilding,
  IconChartBar,
  IconCodeBrackets,
  IconFilter,
  IconGear,
  IconGlobe,
  IconHeart,
  IconLogout,
  IconMessages,
  IconPeople,
  IconPerson,
  IconStar
} from "@intentui/icons"
import { Group } from "react-aria-components"
import { Avatar, Button, Checkbox, Description, Menu, Modal, Select, Sheet, TextField } from "ui"

export default function SheetMenuDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  const openModal = () => setIsOpen(true)
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
            <Group>
              <Checkbox>Busy</Checkbox>
              <Description>
                When others mention you, assign you, or request your review, GitHub will let them
                know that you have limited availability.
              </Description>
            </Group>
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
              <Select.List>
                <Select.Option>Everyone</Select.Option>
                <Select.Option>Organization</Select.Option>
                <Select.Option>Public</Select.Option>
              </Select.List>
            </Select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Close>Clear Status</Modal.Close>
          <Button onPress={closeModal}>Set Status</Button>
        </Modal.Footer>
      </Modal.Content>
      <Sheet>
        <Sheet.Trigger aria-label="Open menu">
          <Avatar src="https://github.com/irsyadadl.png" alt="irsyadadl" />
        </Sheet.Trigger>
        <Sheet.Content closeButton={false}>
          <Sheet.Header className="flex border-b p-4 sticky top-0 bg-overlay flex-row items-center gap-x-3 mb-2">
            <Avatar src="https://github.com/irsyadadl.png" alt="irsyadadl" />
            <div>
              <Sheet.Title>irsyadadl</Sheet.Title>
              <Sheet.Description>Irsyad A. Panjaitan</Sheet.Description>
            </div>
          </Sheet.Header>
          <Sheet.Body className="px-0 sm:px-0">
            <Menu.Primitive className="divide-y [&_.xss3]:p-2">
              <Menu.Section>
                <Menu.Item onAction={openModal}>
                  <IconBrandGithub />
                  Edit Status
                </Menu.Item>
              </Menu.Section>
              <Menu.Section>
                <Menu.Item>
                  <IconPerson />
                  Your profile
                </Menu.Item>
                <Menu.Item>
                  <IconBook /> Your repositories
                </Menu.Item>
                <Menu.Item>
                  <IconBrandCopilot /> Your Copilot
                </Menu.Item>
                <Menu.Item>
                  <IconChartBar /> Your projects
                </Menu.Item>
                <Menu.Item>
                  <IconStar /> Your stars
                </Menu.Item>
                <Menu.Item>
                  <IconCodeBrackets /> Your gists
                </Menu.Item>
                <Menu.Item>
                  <IconBuilding /> Your organizations
                </Menu.Item>
                <Menu.Item>
                  <IconGlobe /> Your enterprises
                </Menu.Item>
                <Menu.Item>
                  <IconHeart />
                  Your sponsors
                </Menu.Item>
              </Menu.Section>
              <Menu.Section>
                <Menu.Item>
                  <IconFilter /> Feature preview
                </Menu.Item>
                <Menu.Item>
                  <IconGear />
                  Settings
                </Menu.Item>
              </Menu.Section>
              <Menu.Section>
                <Menu.Item>
                  <IconBookOpen /> GitHub Docs
                </Menu.Item>
                <Menu.Item>
                  <IconPeople /> GitHub Support
                </Menu.Item>
                <Menu.Item>
                  <IconMessages /> GitHub Community
                </Menu.Item>
              </Menu.Section>
              <Menu.Section>
                <Menu.Item>
                  <IconLogout /> Sign out
                </Menu.Item>
              </Menu.Section>
            </Menu.Primitive>
          </Sheet.Body>
        </Sheet.Content>
      </Sheet>
    </>
  )
}
