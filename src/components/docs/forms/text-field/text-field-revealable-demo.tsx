"use client"

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/field"
import { Input, InputGroup } from "@/components/ui/input"
import { TextField } from "@/components/ui/text-field"

export default function TextFieldRevealableDemo() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible((prevState) => !prevState)
  return (
    <TextField>
      <Label>Password</Label>
      <InputGroup className="[--input-gutter-end:--spacing(12)]">
        <Input placeholder="Your password" type={isVisible ? "text" : "password"} />
        <Button
          intent="secondary"
          aria-pressed={isVisible}
          onPress={toggleVisibility}
          aria-label={isVisible ? "Hide password" : "Show password"}
        >
          {isVisible ? <EyeSlashIcon /> : <EyeIcon />}
        </Button>
      </InputGroup>
    </TextField>
  )
}
