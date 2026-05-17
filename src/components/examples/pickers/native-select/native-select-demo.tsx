import { NativeSelectContent } from "@/components/ui/native-select"

export default function NativeSelectDemo() {
  return (
    <NativeSelectContent name="timezone">
      <option value="america_new_york">America/New_York (ET)</option>
      <option value="america_chicago">America/Chicago (CT)</option>
      <option value="america_denver">America/Denver (MT)</option>
      <option value="america_los_angeles">America/Los_Angeles (PT)</option>
      <option value="utc">UTC</option>
    </NativeSelectContent>
  )
}
