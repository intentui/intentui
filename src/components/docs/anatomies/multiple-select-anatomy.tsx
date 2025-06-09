import { MultipleSelect } from "@/components/ui/multiple-select"

export default function MultipleSelectAnatomy() {
  return (
    <MultipleSelect
      className="max-w-xs"
      label="Fruits"
      items={[
        { id: 1, name: "Apple" },
        { id: 2, name: "Banana" },
      ]}
    >
      {(item) => {
        return <MultipleSelect.Item textValue={item.name}>{item.name}</MultipleSelect.Item>
      }}
    </MultipleSelect>
  )
}
