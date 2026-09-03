'use client'
import { cn } from 'cn'
import SwitchDescriptionDemo from '@/components/examples/controls/switch/switch-description-example'
import CheckboxGroupDescriptionDemo from '@/components/examples/forms/checkbox/checkbox-group-description-example'
import RadioGroupDescriptionDemo from '@/components/examples/forms/radio-group/radio-group-description-example'
import ModalDemo from '@/components/examples/overlays/modal/modal-example'
import PopoverDemo from '@/components/examples/overlays/popover/popover-example'
import SheetDemo from '@/components/examples/overlays/sheet/sheet-example'
import TooltipDemo from '@/components/examples/overlays/tooltip/tooltip-example'
import { PageContainer } from '@/components/page-container'
import { CardHeader } from '@/components/ui/card'
import { Link } from '@/components/ui/link'

export function Blocks() {
  return (
    <>
      <div className="border-page border-b">
        <PageContainer>
          <div className="border-page py-6 sm:border-x sm:p-6">
            <CardHeader
              className="max-w-lg"
              title="Overlays"
              description="Used to display actions, details, or prompts without navigating away from the current page."
            />
          </div>
        </PageContainer>
      </div>
      <PageContainer>
        <div className="grid grid-cols-2 gap-px border-page border-x bg-page *:bg-bg *:p-6 sm:*:min-h-40 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Center>
              <ModalDemo />
            </Center>
          </div>
          <div>
            <Center>
              <PopoverDemo />
            </Center>
          </div>
          <div>
            <Center>
              <SheetDemo />
            </Center>
          </div>
          <div>
            <Center>
              <TooltipDemo />
            </Center>
          </div>
        </div>
      </PageContainer>

      <div className="-mx-px border-page border-x border-y">
        <PageContainer>
          <div className="border-page py-6 sm:border-x sm:p-6">
            <CardHeader
              className="max-w-lg"
              title="Control"
              description="Explore how users can select one, many, or toggle options using checkboxes, radios, and switches."
            />
          </div>
        </PageContainer>
      </div>
      <PageContainer>
        <div className="border-page sm:border-x">
          <div className="grid grid-cols-1 gap-px bg-page *:bg-bg *:py-6 sm:*:p-6 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <CheckboxGroupDescriptionDemo />
            </div>
            <div>
              <RadioGroupDescriptionDemo />
            </div>
            <div>
              <SwitchDescriptionDemo />
            </div>
          </div>
        </div>
      </PageContainer>
      <>
        <Link
          href="/docs/components/buttons/button"
          className="group flex items-center justify-center border-page border-t text-xl"
        >
          <PageContainer className="w-full">
            <div className="border-page border-x p-6 text-center group-hover:bg-muted/50">
              Show More
            </div>
          </PageContainer>
        </Link>
      </>
    </>
  )
}

export function BlocksCard({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={cn(
        'flex min-h-32 items-center justify-center rounded-2xl border p-6 *:min-w-56 sm:min-h-48 sm:p-10 dark:bg-muted/30',
        className
      )}
    >
      {props.children}
    </div>
  )
}

function Center({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('flex size-full items-center justify-center', className)} {...props} />
  )
}
