"use client"

import { Wrapper } from "@/app/(home)/partials/resources"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { TextField } from "@/components/ui/text-field"

export function LoginForm() {
  return (
    <Wrapper slot="not-wrapper" className="w-full py-4">
      <Card.Header className="px-0">
        <Card.Title>Login</Card.Title>
        <Card.Description>Don't loose the level, just keep on going.</Card.Description>
      </Card.Header>
      <div className="mb-6 space-y-6">
        <TextField isRequired type="email" label="Email" placeholder="Enter your email" />
        <TextField
          isRequired
          label="Password"
          isRevealable
          type="password"
          placeholder="Enter your password"
        />
        <div className="flex items-center justify-between">
          <Checkbox name="remember-me">Remember me</Checkbox>
        </div>
      </div>
      <Card.Footer className="px-0">
        <Button className="w-full" type="submit">
          Login
        </Button>
      </Card.Footer>
    </Wrapper>
  )
}
