import { Table } from "@/components/ui/table"

export default function TableAnatomy() {
  return (
    <Table aria-label="Bands">
      <Table.Header>
        <Table.Column>#</Table.Column>
        <Table.Column isRowHeader>Name</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>1</Table.Cell>
          <Table.Cell>Nirvana</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>2</Table.Cell>
          <Table.Cell>The Beatles</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}
