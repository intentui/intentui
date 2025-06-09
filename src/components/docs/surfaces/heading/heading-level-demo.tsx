"use client"

import { Heading } from "@/components/ui/heading"

export default function HeadingLevelDemo() {
  return (
    <div className="space-y-2">
      <Heading>The quick brown fox jumps over the lazy dog</Heading>
      <Heading level={2}>The quick brown fox jumps over the lazy dog</Heading>
      <Heading level={3}>The quick brown fox jumps over the lazy dog</Heading>
      <Heading level={4}>The quick brown fox jumps over the lazy dog</Heading>
    </div>
  )
}
