"use client"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import { twMerge } from "tailwind-merge"
import SwitchDescriptionDemo from "@/components/examples/controls/switch/switch-description-demo"
import CheckboxGroupDescriptionDemo from "@/components/examples/forms/checkbox/checkbox-group-description-demo"
import RadioGroupDescriptionDemo from "@/components/examples/forms/radio-group/radio-group-description-demo"
import ModalDemo from "@/components/examples/overlays/modal/modal-demo"
import PopoverDemo from "@/components/examples/overlays/popover/popover-demo"
import SheetDemo from "@/components/examples/overlays/sheet/sheet-demo"
import TooltipDemo from "@/components/examples/overlays/tooltip/tooltip-demo"
import { PageContainer } from "@/components/page-container"
import { buttonStyles } from "@/components/ui/button"
import { CardHeader } from "@/components/ui/card"
import { Link } from "@/components/ui/link"

export function Blocks() {
  return (
    <PageContainer className="mt-6">
      <div className="mask-b-from-90% md:mask-b-from-60% lg:mask-b-from-85% space-y-10 sm:space-y-16">
        <div>
          <CardHeader
            className="max-w-lg"
            title="Overlays"
            description="Used to display actions, details, or prompts without navigating away from the current page."
          />
          <div className="mt-6 grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">
            <BlocksCard>
              <Center>
                <ModalDemo />
              </Center>
            </BlocksCard>
            <BlocksCard>
              <Center>
                <PopoverDemo />
              </Center>
            </BlocksCard>
            <BlocksCard>
              <Center>
                <SheetDemo />
              </Center>
            </BlocksCard>
            <BlocksCard>
              <Center>
                <TooltipDemo />
              </Center>
            </BlocksCard>
          </div>
        </div>

        <div>
          <CardHeader
            className="max-w-lg"
            title="Control"
            description="Explore how users can select one, many, or toggle options using checkboxes, radios, and switches."
          />
          <div className="mt-6 grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3">
            <CheckboxGroupDescriptionDemo />
            <RadioGroupDescriptionDemo />
            <SwitchDescriptionDemo />
          </div>
        </div>
      </div>

      <div className="relative z-30 mt-10 flex items-center justify-center md:-mt-10">
        <Link
          className={buttonStyles({
            intent: "outline",
            className: "backdrop-blur-2xl",
          })}
          href="/docs/components/buttons/button"
        >
          Show More
          <ArrowUpRightIcon />
        </Link>
      </div>
    </PageContainer>
  )
}

export function BlocksCard({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={twMerge(
        "inset-ring inset-ring-fg/10 flex min-h-32 items-center justify-center rounded-2xl bg-zinc-50/30 p-6 *:min-w-56 sm:min-h-48 sm:p-10 dark:inset-ring-fg/5 dark:inset-shadow-2xs dark:inset-shadow-fg/5 dark:bg-zinc-900/50",
        className,
      )}
    >
      {props.children}
    </div>
  )
}

function Center({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={twMerge("flex size-full items-center justify-center", className)} {...props} />
  )
}
