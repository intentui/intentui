"use client"

import { useEffect } from "react"
import { toast } from "sonner"
import { Button, buttonStyles } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Note } from "@/components/ui/note"

const STORAGE_KEY = "intentui_discount_bf"
const TTL_MS = 432000000

export function AppDiscountBanner() {
  return (
    <a
      href="https://design.intentui.com/pricing?utm_source=intentui.com&utm_medium=referral&utm_campaign=alert-black-friday-2025"
      target="blank"
      className="relative block w-full cursor-pointer border-fg/10 border-b bg-blue-600 px-4 py-3 text-center font-medium text-white text-xs sm:text-sm/6"
    >
      <Container>
        Black Friday: Save 40% on all plans with code <code>BF2025UI</code>
      </Container>
    </a>
  )
}

export function AppDiscountBannerCookie() {
  useEffect(() => {
    if (typeof window === "undefined") return
    const until = Number(localStorage.getItem(STORAGE_KEY) || 0)
    if (until && Date.now() < until) return
    const timer = setTimeout(() => {
      toast.custom(
        (t) => (
          <Note className="rounded-xl">
            <strong className="font-medium">Black Friday</strong>: Save 40% on all plans with code{" "}
            <code>BF2025UI</code>
            <div className="mt-4 flex items-center gap-x-1">
              <a
                href="https://design.intentui.com/pricing?utm_source=intentui.com&utm_medium=referral&utm_campaign=banner-cookie-black-friday-2025"
                className={buttonStyles({
                  size: "sm",
                })}
              >
                Upgrade now
              </a>
              <Button
                intent="plain"
                onPress={() => {
                  localStorage.setItem(STORAGE_KEY, String(Date.now() + TTL_MS))
                  toast.dismiss(t)
                }}
              >
                Dismiss
              </Button>
            </div>
          </Note>
        ),
        { duration: Infinity },
      )
    }, 2000)
    return () => clearTimeout(timer)
  }, [])
  return null
}

export function DiscountBanner() {
  return (
    <>
      <AppDiscountBanner />
      <AppDiscountBannerCookie />
    </>
  )
}
