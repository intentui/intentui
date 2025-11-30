import { Blocks } from "@/app/(home)/partials/blocks"
import { Components } from "@/app/(home)/partials/components"
import { Cta } from "@/app/(home)/partials/cta"
import { DesignIntentui } from "@/app/(home)/partials/design-intentui"
import { Examples } from "@/app/(home)/partials/examples"
import { StarterKit } from "@/app/(home)/partials/starter-kit"
import { Footer } from "@/components/footer"
import { Hero } from "./partials/hero"
import { Navbar } from "./partials/navbar"
import { OpenSource } from "./partials/open-source"

export default function Page() {
  return (
    <div className="relative flex min-h-svh flex-col overflow-hidden">
      <div className="relative isolate mb-6 overflow-hidden border-b">
        <Navbar />
        <Hero />
      </div>
      <Examples />
      <div className="border-b pb-6 sm:pb-12">
        <Blocks />
      </div>

      <div className="bg-linear-to-b from-secondary/10 to-secondary/20 **:data-[slot=choicebox-item]:shadow-xs **:data-[slot=choicebox-item]:hover:shadow-none">
        <StarterKit />
      </div>
      <DesignIntentui />
      <Components />
      <Cta />
      <OpenSource />
      <Footer />
    </div>
  )
}
