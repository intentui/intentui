import { Avatar } from "@/components/ui/avatar"

const sizes = ["sm", "md", "lg", "xl"] as const
export default function AvatarSizeDemo() {
  return (
    <div className="flex items-end gap-4">
      {sizes.map((size) => (
        <Avatar key={size} size={size} src="https://intentui.com/images/avatar/cobain.jpg" />
      ))}
    </div>
  )
}
