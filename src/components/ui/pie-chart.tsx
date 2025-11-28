"use client"

import type { ComponentProps } from "react"
import { Cell, Pie, PieChart as PieChartPrimitive } from "recharts"
import type { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent"
import {
  type BaseChartProps,
  Chart,
  ChartTooltip,
  ChartTooltipContent,
  DEFAULT_COLORS,
  getColorValue,
} from "./chart"

const sumNumericArray = (arr: number[]): number => arr.reduce((sum, num) => sum + num, 0)

const calculateDefaultLabel = (data: any[], valueKey: string): number =>
  sumNumericArray(data.map((dataPoint) => dataPoint[valueKey]))

const parseLabelInput = (
  labelInput: string | undefined,
  valueFormatter: (value: number) => string,
  data: any[],
  valueKey: string,
): string => labelInput || valueFormatter(calculateDefaultLabel(data, valueKey))

interface PieChartProps<TValue extends ValueType, TName extends NameType>
  extends Omit<
    BaseChartProps<TValue, TName>,
    | "hideGridLines"
    | "hideXAxis"
    | "hideYAxis"
    | "xAxisProps"
    | "yAxisProps"
    | "displayEdgeLabelsOnly"
    | "legend"
    | "legendProps"
  > {
  variant?: "pie" | "donut"
  nameKey?: string

  chartProps?: Omit<ComponentProps<typeof PieChartPrimitive>, "data" | "stackOffset">

  label?: string
  showLabel?: boolean
  pieProps?: Omit<ComponentProps<typeof Pie>, "data" | "dataKey" | "name">
}

const PieChart = <TValue extends ValueType, TName extends NameType>({
  data = [],
  dataKey,
  colors = DEFAULT_COLORS,
  config,
  children,
  label,
  showLabel,

  // Components
  tooltip = true,
  tooltipProps,

  variant = "pie",
  nameKey,

  chartProps,

  valueFormatter = (value: number) => value.toString(),
  pieProps,
  ...props
}: PieChartProps<TValue, TName>) => {
  const parsedLabelInput = parseLabelInput(label, valueFormatter, data, dataKey)

  return (
    <Chart config={config} data={data} layout="radial" dataKey={dataKey} {...props}>
      {({ onLegendSelect }) => (
        <PieChartPrimitive
          data={data}
          onClick={() => {
            onLegendSelect(null)
          }}
          margin={{
            bottom: 0,
            left: 0,
            right: 0,
            top: 0,
          }}
          {...chartProps}
        >
          {showLabel && variant === "donut" && (
            <text
              className="fill-fg font-semibold"
              x="50%"
              data-slot="label"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {parsedLabelInput}
            </text>
          )}

          {!children ? (
            <Pie
              name={nameKey}
              dataKey={dataKey}
              data={data}
              cx={pieProps?.cx ?? "50%"}
              cy={pieProps?.cy ?? "50%"}
              startAngle={pieProps?.startAngle ?? 90}
              endAngle={pieProps?.endAngle ?? -270}
              strokeLinejoin="round"
              innerRadius={variant === "donut" ? "50%" : "0%"}
              isAnimationActive
              {...pieProps}
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={getColorValue(
                    config?.[data[index]?.code || data[index]?.name]?.color ??
                      colors[index % colors.length],
                  )}
                />
              ))}
            </Pie>
          ) : (
            children
          )}

          {tooltip && (
            <ChartTooltip
              content={
                typeof tooltip === "boolean" ? (
                  <ChartTooltipContent hideLabel labelSeparator={false} accessibilityLayer />
                ) : (
                  tooltip
                )
              }
              {...tooltipProps}
            />
          )}
        </PieChartPrimitive>
      )}
    </Chart>
  )
}

export type { PieChartProps }
export { PieChart }
