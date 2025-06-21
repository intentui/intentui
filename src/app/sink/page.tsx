"use client"

import ComboBoxAvatarDemo from "@/components/docs/pickers/combo-box/combo-box-avatar-demo"
import ComboBoxDemo from "@/components/docs/pickers/combo-box/combo-box-demo"
import SelectDemo from "@/components/docs/pickers/select/select-demo"
import SelectSearchableDemo from "@/components/docs/pickers/select/select-searchable-demo"

export default function Page() {
  return (
    <div className="p-6">
      <div className="mx-auto flex max-w-xl flex-col gap-y-6">
        <ComboBoxDemo />
        <ComboBoxAvatarDemo />
        <SelectDemo />
        <SelectSearchableDemo />
      </div>
    </div>
  )
}
