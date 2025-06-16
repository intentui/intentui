import { Blocks } from "@/app/(home)/partials/blocks"
import { Cta } from "@/app/(home)/partials/cta"
import { StarterKit } from "@/app/(home)/partials/starter-kit"
import { Footer } from "@/components/footer"
import { Hero } from "./partials/hero"
import { IconResources } from "./partials/icon-resources"
import { Navbar } from "./partials/navbar"
import { OpenSource } from "./partials/open-source"

export default function Page() {
  return (
    <div className="relative flex min-h-svh flex-col">
      <div className="relative isolate mb-6 overflow-hidden border-b">
        <Navbar />
        <Hero />
      </div>
      <div className="border-b py-6 sm:py-12 ">
        <Blocks />
      </div>

      <div className="bg-linear-to-b from-secondary/10 to-secondary/20 py-6 **:data-[slot=choicebox-item]:shadow-xs **:data-[slot=choicebox-item]:hover:shadow-none sm:py-12">
        <StarterKit />
      </div>
      <IconResources />
      <Cta />
      <OpenSource />
      <Footer />
    </div>
  )
}
