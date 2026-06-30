'use client'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'

export default function DrawerWithoutNotchDemo() {
  return (
    <Drawer>
      <Button intent="outline">Open</Button>
      <DrawerContent notch={false}>
        <DrawerHeader>
          <DrawerTitle>The Beatles</DrawerTitle>
          <DrawerDescription>
            The Beatles were an English rock band formed in Liverpool in 1960, comprising John
            Lennon, Paul McCartney, George Harrison and Ringo Starr.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="justify-center">
          <DrawerClose isCircle className="w-full">
            Close
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
