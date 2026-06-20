'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  type DrawerContentProps,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'
import { Radio, RadioField, RadioGroup } from '@/components/ui/radio'
import { Separator } from '@/components/ui/separator'

export default function DrawerFloatDemo() {
  const [side, setSide] = useState('bottom')
  return (
    <>
      <RadioGroup orientation="horizontal" aria-label="Side" value={side} onChange={setSide}>
        {['top', 'bottom', 'left', 'right'].map((side) => (
          <RadioField key={side} value={side}>
            <Radio className="capitalize">{side}</Radio>
          </RadioField>
        ))}
      </RadioGroup>
      <Separator className="my-6 h-px w-full" />
      <Drawer>
        <Button intent="outline" className="capitalize">
          {side}
        </Button>
        <DrawerContent isFloat side={side as DrawerContentProps['side']}>
          <DrawerHeader>
            <DrawerTitle className="capitalize">{side}</DrawerTitle>
            <DrawerDescription>
              The drawer will be positioned on the {side} side of the screen.
            </DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </>
  )
}
