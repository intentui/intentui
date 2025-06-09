import { DescriptionList } from "@/components/ui/description-list"

export default function DescriptionListDemo() {
  return (
    <DescriptionList>
      <DescriptionList.Term>Invoice Number</DescriptionList.Term>
      <DescriptionList.Details>INV-12345</DescriptionList.Details>
      <DescriptionList.Term>Invoice Date</DescriptionList.Term>
      <DescriptionList.Details>September 21, 2024</DescriptionList.Details>
      <DescriptionList.Term>Due Date</DescriptionList.Term>
      <DescriptionList.Details>October 21, 2024</DescriptionList.Details>
      <DescriptionList.Term>Customer Name</DescriptionList.Term>
      <DescriptionList.Details>John Doe</DescriptionList.Details>
      <DescriptionList.Term>Total Amount</DescriptionList.Term>
      <DescriptionList.Details>$1,250.00</DescriptionList.Details>
      <DescriptionList.Term>Status</DescriptionList.Term>
      <DescriptionList.Details>Pending</DescriptionList.Details>
    </DescriptionList>
  )
}
