"use client"

import { Loader } from "@/components/ui/loader"

export default function LoaderIntentDemo() {
  return (
    <div className="flex gap-6">
      <Loader variant="spin" size="md" intent="current" />
      <Loader variant="spin" size="md" intent="primary" />
      <Loader variant="spin" size="md" intent="secondary" />
      <Loader variant="spin" size="md" intent="success" />
      <Loader variant="spin" size="md" intent="warning" />
      <Loader variant="spin" size="md" intent="danger" />
    </div>
  )
}
