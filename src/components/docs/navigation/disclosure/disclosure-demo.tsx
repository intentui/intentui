import { Disclosure, DisclosurePanel, DisclosureTrigger } from "@/components/ui/disclosure"

export default function DisclosureDemo() {
  return (
    <Disclosure>
      <DisclosureTrigger>What are the benefits of regular exercise?</DisclosureTrigger>
      <DisclosurePanel>
        <p>
          Regular exercise can improve your overall health, boost your mood, increase energy levels,
          and help you maintain a healthy weight.
        </p>
      </DisclosurePanel>
    </Disclosure>
  )
}
