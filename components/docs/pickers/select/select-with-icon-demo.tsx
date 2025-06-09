"use client"

import { IconDeviceDesktop, IconDevicePhone, IconMacbook } from "@intentui/icons"
import { Select } from "ui"

export default function SelectWithIconDemo() {
  return (
    <Select aria-label="Devices" defaultSelectedKey="desktop" placeholder="Select a device">
      <Select.Trigger />
      <Select.List>
        <Select.Option id="desktop" textValue="Desktop">
          <IconDeviceDesktop />
          Desktop
        </Select.Option>
        <Select.Option id="laptop" textValue="Laptop">
          <IconMacbook />
          Laptop
        </Select.Option>
        <Select.Option id="smartphone" textValue="Smartphone">
          <IconDevicePhone />
          Smartphone
        </Select.Option>
      </Select.List>
    </Select>
  )
}
