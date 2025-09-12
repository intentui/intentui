"use client"

import { IconBrandDiscord, IconBrandGithub } from "@intentui/icons"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
} from "@/components/ui/select"

export default function SelectWithIconDemo() {
  return (
    <Select aria-label="Devices" defaultSelectedKey="desktop" placeholder="Select a device">
      <SelectTrigger />
      <SelectContent>
        <SelectItem id="discord" textValue="Discord">
          <IconBrandDiscord />
          <SelectLabel>Discord</SelectLabel>
        </SelectItem>
        <SelectSeparator />
        <SelectItem id="github" textValue="GitHub">
          <IconBrandGithub />
          <SelectLabel>GitHub</SelectLabel>
        </SelectItem>
        <SelectItem id="gitlab" textValue="GitLab">
          GitLab
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
