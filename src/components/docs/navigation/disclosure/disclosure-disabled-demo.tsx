import { Disclosure, DisclosurePanel, DisclosureTrigger } from "@/components/ui/disclosure"

export default function DisclosureDisabledDemo() {
  return (
    <Disclosure isDisabled>
      <DisclosureTrigger>What is your return policy?</DisclosureTrigger>
      <DisclosurePanel>
        <p>
          You can return any item within 30 days of purchase, provided it is in its original
          condition with proof of purchase.
        </p>
      </DisclosurePanel>
    </Disclosure>
  )
}
