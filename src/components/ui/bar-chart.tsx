"use client"

import { type ComponentProps, startTransition } from "react"
import { Bar, BarChart as BarChartPrimitive } from "recharts"
import type { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent"
import {
  type BaseChartProps,
  CartesianGrid,
  Chart,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  constructCategoryColors,
  DEFAULT_COLORS,
  getColorValue,
  valueToPercent,
  XAxis,
  YAxis,
} from "./chart"

export interface BarChartProps<TValue extends ValueType, TName extends NameType>
  extends BaseChartProps<TValue, TName> {
  barCategoryGap?: number
  barRadius?: number
  barGap?: number
  barSize?: number
  barProps?: Partial<React.ComponentProps<typeof Bar>>

  chartProps?: Omit<ComponentProps<typeof BarChartPrimitive>, "data" | "stackOffset">
}

export function BarChart<TValue extends ValueType, TName extends NameType>({
  data = [],
  dataKey,
  colors = DEFAULT_COLORS,
  type = "default",
  config,
  children,
  layout = "horizontal",

  // Components
  tooltip = true,
  tooltipProps,

  legend = true,
  legendProps,

  intervalType = "equidistantPreserveStart",

  barCategoryGap = 5,
  barGap,
  barSize,
  barRadius,
  barProps,

  valueFormatter = (value: number) => value.toString(),

  // XAxis
  displayEdgeLabelsOnly = false,
  xAxisProps,
  hideXAxis = false,

  // YAxis
  yAxisProps,
  hideYAxis = false,

  hideGridLines = false,
  chartProps,

  ...props
}: BarChartProps<TValue, TName>) {
  const categoryColors = constructCategoryColors(Object.keys(config), colors)

  const stacked = type === "stacked" || type === "percent"
  return (
    <Chart config={config} data={data} dataKey={dataKey} layout={layout} {...props}>
      {({ onLegendSelect, selectedLegend }) => (
        <BarChartPrimitive
          onClick={() => {
            onLegendSelect(null)
          }}
          data={data}
          margin={{
            bottom: 0,
            left: 5,
            right: 0,
            top: 5,
          }}
          layout={layout === "radial" ? "horizontal" : layout}
          barGap={barGap}
          barSize={barSize}
          barCategoryGap={barCategoryGap}
          stackOffset={type === "percent" ? "expand" : stacked ? "sign" : undefined}
          {...chartProps}
        >
          {!hideGridLines && <CartesianGrid strokeDasharray="4 4" />}
          <XAxis
            hide={hideXAxis}
            className="**:[text]:fill-muted-fg"
            displayEdgeLabelsOnly={displayEdgeLabelsOnly}
            intervalType={intervalType}
            {...xAxisProps}
          />
          <YAxis
            hide={hideYAxis}
            className="**:[text]:fill-muted-fg"
            tickFormatter={type === "percent" ? valueToPercent : valueFormatter}
            {...yAxisProps}
          />

          {legend && (
            <ChartLegend
              content={typeof legend === "boolean" ? <ChartLegendContent /> : legend}
              {...legendProps}
            />
          )}

          {tooltip && (
            <ChartTooltip
              content={
                typeof tooltip === "boolean" ? <ChartTooltipContent accessibilityLayer /> : tooltip
              }
              {...tooltipProps}
            />
          )}

          {!children
            ? Object.entries(config).map(([category, values]) => {
                return (
                  <Bar
                    key={category}
                    name={category}
                    dataKey={category}
                    stroke={getColorValue(values.color || categoryColors.get(category))}
                    strokeWidth={1}
                    stackId={stacked ? "stack" : undefined}
                    onClick={(_item, _number, event) => {
                      event.stopPropagation()

                      startTransition(() => {
                        onLegendSelect(category)
                      })
                    }}
                    radius={barRadius ?? (stacked ? undefined : 4)}
                    strokeOpacity={selectedLegend && selectedLegend !== category ? 0.2 : 0}
                    fillOpacity={selectedLegend && selectedLegend !== category ? 0.1 : 1}
                    fill={getColorValue(values.color || categoryColors.get(category))}
                    {...barProps}
                  />
                )
              })
            : children}
        </BarChartPrimitive>
      )}
    </Chart>
  )
}
