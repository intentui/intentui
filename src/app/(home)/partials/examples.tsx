"use client"

import { BlocksCard } from "@/app/(home)/partials/blocks"
import ChoiceboxDemo from "@/components/docs/collections/choicebox/choicebox-demo"
import TableDemo from "@/components/docs/collections/table/table-demo"
import AreaChartDemo from "@/components/docs/visualizations/area-chart/area-chart-demo"
import BarChartDemo from "@/components/docs/visualizations/bar-chart/bar-chart-demo"
import BarListDemo from "@/components/docs/visualizations/bar-list/bar-list-demo"
import LineChartDemo from "@/components/docs/visualizations/line-chart/line-chart-demo"
import { PageContainer } from "@/components/page-container"
import { Button } from "@/components/ui/button"
import { CardHeader } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Description, Label } from "@/components/ui/field"
import { TextField } from "@/components/ui/text-field"
import { Textarea } from "@/components/ui/textarea"

export function Examples() {
  return (
    <div className="-mt-4 border-b pt-6 sm:pt-12">
      <PageContainer>
        <CardHeader
          className="max-w-lg"
          title="Visual examples"
          description="Explore foundational components commonly used across web applications."
        />
      </PageContainer>
      <PageContainer className="mt-6 flex snap-x gap-4 overflow-x-auto pb-6 *:shrink-0 *:snap-center sm:pb-12">
        <BlocksCard className="w-full lg:w-1/3">
          <div className="flex flex-col gap-y-6">
            <CardHeader title="Sign in" description="Enter your email and password to sign in." />
            <TextField label="Email" type="email" placeholder="you@domain.com" />
            <TextField label="Password" type="password" isRevealable placeholder="Shhh..." />
            <Checkbox>
              <Label>Remember me</Label>
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
              title="Products"
              description="Manage product details, pricing, and availability."
            />
            <TableDemo />
          </div>
        </BlocksCard>
        <BlocksCard className="w-full lg:w-1/2">
          <div className="flex w-full flex-col gap-y-6">
            <CardHeader
              title="Packages"
              description="Select a package to view details, pricing, and availability."
            />
            <ChoiceboxDemo />
          </div>
        </BlocksCard>
        <BlocksCard className="w-full lg:w-2/5">
          <div className="flex w-full flex-col gap-y-6">
            <CardHeader
              title="Settings"
              description="Update your profile information and preferences."
            />
            <TextField label="Name" placeholder="Irsyad A. Panjaitan" />
            <TextField label="Email" type="email" placeholder="you@domain.com" />
            <Textarea label="Bio" placeholder="Introduce your self." />
            <Button className="self-end">Save changes</Button>
          </div>
        </BlocksCard>
      </PageContainer>
      <PageContainer className="mt-6 flex snap-x gap-4 overflow-x-auto pb-6 *:shrink-0 *:snap-center **:data-[slot=card]:border-transparent **:data-[slot=card]:bg-transparent **:data-[slot=card]:shadow-none sm:pb-12">
        <div className="w-full rounded-lg border bg-secondary/50 lg:w-1/2">
          <AreaChartDemo />
        </div>
        <div className="w-full rounded-lg border bg-secondary/50 lg:w-1/2">
          <LineChartDemo />
        </div>
        <div className="w-full rounded-lg border bg-secondary/50 lg:w-1/2">
          <BarChartDemo />
        </div>
        <div className="w-full rounded-lg border bg-secondary/50 lg:w-1/3">
          <BarListDemo />
        </div>
      </PageContainer>
    </div>
  )
}
