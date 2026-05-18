"use client"

import { BrandDiscordIcon } from "@/components/icons/brand-discord-icon"
import { BrandGithubIcon } from "@/components/icons/brand-github-icon"
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
    <Select aria-label="Devices" defaultValue="desktop" placeholder="Select a device">
      <SelectTrigger />
      <SelectContent>
        <SelectItem id="discord" textValue="Discord">
          <BrandDiscordIcon />
          <SelectLabel>Discord</SelectLabel>
        </SelectItem>
        <SelectSeparator />
        <SelectItem id="github" textValue="GitHub">
          <BrandGithubIcon />
          <SelectLabel>GitHub</SelectLabel>
        </SelectItem>
        <SelectItem id="gitlab" textValue="GitLab">
          GitLab
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
