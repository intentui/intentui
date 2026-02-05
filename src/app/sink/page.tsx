'use client'

import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';


export default function Page() {
  return (
    <div>
      <Button
        render={(domProps, { isPressed }) => (
          <motion.button
            {...domProps}
            animate={{ scale: isPressed ? 0.9 : 1 }}/>
        )}>
        Press me
      </Button>
    </div>
  )
}
