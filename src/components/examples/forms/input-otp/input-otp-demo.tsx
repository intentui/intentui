"use client"

import { Description } from "@/components/ui/field"
import {
  InputOTP,
  InputOTPControl,
  InputOTPGroup,
  InputOTPLabel,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export default function InputOtpDemo() {
  return (
    <div>
      <InputOTP maxLength={6}>
        <InputOTPLabel>Code</InputOTPLabel>
        <InputOTPControl>
          <InputOTPGroup>
            {[...Array(6)].map((_, index) => (
              <InputOTPSlot key={index} index={index} />
            ))}
          </InputOTPGroup>
        </InputOTPControl>
        <Description>Please enter the 6-digit code we sent to your email.</Description>
      </InputOTP>
    </div>
  )
}
