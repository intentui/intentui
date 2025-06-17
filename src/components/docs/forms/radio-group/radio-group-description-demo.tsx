"use client"

import { Description, Label } from "@/components/ui/field"
import { Radio, RadioGroup } from "@/components/ui/radio"

export default function RadioGroupDescriptionDemo() {
  return (
    <RadioGroup defaultValue="sms">
      <Label>Notification Preference</Label>
      <Description>Choose how you'd like to receive notifications.</Description>

      <Radio value="email">
        <Label>Email</Label>
        <Description>Get updates via email instantly.</Description>
      </Radio>
      <Radio value="sms">
        <Label>SMS</Label>
        <Description>Receive alerts through text messages.</Description>
      </Radio>
      <Radio value="push">
        <Label>Push Notification</Label>
        <Description>Get notified on your device.</Description>
      </Radio>
      <Radio value="none">
        <Label>Do not disturb</Label>
        <Description>Turn off all notifications.</Description>
      </Radio>
    </RadioGroup>
  )
}
