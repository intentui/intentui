'use client'

import { type ComponentProps, type ReactNode, useMemo } from 'react'
import { PolarAngleAxis, RadialBar, RadialBarChart as RadialBarChartPrimitive } from 'recharts'
import {
  type BaseChartProps,
  Chart,
  type ChartConfig,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  constructCategoryColors,
  DEFAULT_COLORS,
  getColorValue,
} from './chart'

export interface RadialBarChartSeries {
  dataKey: string
  name?: string
  radialBarProps?: Omit<ComponentProps<typeof RadialBar>, 'dataKey' | 'name'>
}

export interface RadialBarChartProps extends Omit<ComponentProps<'div'>, 'children'> {
  config: ChartConfig
  data: Record<string, any>[]
  dataKey: string
  nameKey?: string
  series: RadialBarChartSeries[]
  colors?: readonly string[]
  containerHeight?: number
  legend?: BaseChartProps['legend']
  legendProps?: BaseChartProps['legendProps']
  tooltip?: boolean | ComponentProps<typeof ChartTooltip>['content']
  tooltipProps?: Omit<ComponentProps<typeof ChartTooltip>, 'content'>
  angleAxisProps?: ComponentProps<typeof PolarAngleAxis>
  chartProps?: Omit<ComponentProps<typeof RadialBarChartPrimitive>, 'data'>
  children?: ReactNode
}

export function RadialBarChart({
  config,
  data,
  dataKey,
  nameKey,
  series,
  colors = DEFAULT_COLORS,
  containerHeight = 360,
  legend = series.length > 1,
  legendProps,
  tooltip = true,
  tooltipProps,
  angleAxisProps,
  chartProps,
  children,
  ...props
}: RadialBarChartProps) {
  const seriesKeys = useMemo(() => series.map((item) => item.dataKey), [series])
  const categoryColors = useMemo(
    () => constructCategoryColors(seriesKeys, colors),
    [seriesKeys, colors]
  )
  const usesDataColors = series.length === 1 && typeof series[0]?.radialBarProps?.fill !== 'string'
  const chartData = useMemo(() => {
    if (!usesDataColors) {
      return data
    }

    return data.map((item, index) => {
      if (typeof item.fill === 'string') {
        return item
      }

      const category = nameKey && typeof item[nameKey] === 'string' ? item[nameKey] : undefined

      return {
        ...item,
        fill: getColorValue(
          (category ? config[category]?.color : undefined) ?? colors[index % colors.length]
        ),
      }
    })
  }, [colors, config, data, nameKey, usesDataColors])
  const legendPayload = series.map((item, index) => ({
    color:
      typeof item.radialBarProps?.fill === 'string'
        ? item.radialBarProps.fill
        : getColorValue(
            config[item.dataKey]?.color ??
              categoryColors.get(item.dataKey) ??
              colors[index % colors.length]
          ),
    dataKey: item.dataKey,
    type: 'circle' as const,
    value: item.name ?? item.dataKey,
  }))

  return (
    <Chart
      config={config}
      data={chartData}
      dataKey={dataKey}
      containerHeight={containerHeight}
      layout="radial"
      {...props}
    >
      {({ selectedLegend }) => (
        <RadialBarChartPrimitive data={chartData} {...chartProps}>
          {angleAxisProps ? (
            <PolarAngleAxis type="number" tick={false} {...angleAxisProps} />
          ) : null}
          {children}
          {tooltip ? (
            <ChartTooltip
              cursor={false}
              content={
                typeof tooltip === 'boolean' ? (
                  <ChartTooltipContent hideLabel accessibilityLayer />
                ) : (
                  tooltip
                )
              }
              {...tooltipProps}
            />
          ) : null}
          {legend ? (
            <ChartLegend
              content={
                typeof legend === 'boolean'
                  ? (contentProps) => (
                      <ChartLegendContent
                        align={contentProps.align}
                        verticalAlign={contentProps.verticalAlign}
                        payload={legendPayload}
                      />
                    )
                  : legend
              }
              {...legendProps}
            />
          ) : null}
          {series.map((item, index) => {
            const fill = usesDataColors
              ? undefined
              : getColorValue(
                  config[item.dataKey]?.color ??
                    categoryColors.get(item.dataKey) ??
                    colors[index % colors.length]
                )
            const isDimmed = selectedLegend && selectedLegend !== item.dataKey
            const { fillOpacity = 1, ...radialBarProps } = item.radialBarProps ?? {}

            return (
              <RadialBar
                key={item.dataKey}
                dataKey={item.dataKey}
                name={item.name ?? item.dataKey}
                fill={fill}
                fillOpacity={isDimmed ? 0.12 : fillOpacity}
                {...radialBarProps}
              />
            )
          })}
        </RadialBarChartPrimitive>
      )}
    </Chart>
  )
}
