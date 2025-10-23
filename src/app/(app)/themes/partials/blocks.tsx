import { HomeIcon } from "@heroicons/react/24/outline"
import MenuSubDemo from "@/components/docs/collections/menu/menu-sub-demo"
import RangeCalendarControlledDemo from "@/components/docs/date-and-time/calendar/range-calendar-controlled-demo"
import ModalDemo from "@/components/docs/overlays/modal/modal-demo"
import PopoverDemo from "@/components/docs/overlays/popover/popover-demo"
import { users } from "@/components/docs/pickers/combo-box/combo-box-avatar-demo"
import { roles } from "@/components/docs/pickers/select/select-details-description-demo"
import AreaChartDemo from "@/components/docs/visualizations/area-chart/area-chart-demo"
import BarChartDemo from "@/components/docs/visualizations/bar-chart/bar-chart-demo"
import { Avatar } from "@/components/ui/avatar"
import { Button, buttonStyles } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox, CheckboxGroup, CheckboxLabel } from "@/components/ui/checkbox"
import { ComboBox, ComboBoxContent, ComboBoxInput, ComboBoxItem } from "@/components/ui/combo-box"
import { Description, Fieldset, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Link } from "@/components/ui/link"
import { Radio, RadioGroup } from "@/components/ui/radio"
import {
  Select,
  SelectContent,
  SelectDescription,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select"
import { Switch, SwitchLabel } from "@/components/ui/switch"
import { TextField } from "@/components/ui/text-field"

export function Blocks() {
  return (
    <div className="grid gap-1 **:data-[slot=card]:rounded-md">
      <div className="mt-1 grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3">
        <Card className="flex flex-col items-center justify-center gap-y-6 p-6">
          <div className="grid grid-cols-2 gap-2">
            {Object.keys(buttonStyles.variants.intent).map((intent) => (
              <Button key={intent} intent={intent as keyof typeof buttonStyles.variants.intent}>
                <HomeIcon /> Label
              </Button>
            ))}
          </div>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Don't loose the level, just keep on going.</CardDescription>
          </CardHeader>
          <CardContent>
            <Fieldset>
              <TextField isRequired>
                <Label>Email</Label>
                <Input placeholder="Enter your email" />
              </TextField>
              <TextField isRequired>
                <Label>Password</Label>
                <Input type="password" placeholder="Enter your password" />
              </TextField>
              <div data-slot="control" className="flex items-center justify-between">
                <Checkbox>Remember me</Checkbox>
                <Link className="text-base/6 sm:text-sm/6" href="#">
                  Forgot password?
                </Link>
              </div>
              <Button className="mt-6 w-full">Login</Button>
            </Fieldset>
          </CardContent>
        </Card>
        <Card className="flex items-center justify-center gap-2 p-6">
          <div className="space-y-2">
            <div className="flex flex-col gap-2 md:flex-row">
              <ModalDemo />
              <PopoverDemo />
              <MenuSubDemo />
            </div>
            <Select aria-label="Select a role" placeholder="Select a role">
              <SelectTrigger />
              <SelectContent items={roles}>
                {(item) => (
                  <SelectItem id={item.id} textValue={item.name}>
                    <SelectLabel>{item.name}</SelectLabel>
                    <SelectDescription>{item.description}</SelectDescription>
                  </SelectItem>
                )}
              </SelectContent>
            </Select>
            <ComboBox aria-label="Select a user">
              <ComboBoxInput placeholder="Select a user" />
              <ComboBoxContent items={users}>
                {(item) => (
                  <ComboBoxItem id={item.id} textValue={item.name}>
                    <Avatar src={item.image_url} />
                    {item.name}
                  </ComboBoxItem>
                )}
              </ComboBoxContent>
            </ComboBox>
          </div>
        </Card>
        <Card className="hidden items-center justify-center p-6 sm:flex">
          <RangeCalendarControlledDemo />
        </Card>
        <Card className="flex items-center justify-center p-6">
          <RadioGroup defaultValue="highSecurity" aria-label="Security settings">
            <Radio value="highSecurity">
              <Label>High security</Label>
              <Description>Set all protections to maximum.</Description>
            </Radio>
            <CheckboxGroup
              aria-label="Advanced Security Features"
              defaultValue={["encryption", "firewall"]}
              className="ml-6"
            >
              <Checkbox value="encryption">
                <CheckboxLabel>Encryption</CheckboxLabel>
                <Description>Encrypt all data at rest and in transit.</Description>
              </Checkbox>
              <Checkbox value="firewall">
                <CheckboxLabel>Firewall</CheckboxLabel>
                <Description>Enable network firewall.</Description>
              </Checkbox>
            </CheckboxGroup>

            <Radio value="balancedSecurity">
              <Label>Balanced security</Label>
              <Description>Balance between protection and performance.</Description>
            </Radio>
            <Radio value="lowSecurity">
              <Label>Low security</Label>
              <Description>Minimal protection enabled.</Description>
            </Radio>
          </RadioGroup>
        </Card>
        <Card className="grid place-content-center">
          <Switch aria-label="Dark mode">
            {({ isSelected }) => (
              <>
                <SwitchLabel>Dark mode</SwitchLabel>
                <Description>
                  {isSelected ? "Dark theme is enabled" : "Light theme is currently active"}
                </Description>
              </>
            )}
          </Switch>

          <Switch aria-label="Location services">
            {({ isSelected }) => (
              <>
                <SwitchLabel>Location services</SwitchLabel>
                <Description>
                  {isSelected ? "Apps can access your location" : "Location access is disabled"}
                </Description>
              </>
            )}
          </Switch>

          <Switch isDisabled isSelected aria-label="Email notifications">
            {({ isSelected }) => (
              <>
                <SwitchLabel>Email notifications</SwitchLabel>
                <Description>
                  {isSelected
                    ? "You will receive email notifications"
                    : "Email notifications are turned off"}
                </Description>
              </>
            )}
          </Switch>
        </Card>
      </div>
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
        <AreaChartDemo />
        <BarChartDemo />
      </div>
    </div>
  )
}
