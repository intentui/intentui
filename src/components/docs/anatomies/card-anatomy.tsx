import { Card } from "@/components/ui/card"

export default function CardAnatomy() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Description>Card Description</Card.Description>
        <Card.Action>Card Action</Card.Action>
      </Card.Header>
      <Card.Content>Card Content</Card.Content>
      <Card.Footer>Card Footer Button</Card.Footer>
    </Card>
  )
}
