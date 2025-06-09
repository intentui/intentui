"use client"

import { Loader } from "@/components/ui/loader"

export default function LoaderIntentDemo() {
  return (
    <div className="flex gap-6">
      <Loader variant="spin" size="medium" intent="current" />
      <Loader variant="spin" size="medium" intent="primary" />
      <Loader variant="spin" size="medium" intent="secondary" />
      <Loader variant="spin" size="medium" intent="success" />
      <Loader variant="spin" size="medium" intent="warning" />
      <Loader variant="spin" size="medium" intent="danger" />
    </div>
  )
}
