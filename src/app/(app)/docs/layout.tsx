import type { ReactNode } from "react"

import { Aside } from "@/components/aside"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col">
      <div className="relative mx-auto flex w-full flex-auto justify-center lg:max-w-(--breakpoint-2xl) lg:px-6">
        <div className="hidden lg:relative lg:block lg:flex-none">
          <div className="-ml-0.5 sticky top-[calc(var(--spacing)*15.1)] h-screen w-64 overflow-y-auto overflow-x-hidden py-16 pr-0 pl-0.5 xl:w-60 ">
            <Aside />
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}
