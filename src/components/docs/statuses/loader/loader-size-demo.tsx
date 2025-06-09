"use client"

import { Loader } from "@/components/ui/loader"

export default function LoaderSizeDemo() {
  return (
    <div className="flex gap-6">
      <Loader size="small" />
      <Loader size="medium" />
      <Loader size="large" />
      <Loader size="extra-large" />
    </div>
  )
}
