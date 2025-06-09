import AreaChartGradientDemo from "@/components/docs/charts/area/area-chart-gradient-demo"
import BarChartMultipleDemo from "@/components/docs/charts/bar/bar-chart-multiple-demo"
import PieChartDonutWithTextDemo from "@/components/docs/charts/pie/pie-chart-donut-with-text-demo"
import RadialBarChartGridDemo from "@/components/docs/charts/radial-bar/radial-bar-chart-grid-demo"
import MenuSubDemo from "@/components/docs/collections/menu/menu-sub-demo"
import RangeCalendarControlledDemo from "@/components/docs/date-and-time/calendar/range-calendar-controlled-demo"
import ModalDemo from "@/components/docs/overlays/modal/modal-demo"
import PopoverDemo from "@/components/docs/overlays/popover/popover-demo"
import { users } from "@/components/docs/pickers/combo-box/combo-box-avatar-demo"
import { roles } from "@/components/docs/pickers/select/select-details-description-demo"
import { Avatar } from "@/components/ui/avatar"
import { Button, buttonStyles } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox, CheckboxGroup } from "@/components/ui/checkbox"
import { Choicebox } from "@/components/ui/choicebox"
import { ComboBox } from "@/components/ui/combo-box"
import { Link } from "@/components/ui/link"
import { Radio, RadioGroup } from "@/components/ui/radio"
import { Select } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { TextField } from "@/components/ui/text-field"
import { IconDashboard } from "@intentui/icons"

export function Blocks() {
  return (
    <div className="grid gap-1 **:data-[slot=card]:rounded-md">
      <div className="mt-1 grid gap-1 sm:grid-cols-2 md:grid-cols-3">
        <Card className="flex flex-col items-center justify-center gap-y-6 p-6">
          <div className="grid grid-cols-2 gap-2">
            {Object.keys(buttonStyles.variants.intent).map((intent) => (
              <Button key={intent} intent={intent as keyof typeof buttonStyles.variants.intent}>
                <IconDashboard /> Label
              </Button>
            ))}
          </div>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Login</Card.Title>
            <Card.Description>Don't loose the level, just keep on going.</Card.Description>
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
            {/*<BadgeIntentDemo/>*/}
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
        <Card className="flex items-center justify-center p-6">
          <RangeCalendarControlledDemo />
        </Card>
        <Card className="flex items-center justify-center p-6">
          <RadioGroup defaultValue="highSecurity" aria-label="Security settings">
            <Radio value="highSecurity" description="Set security settings to high.">
              High Security
            </Radio>
            <CheckboxGroup
              aria-label="Encryption and Firewall"
              defaultValue={["encryption"]}
              className="ml-6"
            >
              <Checkbox value="encryption" description="Enable encryption.">
                Encryption
              </Checkbox>
              <Checkbox value="firewall" description="Enable firewall protection.">
                Firewall
              </Checkbox>
            </CheckboxGroup>
            <Radio value="lowSecurity" description="Set security settings to low.">
              Low Security
            </Radio>
          </RadioGroup>
        </Card>
        <Card className="flex items-center justify-center p-6">
          <Switch>
            {({ isSelected }) => <>{isSelected ? "Enabled" : "Disabled"} Auto Updates</>}
          </Switch>
        </Card>
        <Card className="flex items-center justify-center p-6">
          <Choicebox
            defaultSelectedKeys={["standard", "pro"]}
            columns={1}
            gap={2}
            aria-label="Select items"
            selectionMode="multiple"
          >
            <Choicebox.Item
              id="standard"
              label="Standard"
              description="Perfect for growing your team."
            />
            <Choicebox.Item id="pro" label="Pro" description="Includes all advanced tools." />
            <Choicebox.Item
              id="enterprise"
              label="Enterprise"
              description="Custom solutions for large organizations."
            />
          </Choicebox>
        </Card>
        <PieChartDonutWithTextDemo />
        <RadialBarChartGridDemo />
      </div>
      <div className="grid gap-1 sm:grid-cols-2">
        <AreaChartGradientDemo />
        <BarChartMultipleDemo />
      </div>
    </div>
  )
}
