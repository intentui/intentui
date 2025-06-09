"use client"

import { useState } from "react"

import { InputOTP } from "@/components/ui/input-otp"

export default function InputOtpControlledDemo() {
  const [value, setValue] = useState("")
  return (
    <div className="space-y-2">
      <InputOTP maxLength={6} value={value} onChange={setValue}>
        <InputOTP.Group>
          {[...Array(6)].map((_, index) => (
            <InputOTP.Slot key={index} index={index} />
          ))}
        </InputOTP.Group>
      </InputOTP>

      <div className="text-center text-sm">
        {value === "" ? <>Enter your one-time password.</> : <>You entered: {value}</>}
      </div>
    </div>
  )
}
