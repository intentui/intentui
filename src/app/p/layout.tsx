export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-(--breakpoint-2xl) p-6 sm:p-16">{children}</div>
}
