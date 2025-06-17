import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Description, Label } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export default function SwitchDescriptionDemo() {
  return (
    <div className="flex flex-col gap-4">
      <CardHeader>
        <CardTitle className="font-medium sm:text-sm/6">Privacy settings</CardTitle>
        <CardDescription>Choose what others can see and how your account is shown.</CardDescription>
      </CardHeader>
      <Switch isSelected value="profileVisible">
        <Label>Public profile</Label>
        <Description>Allow others to see your profile.</Description>
      </Switch>
      <Switch value="searchEngineIndexing">
        <Label>Search engine indexing</Label>
        <Description>Allow search engines to index your profile.</Description>
      </Switch>
      <Switch isSelected value="twoFactor">
        <Label>Two-factor authentication</Label>
        <Description>Add an extra layer of security to your account.</Description>
      </Switch>
      <Switch value="activityStatus">
        <Label>Show activity status</Label>
        <Description>Let others see when you're online.</Description>
      </Switch>
    </div>
  )
}
