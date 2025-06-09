import { Avatar } from "@/components/ui/avatar"

export default function AvatarShapeDemo() {
  return (
    <div className="flex items-end gap-4">
      <Avatar src="/images/avatar/slash.jpg" shape="circle" />
      <Avatar src="/images/avatar/cobain.jpg" shape="square" />
    </div>
  )
}
