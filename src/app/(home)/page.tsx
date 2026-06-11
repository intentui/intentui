import { Blocks } from "@/app/(home)/partials/blocks"
import { Components } from "@/app/(home)/partials/components"
import { Cta } from "@/app/(home)/partials/cta"
import { DesignIntentui } from "@/app/(home)/partials/design-intentui"
import { StarterKit } from "@/app/(home)/partials/starter-kit"
import { Discount } from "@/components/discount"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { PageContainer } from "@/components/page-container"
import { createMetadata } from "@/lib/metadata"
import { Hero } from "./partials/hero"
import { OpenSource } from "./partials/open-source"

export const metadata = createMetadata({
  title: "Intent UI",
  description:
    "Copy and paste accessible React components built on React Aria and Tailwind CSS. 87+ production-ready components for Next.js and Laravel.",
  path: "/",
  image: null,
  keywords: [
    "react components",
    "ui library",
    "react aria",
    "tailwind css",
    "accessible components",
    "next.js ui",
    "laravel ui",
    "intent ui",
    "intentui",
  ],
})
export default function Page() {
  return (
    <div className="relative flex min-h-svh flex-col overflow-hidden">
      <div className="relative isolate overflow-hidden border-page border-b">
        <Discount />
        <Navigation />
        <Hero />
      </div>
      {/*<Examples />*/}
      <div className="border-page border-b">
        <Blocks />
      </div>

      <StarterKit />
      <DesignIntentui />
      <div className="border-page border-t">
        <>
          <div className="border-page sm:border-x">
            <Components />
            <Cta />
            <div className="border-page border-t">
              <PageContainer>
                <div className="border-page border-x">
                  <OpenSource />
                </div>
              </PageContainer>
            </div>
          </div>
        </>
      </div>
      <Footer currentYear={new Date().getUTCFullYear()} />
    </div>
  )
}
