"use client"

import { Line, LineChart as LineChartPrimitive, type LineProps } from "recharts"
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

export interface LineChartProps<TValue extends ValueType, TName extends NameType>
  extends BaseChartProps<TValue, TName> {
  connectNulls?: boolean
  lineProps?: LineProps
  chartProps?: Omit<React.ComponentProps<typeof LineChartPrimitive>, "data" | "stackOffset">
}

export function LineChart<TValue extends ValueType, TName extends NameType>({
  data = [],
  dataKey,
  colors = DEFAULT_COLORS,
  connectNulls = false,
  type = "default",
  config,
  children,

  // Components
  tooltip = true,
  tooltipProps,

  legend = true,
  legendProps,

  intervalType = "equidistantPreserveStart",

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
  lineProps,
  ...props
}: LineChartProps<TValue, TName>) {
  const categoryColors = constructCategoryColors(Object.keys(config), colors)

  return (
    <Chart config={config} data={data} dataKey={dataKey} {...props}>
      {({ onLegendSelect, selectedLegend }) => (
        <LineChartPrimitive
          onClick={() => {
            onLegendSelect(null)
          }}
          data={data}
          margin={{
            bottom: 0,
            left: 0,
            right: 0,
            top: 5,
          }}
          stackOffset={type === "percent" ? "expand" : undefined}
          {...chartProps}
        >
          {!hideGridLines && <CartesianGrid strokeDasharray="4 4" />}
          <XAxis
            hide={hideXAxis}
            displayEdgeLabelsOnly={displayEdgeLabelsOnly}
            intervalType={intervalType}
            {...xAxisProps}
          />
          <YAxis
            hide={hideYAxis}
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
                const strokeOpacity = selectedLegend && selectedLegend !== category ? 0.1 : 1

                return (
                  <Line
                    key={category}
                    dot={false}
                    name={category}
                    type="linear"
                    dataKey={category}
                    stroke={getColorValue(values.color || categoryColors.get(category))}
                    style={
                      {
                        strokeOpacity,
                        strokeWidth: 2,
                        "--line-color": getColorValue(values.color || categoryColors.get(category)),
                      } as React.CSSProperties
                    }
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    connectNulls={connectNulls}
                    {...lineProps}
                  />
                )
              })
            : children}
        </LineChartPrimitive>
      )}
    </Chart>
  )
}
