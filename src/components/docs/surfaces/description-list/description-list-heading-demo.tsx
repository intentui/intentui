"use client"

import { DescriptionList } from "@/components/ui/description-list"
import { Heading } from "@/components/ui/heading"

export default function DescriptionListHeadingDemo() {
  return (
    <div>
      <Heading className="sm:text-lg">Product Details</Heading>
      <DescriptionList>
        <DescriptionList.Term>Product Name</DescriptionList.Term>
        <DescriptionList.Details>Wireless Headphones</DescriptionList.Details>
        <DescriptionList.Term>Battery Life</DescriptionList.Term>
        <DescriptionList.Details>20 hours</DescriptionList.Details>
        <DescriptionList.Term>Weight</DescriptionList.Term>
        <DescriptionList.Details>250 grams</DescriptionList.Details>
        <DescriptionList.Term>Color</DescriptionList.Term>
        <DescriptionList.Details>Black</DescriptionList.Details>
        <DescriptionList.Term>Warranty</DescriptionList.Term>
        <DescriptionList.Details>2 years</DescriptionList.Details>
      </DescriptionList>
    </div>
  )
}
