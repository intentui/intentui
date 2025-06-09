import { Avatar } from "@/components/ui/avatar"

const sizes = ["small", "medium", "large", "extra-large"] as const
export default function AvatarSizeDemo() {
  return (
    <div className="flex items-end gap-4">
      {sizes.map((size) => (
        <Avatar key={size} size={size} src="/images/avatar/cobain.jpg" />
      ))}
    </div>
  )
}
