import { DesignIntentui } from '@/app/(home)/partials/design-intentui'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}

      <DesignIntentui />
    </>
  )
}
