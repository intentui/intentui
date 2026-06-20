'use client'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

export default function ToggleGroupDemo() {
  return (
    <ToggleGroup defaultSelectedKeys={['3d']}>
      <ToggleGroupItem id="1d">1d</ToggleGroupItem>
      <ToggleGroupItem id="3d">3d</ToggleGroupItem>
      <ToggleGroupItem id="7d">7d</ToggleGroupItem>
      <ToggleGroupItem id="2w">2w</ToggleGroupItem>
    </ToggleGroup>
  )
}
