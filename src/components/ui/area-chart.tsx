"use client"

import { type ComponentProps, Fragment, useId, useMemo } from "react"
import { Area, AreaChart as AreaChartPrimitive } from "recharts"
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

const slugRegExp = /[^a-zA-Z0-9]/g

const fillNone = <stop stopColor="currentColor" stopOpacity={0} />

const fillGradientEnd = <stop offset="95%" stopColor="currentColor" stopOpacity={0} />

function getFillContent({
  fillType,
  stopOpacity,
}: {
  fillType: AreaChartProps<any, any>["fillType"]
  stopOpacity: number
}): React.ReactNode {
  switch (fillType) {
    case "none":
      return fillNone
    case "gradient":
      return (
        <>
          <stop offset="5%" stopColor="currentColor" stopOpacity={stopOpacity} />
          {fillGradientEnd}
        </>
      )
    default:
      return <stop stopColor="currentColor" stopOpacity={stopOpacity} />
  }
}

export interface AreaChartProps<TValue extends ValueType, TName extends NameType>
  extends BaseChartProps<TValue, TName> {
  chartProps?: Omit<ComponentProps<typeof AreaChartPrimitive>, "data" | "stackOffset">
  areaProps?: Partial<ComponentProps<typeof Area>>
  connectNulls?: boolean
  fillType?: "gradient" | "solid" | "none"
}

export function AreaChart<TValue extends ValueType, TName extends NameType>({
  data = [],
  dataKey,
  colors = DEFAULT_COLORS,
  connectNulls = false,
  type = "default",

  fillType = "gradient",
  config,
  children,

  areaProps,

  // Components
  tooltip = true,
  tooltipProps,

  cartesianGridProps,

  legend = true,
  legendProps,

  intervalType = "equidistantPreserveStart",

  valueFormatter = (value: number) => value.toString(),

  // XAxis
  displayEdgeLabelsOnly = false,
  hideXAxis = false,
  xAxisProps,

  // YAxis
  hideYAxis = false,
  yAxisProps,

  hideGridLines = false,
  chartProps,
  ...props
}: AreaChartProps<TValue, TName>) {
  const configKeys = useMemo(() => Object.keys(config), [config])
  const categoryColors = useMemo(
    () => constructCategoryColors(configKeys, colors),
    [configKeys, colors],
  )
  const stacked = type === "stacked" || type === "percent"
  const areaId = useId()

  const configEntries = useMemo(() => Object.entries(config), [config])

  return (
    <Chart config={config} data={data} dataKey={dataKey} {...props}>
      {({ onLegendSelect, selectedLegend }) => (
        <AreaChartPrimitive
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
          {!hideGridLines && <CartesianGrid {...cartesianGridProps} strokeDasharray="3 3" />}
          <XAxis
            className="**:[text]:fill-muted-fg"
            hide={hideXAxis}
            displayEdgeLabelsOnly={displayEdgeLabelsOnly}
            intervalType={intervalType}
            {...xAxisProps}
          />
          <YAxis
            className="**:[text]:fill-muted-fg"
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
                typeof tooltip === "boolean" ? (
                  <ChartTooltipContent
                    {...{
                      hideIndicator: tooltipProps?.hideIndicator,
                      hideLabel: tooltipProps?.hideLabel,
                      cursor: tooltipProps?.cursor,
                      indicator: tooltipProps?.indicator,
                      labelSeparator: tooltipProps?.labelSeparator,
                      formatter: tooltipProps?.formatter,
                      labelFormatter: tooltipProps?.labelFormatter,
                    }}
                    accessibilityLayer
                  />
                ) : (
                  tooltip
                )
              }
              {...tooltipProps}
            />
          )}

          {!children
            ? configEntries.map(([category, values]) => {
                const categoryId = `${areaId}-${category.replace(slugRegExp, "")}`
                const strokeOpacity = selectedLegend && selectedLegend !== category ? 0.1 : 1
                const stopOpacity = selectedLegend && selectedLegend !== category ? 0.1 : 0.5
                const color = getColorValue(values.color || categoryColors.get(category))

                return (
                  <Fragment key={categoryId}>
                    <defs>
                      <linearGradient style={{ color }} id={categoryId} x1="0" y1="0" x2="0" y2="1">
                        {getFillContent({ fillType, stopOpacity })}
                      </linearGradient>
                    </defs>
                    <Area
                      dot={false}
                      name={category}
                      dataKey={category}
                      stroke={color}
                      style={{
                        strokeWidth: 2,
                        strokeOpacity,
                      }}
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      isAnimationActive={true}
                      connectNulls={connectNulls}
                      stackId={stacked ? "stack" : undefined}
                      fill={`url(#${categoryId})`}
                      {...areaProps}
                    />
                  </Fragment>
                )
              })
            : children}
        </AreaChartPrimitive>
      )}
    </Chart>
  )
}
