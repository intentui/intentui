"use client"

import { Link } from "@/components/ui/link"
import { buttonStyles } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "@/components/ui/description-list"

export default function DescriptionListCardDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Details</CardTitle>
        <CardDescription>
          The product details card is a great way to display information about a product.
        </CardDescription>
      </CardHeader>
      <CardContent>
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
      </CardContent>
      <CardFooter>
        <Link className={buttonStyles()} href="#">
          Edit
        </Link>
      </CardFooter>
    </Card>
  )
}
