"use client"

import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "@/components/ui/description-list"
import { Heading } from "@/components/ui/heading"

export default function DescriptionListHeadingDemo() {
  return (
    <div>
      <Heading className="sm:text-lg">Product Details</Heading>
      <DescriptionList>
        <DescriptionTerm>Product Name</DescriptionTerm>
        <DescriptionDetails>Wireless Headphones</DescriptionDetails>
        <DescriptionTerm>Battery Life</DescriptionTerm>
        <DescriptionDetails>20 hours</DescriptionDetails>
        <DescriptionTerm>Weight</DescriptionTerm>
        <DescriptionDetails>250 grams</DescriptionDetails>
        <DescriptionTerm>Color</DescriptionTerm>
        <DescriptionDetails>Black</DescriptionDetails>
        <DescriptionTerm>Warranty</DescriptionTerm>
        <DescriptionDetails>2 years</DescriptionDetails>
      </DescriptionList>
    </div>
  )
}
