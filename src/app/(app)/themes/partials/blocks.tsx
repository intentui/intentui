import { IconDashboard } from "@intentui/icons"
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
import { Card } from "@/components/ui/card"
import { Checkbox, CheckboxGroup } from "@/components/ui/checkbox"
import { ComboBox } from "@/components/ui/combo-box"
import { Description, Label } from "@/components/ui/field"
import { Link } from "@/components/ui/link"
import { Radio, RadioGroup } from "@/components/ui/radio"
import { Select } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { TextField } from "@/components/ui/text-field"

export function Blocks() {
  return (
    <div className="grid gap-1 **:data-[slot=card]:rounded-md">
      <div className="mt-1 grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3">
        <Card className="flex flex-col items-center justify-center gap-y-6 p-6">
          <div className="grid grid-cols-2 gap-2">
            {Object.keys(buttonStyles.variants.intent).map((intent) => (
              <Button
                key={intent}
                intent={intent as keyof typeof buttonStyles.variants.intent}
              >
                <IconDashboard /> Label
              </Button>
            ))}
          </div>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Login</Card.Title>
            <Card.Description>
              Don't loose the level, just keep on going.
            </Card.Description>
          </Card.Header>
          <Card.Content className="space-y-6">
            <TextField isRequired label="Email" placeholder="Enter your email" />
            <TextField
              isRequired
              label="Password"
              isRevealable
              type="password"
              placeholder="Enter your password"
            />
            <div className="flex items-center justify-between">
              <Checkbox>Remember me</Checkbox>
              <Link intent="primary" className="text-sm" href="#">
                Forgot password?
              </Link>
            </div>
          </Card.Content>
          <Card.Footer>
            <Button className="w-full">Login</Button>
          </Card.Footer>
        </Card>
        <Card className="flex items-center justify-center gap-2 p-6">
          <div className="space-y-2">
            <div className="flex flex-col gap-2 md:flex-row">
              <ModalDemo />
              <PopoverDemo />
              <MenuSubDemo />
            </div>
            <Select aria-label="Select a role" placeholder="Select a role">
              <Select.Trigger />
              <Select.List items={roles}>
                {(item) => (
                  <Select.Option id={item.id} textValue={item.name}>
                    <Select.Label>{item.name}</Select.Label>
                    <Select.Description>{item.description}</Select.Description>
                  </Select.Option>
                )}
              </Select.List>
            </Select>
            <ComboBox placeholder="Select a user" aria-label="Select a user">
              <ComboBox.Input />
              <ComboBox.List items={users}>
                {(item) => (
                  <ComboBox.Option id={item.id} textValue={item.name}>
                    <Avatar src={item.image_url} />
                    {item.name}
                  </ComboBox.Option>
                )}
              </ComboBox.List>
            </ComboBox>
          </div>
        </Card>
        <Card className="hidden items-center justify-center p-6 sm:flex">
          <RangeCalendarControlledDemo />
        </Card>
        <Card className="flex items-center justify-center p-6">
          <RadioGroup defaultValue="highSecurity" aria-label="Security settings">
            <Radio
              value="highSecurity"
              label="High security"
              description="Set all protections to maximum."
            />
            <CheckboxGroup
              aria-label="Advanced Security Features"
              defaultValue={["encryption", "firewall"]}
              className="ml-6"
            >
              <Checkbox
                value="encryption"
                label="Encryption"
                description="Encrypt all data at rest and in transit."
              />
              <Checkbox
                value="firewall"
                label="Firewall"
                description="Enable network firewall."
              />
            </CheckboxGroup>

            <Radio
              value="balancedSecurity"
              label="Balanced security"
              description="Balance between protection and performance."
            />
            <Radio
              value="lowSecurity"
              label="Low security"
              description="Minimal protection enabled."
            />
          </RadioGroup>
        </Card>
        <Card className="grid place-content-center">
          <Switch aria-label="Dark mode">
            {({ isSelected }) => (
              <>
                <Label>Dark mode</Label>
                <Description>
                  {isSelected
                    ? "Dark theme is enabled"
                    : "Light theme is currently active"}
                </Description>
              </>
            )}
          </Switch>

          <Switch aria-label="Location services">
            {({ isSelected }) => (
              <>
                <Label>Location services</Label>
                <Description>
                  {isSelected
                    ? "Apps can access your location"
                    : "Location access is disabled"}
                </Description>
              </>
            )}
          </Switch>

          <Switch isDisabled isSelected aria-label="Email notifications">
            {({ isSelected }) => (
              <>
                <Label>Email notifications</Label>
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
