'use client'

import { Description, Label } from '@/components/ui/field'
import { Radio, RadioField, RadioGroup } from '@/components/ui/radio'

export default function RadioGroupDescriptionDemo() {
  return (
    <RadioGroup name="prefs" defaultValue="sms">
      <Label>Notification Preference</Label>
      <Description>Choose how you'd like to receive notifications.</Description>

      <RadioField value="email">
        <Radio>Email</Radio>
        <Description>Get updates via email instantly.</Description>
      </RadioField>
      <RadioField value="sms">
        <Radio>SMS</Radio>
        <Description>Receive alerts through text messages.</Description>
      </RadioField>
      <RadioField value="push">
        <Radio>Push Notification</Radio>
        <Description>Get notified on your device.</Description>
      </RadioField>
      <RadioField value="none">
        <Radio>Do not disturb</Radio>
        <Description>Turn off all notifications.</Description>
      </RadioField>
    </RadioGroup>
  )
}
