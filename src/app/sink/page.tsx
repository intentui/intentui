import ButtonGroupWithMenuDemo from "@/components/docs/buttons/button-group/button-group-with-menu-demo"
import ButtonGroupWithTextDemo from "@/components/docs/buttons/button-group/button-group-with-text-demo"
import DisclosureGroupNestedDemo from "@/components/docs/navigation/disclosure-group/disclosure-group-nested-demo"

export default function Page() {
  return (
    <div className="p-4">
      <DisclosureGroupNestedDemo />
      <ButtonGroupWithMenuDemo />
      <ButtonGroupWithTextDemo />
    </div>
  )
}
