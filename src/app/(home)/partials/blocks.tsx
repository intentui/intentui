"use client"
import ComboBoxAvatarDemo from "@/components/docs/pickers/combo-box/combo-box-avatar-demo"

import { products } from "@/components/docs/collections/table/table-demo"
import TagGroupDemo from "@/components/docs/collections/tag-group/tag-group-demo"
import DatePickerDemo from "@/components/docs/date-and-time/date-picker/date-picker-demo"
import DateRangePickerDemo from "@/components/docs/date-and-time/date-range-picker/date-range-picker-demo"
import TextFieldDemo from "@/components/docs/forms/text-field/text-field-demo"
import TextareaDemo from "@/components/docs/forms/textarea/textarea-demo"
import PaginationDemo from "@/components/docs/navigation/pagination/pagination-demo"
import ModalDemo from "@/components/docs/overlays/modal/modal-demo"
import PopoverDemo from "@/components/docs/overlays/popover/popover-demo"
import SheetDemo from "@/components/docs/overlays/sheet/sheet-demo"
import SelectDemo from "@/components/docs/pickers/select/select-demo"
import SelectSearchableDemo from "@/components/docs/pickers/select/select-searchable-demo"
import { PageContainer } from "@/components/page-container"
import { buttonStyles } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox, CheckboxGroup } from "@/components/ui/checkbox"
import { Link } from "@/components/ui/link"
import { Menu } from "@/components/ui/menu"
import { Radio, RadioGroup } from "@/components/ui/radio"
import { Table } from "@/components/ui/table"
import { TimeField } from "@/components/ui/time-field"
import { IconArrowUpRight, IconDotsVertical } from "@intentui/icons"
import { Time } from "@internationalized/date"
import { NumberFormatter } from "@internationalized/number"
import { useState } from "react"

export function Blocks() {
  const [selectedRadio, setSelectedRadio] = useState("highSecurity")
  return (
    <PageContainer>
      <div className="mask-b-from-100% md:mask-b-from-60% lg:mask-b-from-70% grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="[--card-spacing:--spacing(4)]">
          <Card.Header title="Input" />
          <Card.Content>
            <div className="flex flex-col gap-y-4">
              <TextFieldDemo />
              <TextareaDemo />
              <TagGroupDemo />
            </div>
          </Card.Content>
        </Card>
        <Card className="[--card-spacing:--spacing(4)]">
          <Card.Header title="Pickers" />
          <Card.Content>
            <div className="flex flex-col gap-y-4">
              <SelectDemo />
              <SelectSearchableDemo />
              <ComboBoxAvatarDemo />
            </div>
          </Card.Content>
        </Card>
        <Card className="[--card-spacing:--spacing(4)]">
          <Card.Header title="Date and Time" />
          <Card.Content>
            <div className="flex flex-col gap-y-4">
              <DatePickerDemo />
              <DateRangePickerDemo />
              <div className="grid grid-cols-2 gap-4">
                <TimeField defaultValue={new Time()} label="Start time" />
                <TimeField defaultValue={new Time()} label="End time" />
              </div>
            </div>
          </Card.Content>
        </Card>
        <div className="flex flex-col gap-y-4">
          <Card className="[--card-spacing:--spacing(4)]">
            <Card.Header title="Dialog" />
            <Card.Content>
              <div className="flex flex-col gap-y-4">
                <ModalDemo />
                <SheetDemo />
                <PopoverDemo />
              </div>
            </Card.Content>
          </Card>
          <Card className="[--card-spacing:--spacing(4)]">
            {/*<Card.Header title="Control" />*/}
            <Card.Content>
              <RadioGroup
                aria-labelledby="security-settings"
                value={selectedRadio}
                onChange={setSelectedRadio}
              >
                <h2 id="security-settings" className="sr-only">
                  Security Settings
                </h2>
                <Radio value="highSecurity" description="Set security settings to high.">
                  High Security
                </Radio>
                <CheckboxGroup
                  aria-labelledby="notifications-preferences"
                  defaultValue={["email"]}
                  className="ml-4"
                  isDisabled={selectedRadio !== "highSecurity"}
                >
                  <h2 id="notifications-preferences" className="sr-only">
                    Notification Preferences
                  </h2>
                  <Checkbox value="email" description="Receive updates via email." isReadOnly>
                    Email Notifications
                  </Checkbox>
                  <Checkbox value="sms" description="Receive updates via SMS.">
                    SMS Notifications
                  </Checkbox>
                </CheckboxGroup>
                <Radio value="allNotifications" description="Receive all notifications.">
                  All Notifications
                </Radio>
                <Radio value="noNotifications" description="Do not receive any notifications." />
              </RadioGroup>
            </Card.Content>
          </Card>
        </div>
        <div className="md:col-span-2">
          <Card>
            <Card.Header
              title="Inventory"
              description="A detailed list of products with their categories, pricing, and current stock levels."
            />
            <Card.Content>
              <Table
                bleed
                className="[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]"
                aria-label="Products"
              >
                <Table.Header>
                  <Table.Column className="w-0">#</Table.Column>
                  <Table.Column isRowHeader>Name</Table.Column>
                  <Table.Column>Category</Table.Column>
                  <Table.Column>Price</Table.Column>
                  <Table.Column>Stock</Table.Column>
                  <Table.Column />
                </Table.Header>
                <Table.Body items={products}>
                  {(item) => (
                    <Table.Row id={item.id}>
                      <Table.Cell>{item.id}</Table.Cell>
                      <Table.Cell>{item.name}</Table.Cell>
                      <Table.Cell>{item.category}</Table.Cell>
                      <Table.Cell>
                        {new NumberFormatter("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(item.price)}
                      </Table.Cell>
                      <Table.Cell>{item.stock}</Table.Cell>
                      <Table.Cell>
                        <div className="flex justify-end">
                          <Menu>
                            <Menu.Trigger>
                              <IconDotsVertical />
                            </Menu.Trigger>
                            <Menu.Content aria-label="Actions" placement="left top">
                              <Menu.Item>View</Menu.Item>
                              <Menu.Item>Edit</Menu.Item>
                              <Menu.Separator />
                              <Menu.Item isDanger>Delete</Menu.Item>
                            </Menu.Content>
                          </Menu>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  )}
                </Table.Body>
              </Table>
            </Card.Content>
            <Card.Footer>
              <PaginationDemo />
            </Card.Footer>
          </Card>
        </div>
      </div>

      <div className="md:-mt-10 relative z-30 mt-10 flex items-center justify-center">
        <Link
          className={buttonStyles({ intent: "outline", className: "backdrop-blur-2xl" })}
          href="/components"
        >
          Show More
          <IconArrowUpRight />
        </Link>
      </div>
    </PageContainer>
  )
}
