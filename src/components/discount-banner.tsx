import { Link } from "@/components/ui/link"

export function DiscountBanner() {
  return (
    <Link
      href="https://design.intentui.com/pricing"
      className="z-50 block w-full bg-blue-600 px-4 py-3 text-center text-sm/6 text-white"
    >
      Celebrate 2 years of Intent UI with 20% off using code{" "}
      <span className="rounded-sm bg-blue-800/70 px-2 py-1">2YEARSB</span>.
    </Link>
  )
}
