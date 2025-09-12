"use client"

import { IconBrandDiscord, IconBrandGithub } from "@intentui/icons"
import { Select } from "@/components/ui/select"

export default function SelectWithIconDemo() {
  return (
    <Select aria-label="Devices" defaultSelectedKey="desktop" placeholder="Select a device">
      <Select.Trigger />
      <Select.Content>
        <Select.Item id="discord" textValue="Discord">
          <IconBrandDiscord />
          <Select.Label>Discord</Select.Label>
        </Select.Item>
        <Select.Separator />
        <Select.Item id="github" textValue="GitHub">
          <IconBrandGithub />
          <Select.Label>GitHub</Select.Label>
        </Select.Item>
        <Select.Item id="gitlab" textValue="GitLab">
          GitLab
        </Select.Item>
      </Select.Content>
    </Select>
  )
}
