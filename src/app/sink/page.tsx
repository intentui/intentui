import ComboBoxAvatarDemo from "@/components/docs/pickers/combo-box/combo-box-avatar-demo"
import SelectWithAvatarDemo from "@/components/docs/pickers/select/select-with-avatar-demo"

export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-8 p-24">
      <SelectWithAvatarDemo />
      <ComboBoxAvatarDemo />
    </div>
  )
}
