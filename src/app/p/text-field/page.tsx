"use client"

import { Button } from "@/components/ui/button"
import { FieldGroup, Input, Label } from "@/components/ui/field"
import { Link } from "@/components/ui/link"
import { TextField } from "@/components/ui/text-field"
import { IconBrandTwitter, IconSearch, IconSend } from "@intentui/icons"

export default function Page() {
  return (
    <div className="items mx-auto flex max-w-3xl flex-col gap-y-6">
      <div className="flex items-center gap-x-1">
        <TextField className="min-w-60" aria-label="email" placeholder="you@domain.com" />
        <Button>
          <IconSend />
          Send
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <TextField label="Email" placeholder="you@domain.com" />
      <TextField label="Username" prefix="https://intentui.com/" placeholder="irsyadadl" />
      <TextField label="Username" prefix={<IconBrandTwitter />} placeholder="irsyadadl" />
      <TextField label="Price" placeholder="1000" suffix="USD" />
      <TextField label="Search" placeholder="Something..." suffix={<IconSearch />} />
      <TextField label="Email" placeholder="you@domain.com" suffix={<Button>Subscribe</Button>} />
      <TextField label="Email" placeholder="you@domain.com" isPending />
      <TextField>
        <div className="flex items-center justify-between">
          <Label>Password</Label>
          <Link href="#" intent="secondary" className="text-sm">
            Forgot password?
          </Link>
        </div>
        <FieldGroup>
          <Input />
        </FieldGroup>
      </TextField>
      </div>
    </div>
  )
}
