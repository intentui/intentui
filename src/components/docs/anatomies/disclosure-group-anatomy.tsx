import {
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
  DisclosureTrigger,
} from "@/components/ui/disclosure"

export default function DisclosureAnatomy() {
  return (
    <DisclosureGroup defaultExpandedKeys={["x"]}>
      <Disclosure id="x">
        <DisclosureTrigger>Q1</DisclosureTrigger>
        <DisclosurePanel>A1</DisclosurePanel>
      </Disclosure>
      <Disclosure id="y">
        <DisclosureTrigger>Q2</DisclosureTrigger>
        <DisclosurePanel>A2</DisclosurePanel>
      </Disclosure>
      <Disclosure id="z">
        <DisclosureTrigger>Q3</DisclosureTrigger>
        <DisclosurePanel>A3</DisclosurePanel>
      </Disclosure>
    </DisclosureGroup>
  )
}
