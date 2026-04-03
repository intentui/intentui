import { Link } from "@/components/ui/link";

export function DiscountBanner() {
  return (
    <Link href="https://design.intentui.com/pricing" className="bg-blue-600 text-white py-3 px-4 text-sm/6 text-center w-full block z-50">
      Celebrate 2 years of Intent UI with 20% off using code{" "}
      <span className="rounded-sm bg-blue-800/70 px-2 py-1">2YEARSB</span>.
    </Link>
  );
}
