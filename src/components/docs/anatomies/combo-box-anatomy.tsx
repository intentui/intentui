import { ComboBox } from "@/components/ui/combo-box"

export default function ComboBoxAnatomy() {
  return (
    <ComboBox placeholder="Select a user" label="Users">
      <ComboBox.Input />
      <ComboBox.List>
        <ComboBox.Option>John Lennon</ComboBox.Option>
        <ComboBox.Option>Paul McCartney</ComboBox.Option>
        <ComboBox.Option>George Harrison</ComboBox.Option>
        <ComboBox.Option>Ringo Starr</ComboBox.Option>
      </ComboBox.List>
    </ComboBox>
  )
}
