'use client'

import type { ComponentProps } from 'react'
import { Cell, Pie, PieChart as PieChartPrimitive } from 'recharts'
import {
  type BaseChartProps,
  Chart,
  ChartTooltip,
  ChartTooltipContent,
  DEFAULT_COLORS,
  getColorValue,
} from './chart'

type PieChartDatum = BaseChartProps['data'][number]

function sumNumericArray(arr: number[]): number {
  return arr.reduce((sum, num) => sum + num, 0)
}

function calculateDefaultLabel(data: BaseChartProps['data'], valueKey: string): number {
  return sumNumericArray(
    data.map((dataPoint) => {
      const value = dataPoint[valueKey]
      return typeof value === 'number' ? value : 0
    })
  )
}

function parseLabelInput(
  labelInput: string | undefined,
  valueFormatter: (value: number) => string,
  data: BaseChartProps['data'],
  valueKey: string
): string {
  return labelInput || valueFormatter(calculateDefaultLabel(data, valueKey))
}

interface PieChartProps extends Omit<
  BaseChartProps,
  | 'hideGridLines'
  | 'hideXAxis'
  | 'hideYAxis'
  | 'xAxisProps'
  | 'yAxisProps'
  | 'displayEdgeLabelsOnly'
  | 'legend'
  | 'legendProps'
> {
  variant?: 'pie' | 'donut'
  nameKey?: string

  chartProps?: Omit<ComponentProps<typeof PieChartPrimitive>, 'data' | 'stackOffset'>

  label?: string
  showLabel?: boolean
  pieProps?: Omit<ComponentProps<typeof Pie>, 'data' | 'dataKey' | 'name'>
}

const PieChart = ({
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

  variant = 'pie',
  nameKey,

  chartProps,

  valueFormatter = (value: number) => value.toString(),
  pieProps,
  ...props
}: PieChartProps) => {
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
          {showLabel && variant === 'donut' && (
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
              cx={pieProps?.cx ?? '50%'}
              cy={pieProps?.cy ?? '50%'}
              startAngle={pieProps?.startAngle ?? 90}
              endAngle={pieProps?.endAngle ?? -270}
              strokeLinejoin="round"
              innerRadius={variant === 'donut' ? '50%' : '0%'}
              isAnimationActive
              {...pieProps}
            >
              {data.map((datum: PieChartDatum, index: number) => {
                const configKey =
                  typeof datum.code === 'string'
                    ? datum.code
                    : typeof datum.name === 'string'
                      ? datum.name
                      : undefined

                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={getColorValue(
                      config?.[configKey ?? '']?.color ?? colors[index % colors.length]
                    )}
                  />
                )
              })}
            </Pie>
          ) : (
            children
          )}

          {tooltip && (
            <ChartTooltip
              content={
                typeof tooltip === 'boolean' ? (
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
