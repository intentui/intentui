import { Aside } from "@/components/aside"

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="relative flex min-h-svh flex-col">
      <div className="relative mx-auto flex w-full flex-auto justify-center sm:px-6 lg:max-w-(--breakpoint-2xl) lg:px-14">
        <div className="hidden lg:relative lg:block lg:flex-none">
          <Aside />
        </div>
        {children}
      </div>
    </main>
  )
}
