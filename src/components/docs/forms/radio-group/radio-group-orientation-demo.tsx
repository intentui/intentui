"use client"

import { Radio, RadioGroup } from "@/components/ui/radio"

export default function RadioGroupOrientationDemo() {
  return (
    <RadioGroup orientation="horizontal" label="Payment Method">
      <Radio value="credit-card">Credit Card</Radio>
      <Radio value="paypal">PayPal</Radio>
      <Radio value="apple-pay">Apple Pay</Radio>
      <Radio value="google-pay">Google Pay</Radio>
      <Radio value="bank-transfer">Bank Transfer</Radio>
    </RadioGroup>
  )
}
