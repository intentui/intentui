"use client"

import { Label } from "@/components/ui/field"
import { Radio, RadioField, RadioGroup } from "@/components/ui/radio"

export default function RadioGroupOrientationDemo() {
  return (
    <RadioGroup name="pm" orientation="horizontal">
      <Label>Payment method</Label>
      <RadioField value="credit-card">
        <Radio>Credit Card</Radio>
      </RadioField>
      <RadioField value="paypal">
        <Radio>PayPal</Radio>
      </RadioField>
      <RadioField value="apple-pay">
        <Radio>Apple Pay</Radio>
      </RadioField>
      <RadioField value="google-pay">
        <Radio>Google Pay</Radio>
      </RadioField>
      <RadioField value="bank-transfer">
        <Radio>Bank Transfer</Radio>
      </RadioField>
    </RadioGroup>
  )
}
