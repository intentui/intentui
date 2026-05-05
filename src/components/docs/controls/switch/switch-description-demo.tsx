import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Description } from "@/components/ui/field"
import { Switch, SwitchLabel } from "@/components/ui/switch"

export default function SwitchDescriptionDemo() {
  return (
    <div className="flex flex-col gap-4">
      <CardHeader>
        <CardTitle className="font-medium sm:text-sm/6">Privacy settings</CardTitle>
        <CardDescription>Choose what others can see and how your account is shown.</CardDescription>
      </CardHeader>
      <Switch value="profileVisible" name="pp">
        <SwitchLabel>Public profile</SwitchLabel>
        <Description>Allow others to see your profile.</Description>
      </Switch>
      <Switch value="searchEngineIndexing" name="se">
        <SwitchLabel>Search engine indexing</SwitchLabel>
        <Description>Allow search engines to index your profile.</Description>
      </Switch>
      <Switch defaultSelected value="twoFactor" name="tf">
        <SwitchLabel>Two-factor authentication</SwitchLabel>
        <Description>Add an extra layer of security to your account.</Description>
      </Switch>
      <Switch value="activityStatus" name="as">
        <SwitchLabel>Show activity status</SwitchLabel>
        <Description>Let others see when you're online.</Description>
      </Switch>
    </div>
  )
}
