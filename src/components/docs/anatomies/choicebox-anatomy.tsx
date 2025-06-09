import { Choicebox } from "@/components/ui/choicebox"

export default function AccordionAnatomy() {
  return (
    <Choicebox aria-label="Select items" selectionMode="multiple">
      <Choicebox.Item>
        <Choicebox.Label />
        <Choicebox.Description />
      </Choicebox.Item>
    </Choicebox>
  )
}
