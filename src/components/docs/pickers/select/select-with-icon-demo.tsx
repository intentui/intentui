"use client"

import { Select } from "@/components/ui/select"
import { IconBrandDiscord, IconBrandGithub } from "@intentui/icons"

export default function SelectWithIconDemo() {
  return (
    <Select aria-label="Devices" defaultSelectedKey="desktop" placeholder="Select a device">
      <Select.Trigger />
      <Select.List>
        <Select.Option id="discord" textValue="Discord">
          <IconBrandDiscord />
          <Select.Label>Discord</Select.Label>
        </Select.Option>
        <Select.Separator />
        <Select.Option id="github" textValue="GitHub">
          <IconBrandGithub />
          <Select.Label>GitHub</Select.Label>
        </Select.Option>
        <Select.Option id="gitlab" textValue="GitLab">
          GitLab
        </Select.Option>
      </Select.List>
    </Select>
  )
}
