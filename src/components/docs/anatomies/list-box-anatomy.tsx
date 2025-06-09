import { ListBox } from "@/components/ui/list-box"

export default function ListBoxAnatomy() {
  return (
    <ListBox aria-label="Bands">
      <ListBox.Item>Nirvana</ListBox.Item>
      <ListBox.Item>Radiohead</ListBox.Item>
      <ListBox.Item>Foo Fighters</ListBox.Item>
      <ListBox.Item>Arctic Monkeys</ListBox.Item>
      <ListBox.Item>The Strokes</ListBox.Item>
    </ListBox>
  )
}
