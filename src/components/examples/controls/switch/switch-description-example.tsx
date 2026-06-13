import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Description } from "@/components/ui/field"
import { Switch, SwitchField } from "@/components/ui/switch"

export default function SwitchDescriptionDemo() {
  return (
    <div className="flex flex-col gap-4">
      <CardHeader>
        <CardTitle className="font-medium sm:text-sm/6">Privacy settings</CardTitle>
        <CardDescription>Choose what others can see and how your account is shown.</CardDescription>
      </CardHeader>
      <SwitchField value="profileVisible" name="pp">
        <Switch>Public profile</Switch>
        <Description>Allow others to see your profile.</Description>
      </SwitchField>
      <SwitchField value="searchEngineIndexing" name="se">
        <Switch>Search engine indexing</Switch>
        <Description>Allow search engines to index your profile.</Description>
      </SwitchField>
      <SwitchField defaultSelected value="twoFactor" name="tf">
        <Switch>Two-factor authentication</Switch>
        <Description>Add an extra layer of security to your account.</Description>
      </SwitchField>
      <SwitchField value="activityStatus" name="as">
        <Switch>Show activity status</Switch>
        <Description>Let others see when you're online.</Description>
      </SwitchField>
    </div>
  )
}
