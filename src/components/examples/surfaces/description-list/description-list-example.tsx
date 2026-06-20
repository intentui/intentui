import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from '@/components/ui/description-list'

export default function DescriptionListDemo() {
  return (
    <DescriptionList>
      <DescriptionTerm>Invoice Number</DescriptionTerm>
      <DescriptionDetails>INV-12345</DescriptionDetails>
      <DescriptionTerm>Invoice Date</DescriptionTerm>
      <DescriptionDetails>September 21, 2024</DescriptionDetails>
      <DescriptionTerm>Due Date</DescriptionTerm>
      <DescriptionDetails>October 21, 2024</DescriptionDetails>
      <DescriptionTerm>Customer Name</DescriptionTerm>
      <DescriptionDetails>John Doe</DescriptionDetails>
      <DescriptionTerm>Total Amount</DescriptionTerm>
      <DescriptionDetails>$1,250.00</DescriptionDetails>
      <DescriptionTerm>Status</DescriptionTerm>
      <DescriptionDetails>Pending</DescriptionDetails>
    </DescriptionList>
  )
}
