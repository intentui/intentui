"use client"

import { BlocksCard } from "@/app/(home)/partials/blocks"
import ChoiceboxDemo from "@/components/examples/collections/choicebox/choicebox-example"
import TableExpandableDemo from "@/components/examples/collections/table/table-expandable-example"
import AreaChartDemo from "@/components/examples/visualizations/area-chart/area-chart-example"
import BarChartDemo from "@/components/examples/visualizations/bar-chart/bar-chart-example"
import LineChartDemo from "@/components/examples/visualizations/line-chart/line-chart-example"
import { PageContainer } from "@/components/page-container"
import { Button } from "@/components/ui/button"
import { CardHeader } from "@/components/ui/card"
import { Checkbox, CheckboxLabel } from "@/components/ui/checkbox"
import { Description, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { TextField } from "@/components/ui/text-field"

export function Examples() {
  return (
    <div className="-mt-4 pt-6 sm:pt-12">
      <PageContainer>
        <CardHeader
          className="max-w-lg"
          title="Common components"
          description="Explore foundational components commonly used across web applications."
        />
      </PageContainer>
      <PageContainer className="mt-6 sm:pb-12">
        <BlocksCard className="w-full lg:w-1/3">
          <div className="flex flex-col gap-y-6">
            <CardHeader title="Sign in" description="Enter your email and password to sign in." />
            <TextField name="email" autoComplete="email">
              <Label>Email</Label>
              <Input type="email" placeholder="you@domain.com" />
            </TextField>
            <TextField name="password">
              <Label>Password</Label>
              <Input type="password" placeholder="Shhh..." />
            </TextField>
            <Checkbox name="remember">
              <CheckboxLabel>Remember me</CheckboxLabel>
              <Description>
                Keep me signed in on this device. This will set a cookie to remember your
                preferences.
              </Description>
            </Checkbox>
            <Button>Sign in</Button>
          </div>
        </BlocksCard>
        <BlocksCard className="w-full lg:w-2/3">
          <div className="flex w-full flex-col gap-y-6">
            <CardHeader
              title="Projects"
              description="Track, manage, and update all your projects in one place."
            />
            <TableExpandableDemo />
          </div>
        </BlocksCard>
        <BlocksCard className="hidden lg:block lg:w-1/2">
          <div className="flex w-full flex-col gap-y-6">
            <CardHeader
              title="Packages"
              description="Select a package to view details, pricing, and availability."
            />
            <ChoiceboxDemo />
          </div>
        </BlocksCard>
      </PageContainer>
      <PageContainer className="mt-6">
        <CardHeader
          className="max-w-lg"
          title="Visualizations"
          description="Explore various data visualizations to represent information effectively."
        />
      </PageContainer>
      <div className="mt-6 border-page border-y">
        <PageContainer>
          <div className="grid grid-cols-1 gap-px border-page border-x bg-border/50 *:bg-bg **:data-[slot=card]:border-none **:data-[slot=card]:shadow-none lg:grid-cols-3">
            <div>
              <AreaChartDemo />
            </div>
            <div>
              <LineChartDemo />
            </div>
            <div>
              <BarChartDemo />
            </div>
          </div>
        </PageContainer>
      </div>
    </div>
  )
}
