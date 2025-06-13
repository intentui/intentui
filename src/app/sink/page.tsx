"use client"
import { DocHow } from "@/components/code/doc-how"

export default function Page() {
  return (
    <div className="flex items-center justify-center p-20">
      <div className="mx-auto max-w-2xl">
        <DocHow toUse="buttons/button/button-size-demo" />
      </div>
    </div>
  )
}
