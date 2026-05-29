"use client"

import { Description, Label } from "@/components/ui/field"
import { Radio, RadioGroup, RadioLabel } from "@/components/ui/radio"

export default function RadioGroupDescriptionDemo() {
  return (
    <RadioGroup name="prefs" defaultValue="sms">
      <Label>Notification Preference</Label>
      <Description>Choose how you'd like to receive notifications.</Description>

      <Radio value="email">
        <RadioLabel>Email</RadioLabel>
        <Description>Get updates via email instantly.</Description>
      </Radio>
      <Radio value="sms">
        <RadioLabel>SMS</RadioLabel>
        <Description>Receive alerts through text messages.</Description>
      </Radio>
      <Radio value="push">
        <RadioLabel>Push Notification</RadioLabel>
        <Description>Get notified on your device.</Description>
      </Radio>
      <Radio value="none">
        <RadioLabel>Do not disturb</RadioLabel>
        <Description>Turn off all notifications.</Description>
      </Radio>
    </RadioGroup>
  )
}
