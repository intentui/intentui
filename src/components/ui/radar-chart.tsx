'use client'

import { type ComponentProps, type ReactNode, useMemo } from 'react'
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as RadarChartPrimitive,
} from 'recharts'
import { useIsMobile } from '@/hooks/use-mobile'
import {
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

export interface RadarChartSeries {
  dataKey: string
  name?: string
  radarProps?: Omit<ComponentProps<typeof Radar>, 'dataKey' | 'name'>
}

export interface RadarChartProps extends Omit<ComponentProps<'div'>, 'children'> {
  config: ChartConfig
  data: Record<string, any>[]
  dataKey: string
  series: RadarChartSeries[]
  colors?: readonly string[]
  containerHeight?: number
  legend?: boolean
  tooltip?: boolean | ComponentProps<typeof ChartTooltip>['content']
  tooltipProps?: Omit<ComponentProps<typeof ChartTooltip>, 'content'>
  polarGridProps?: ComponentProps<typeof PolarGrid>
  angleAxisProps?: Omit<ComponentProps<typeof PolarAngleAxis>, 'dataKey'>
  radiusAxisProps?: ComponentProps<typeof PolarRadiusAxis>
  chartProps?: Omit<ComponentProps<typeof RadarChartPrimitive>, 'data'>
  children?: ReactNode
}

export function RadarChart({
  config,
  data,
  dataKey,
  series,
  colors = DEFAULT_COLORS,
  containerHeight = 360,
  legend = series.length > 1,
  tooltip = true,
  tooltipProps,
  polarGridProps,
  angleAxisProps,
  radiusAxisProps,
  chartProps,
  children,
  ...props
}: RadarChartProps) {
  const isMobile = useIsMobile()
  const seriesKeys = useMemo(() => series.map((item) => item.dataKey), [series])
  const categoryColors = useMemo(
    () => constructCategoryColors(seriesKeys, colors),
    [seriesKeys, colors]
  )

  return (
    <Chart
      config={config}
      data={data}
      dataKey={dataKey}
      containerHeight={containerHeight}
      layout="radial"
      {...props}
    >
      {({ selectedLegend }) => (
        <RadarChartPrimitive data={data} outerRadius={isMobile ? '52%' : '72%'} {...chartProps}>
          <PolarGrid {...polarGridProps} />
          <PolarAngleAxis
            dataKey={dataKey}
            tick={{ fill: 'var(--color-muted-fg)', fontSize: isMobile ? 10 : 12 }}
            {...angleAxisProps}
          />
          <PolarRadiusAxis tick={false} axisLine={false} {...radiusAxisProps} />
          {children}
          {tooltip ? (
            <ChartTooltip
              content={
                typeof tooltip === 'boolean' ? <ChartTooltipContent accessibilityLayer /> : tooltip
              }
              {...tooltipProps}
            />
          ) : null}
          {legend ? <ChartLegend content={<ChartLegendContent />} /> : null}
          {series.map((item, index) => {
            const color = getColorValue(
              config[item.dataKey]?.color ??
                categoryColors.get(item.dataKey) ??
                colors[index % colors.length]
            )
            const isDimmed = selectedLegend && selectedLegend !== item.dataKey
            const {
              fillOpacity = series.length > 1 ? 0.16 : 0.28,
              strokeOpacity = 1,
              ...radarProps
            } = item.radarProps ?? {}

            return (
              <Radar
                key={item.dataKey}
                dataKey={item.dataKey}
                name={item.name ?? item.dataKey}
                fill={color}
                fillOpacity={isDimmed ? 0.03 : fillOpacity}
                stroke={color}
                strokeOpacity={isDimmed ? 0.12 : strokeOpacity}
                strokeWidth={2}
                {...radarProps}
              />
            )
          })}
        </RadarChartPrimitive>
      )}
    </Chart>
  )
}
