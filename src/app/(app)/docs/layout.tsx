import type { ReactNode } from "react"

import { Aside } from "@/components/aside"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="relative flex min-h-svh flex-col">
      <div className="relative mx-auto flex w-full flex-auto justify-center lg:max-w-(--breakpoint-2xl) lg:px-6">
        <div className="hidden lg:relative lg:block lg:flex-none">
          <Aside />
        </div>
        {children}
      </div>
    </main>
  )
}
