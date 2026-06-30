import { Avatar } from '@/components/ui/avatar'

export default function AvatarShapeDemo() {
  return (
    <div className="flex items-end gap-4">
      <Avatar src="/images/avatar/slash.jpg" />
      <Avatar src="https://intentui.com/images/avatar/cobain.jpg" isSquare />
    </div>
  )
}
