'use client'

import { useEffect } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Note } from '@/components/ui/note'
import { Code, Strong } from '@/components/ui/text'

const DISCOUNT_TOAST_DELAY_MS = 3_000
const DISCOUNT_DISMISS_DURATION_MS = 5 * 24 * 60 * 60 * 1000
const DISCOUNT_DISMISSED_UNTIL_KEY = 'discount-toast-dismissed-until:v2'

function hasActiveDiscountDismissal() {
  try {
    const dismissedUntil = Number(window.localStorage.getItem(DISCOUNT_DISMISSED_UNTIL_KEY))

    if (Number.isFinite(dismissedUntil) && dismissedUntil > Date.now()) return true

    window.localStorage.removeItem(DISCOUNT_DISMISSED_UNTIL_KEY)
  } catch {}

  return false
}

function dismissDiscountToast() {
  try {
    window.localStorage.setItem(
      DISCOUNT_DISMISSED_UNTIL_KEY,
      String(Date.now() + DISCOUNT_DISMISS_DURATION_MS)
    )
  } catch {}
}

export function Discount() {
  useEffect(() => {
    if (hasActiveDiscountDismissal()) return

    const timeout = window.setTimeout(() => {
      toast.custom(
        (toastId) => (
          <Note intent="default" className="bg-bg">
            <CardHeader>
              <CardTitle>🔥 Get 20% off Intent UI Design</CardTitle>
              <CardDescription className="*:[strong]:text-fg">
                Use code <Code className="text-fg">TVGCGSAU</Code> to get <Strong>20% off</Strong>.
                Includes instant access to all <Strong>templates</Strong>, <Strong>blocks</Strong>,
                and <Strong>patterns</Strong>.
              </CardDescription>
            </CardHeader>
            <div className="mt-3 flex items-center justify-end gap-x-2">
              <Button
                intent="plain"
                size="sm"
                onPress={() => {
                  dismissDiscountToast()
                  toast.dismiss(toastId)
                }}
              >
                Dismiss
              </Button>
              <Button
                size="sm"
                onPress={() => {
                  toast.dismiss(toastId)
                  window.location.href =
                    'https://design.intentui.com/pricing?utm_source=intentui&utm_medium=toast&utm_campaign=limited_time_discount&utm_content=pricing_cta'
                }}
              >
                Get the deal
              </Button>
            </div>
          </Note>
        ),
        {
          className: 'bg-transparent',
          id: 'intentui-design-discount',
          duration: Infinity,
        }
      )
    }, DISCOUNT_TOAST_DELAY_MS)

    return () => window.clearTimeout(timeout)
  }, [])

  return null
}
