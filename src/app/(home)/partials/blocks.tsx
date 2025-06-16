"use client"
import SwitchDescriptionDemo from "@/components/docs/controls/switch/switch-description-demo"
import DatePickerDemo from "@/components/docs/date-and-time/date-picker/date-picker-demo"
import CheckboxGroupDescriptionDemo from "@/components/docs/forms/checkbox/checkbox-group-description-demo"
import RadioGroupDescriptionDemo from "@/components/docs/forms/radio-group/radio-group-description-demo"
import SearchFieldDemo from "@/components/docs/forms/search-field/search-field-demo"
import TextFieldDemo from "@/components/docs/forms/text-field/text-field-demo"
import ModalDemo from "@/components/docs/overlays/modal/modal-demo"
import PopoverDemo from "@/components/docs/overlays/popover/popover-demo"
import TooltipDemo from "@/components/docs/overlays/tooltip/tooltip-demo"
import ComboBoxDemo from "@/components/docs/pickers/combo-box/combo-box-demo"
import MultipleSelectDemo from "@/components/docs/pickers/multiple-select/multiple-select-demo"
import SelectDemo from "@/components/docs/pickers/select/select-demo"
import { PageContainer } from "@/components/page-container"
import { buttonStyles } from "@/components/ui/button"
import { CardHeader } from "@/components/ui/card"
import { Link } from "@/components/ui/link"
import { IconArrowUpRight } from "@intentui/icons"

export function Blocks() {
  return (
    <PageContainer>
      <div className="mask-b-from-100% md:mask-b-from-60% lg:mask-b-from-85% space-y-16">
        <div>
          <CardHeader
            className="max-w-lg"
            title="Form"
            description="Displays common form elements and how they can be used together."
          />
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <BlocksCard>
              <TextFieldDemo />
            </BlocksCard>
            <BlocksCard>
              <ComboBoxDemo />
            </BlocksCard>
            <BlocksCard>
              <SelectDemo />
            </BlocksCard>
            <BlocksCard>
              <MultipleSelectDemo />
            </BlocksCard>
            <BlocksCard>
              <DatePickerDemo />
            </BlocksCard>
            <BlocksCard>
              <SearchFieldDemo />
            </BlocksCard>
          </div>
        </div>
        <div>
          <CardHeader
            className="max-w-lg"
            title="Overlays"
            description="Used to display actions, details, or prompts without navigating away from the current page."
          />
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <BlocksCard>
              <ModalDemo />
            </BlocksCard>
            <BlocksCard>
              <PopoverDemo />
            </BlocksCard>
            <BlocksCard>
              <TooltipDemo />
            </BlocksCard>
          </div>
        </div>
        <div>
          <CardHeader
            className="max-w-lg"
            title="Control"
            description="Explore how users can select one, many, or toggle options using checkboxes, radios, and switches."
          />
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <CheckboxGroupDescriptionDemo />
            <RadioGroupDescriptionDemo />
            <SwitchDescriptionDemo />
          </div>
        </div>
      </div>

      <div className="md:-mt-10 relative z-30 mt-10 flex items-center justify-center">
        <Link
          className={buttonStyles({ intent: "outline", className: "backdrop-blur-2xl" })}
          href="/components"
        >
          Show More
          <IconArrowUpRight />
        </Link>
      </div>
    </PageContainer>
  )
}

export function BlocksCard(props: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className="inset-ring inset-ring-fg/10 grid h-56 place-content-center rounded-lg bg-white *:min-w-56 dark:bg-zinc-900/50"
    />
  )
}
