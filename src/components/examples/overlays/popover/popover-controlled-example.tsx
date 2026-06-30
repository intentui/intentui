'use client'

import { TrashIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Loader } from '@/components/ui/loader'
import {
  PopoverContent,
  PopoverDescription,
  PopoverFooter,
  PopoverHeader,
  PopoverTitle,
} from '@/components/ui/popover'
import { wait } from '@/lib/utils'

export default function PopoverControlledDemo() {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState<'idle' | 'loading' | 'success'>('idle')
  const triggerRef = useRef(null)

  const deleteAccount = async () => {
    setLoading('loading')
    await wait(3000)
    setLoading('success')

    await wait(2000)
    setLoading('idle')
    setIsOpen(false)
  }
  return (
    <>
      <Button ref={triggerRef} onPress={() => setIsOpen(true)} intent="danger">
        Delete Account
      </Button>
      <PopoverContent
        triggerRef={triggerRef}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        className="sm:max-w-sm"
      >
        <PopoverHeader>
          <PopoverTitle>Confirm Deletion</PopoverTitle>
          <PopoverDescription>
            Are you sure you want to delete your account? This action cannot be undone.
          </PopoverDescription>
        </PopoverHeader>
        <PopoverFooter>
          <Button intent="outline" onPress={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button
            isDisabled={loading === 'loading'}
            onPress={deleteAccount}
            intent={['loading', 'idle'].includes(loading) ? 'danger' : 'primary'}
          >
            {loading === 'loading' ? (
              <>
                <Loader variant="spin" />
                Deleting...
              </>
            ) : loading === 'success' ? (
              <>
                <CheckCircleIcon />
                Deleted
              </>
            ) : (
              <>
                <TrashIcon />
                Delete
              </>
            )}
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </>
  )
}
