import { createContext, type ReactElement, use, useCallback, useId, useMemo, useState } from "react"
import { ToggleButton, ToggleButtonGroup, type ToggleButtonGroupProps } from "react-aria-components"
import type {
  CartesianGridProps as CartesianGridPrimitiveProps,
  CartesianGridProps,
  LegendPayload,
  LegendProps,
  XAxisProps as XAxisPropsPrimitive,
  YAxisProps as YAxisPrimitiveProps,
} from "recharts"
import {
  CartesianGrid as CartesianGridPrimitive,
  Legend as LegendPrimitive,
  ResponsiveContainer,
  Tooltip as TooltipPrimitive,
  XAxis as XAxisPrimitive,
  YAxis as YAxisPrimitive,
} from "recharts"
import type { ContentType as LegendContentType } from "recharts/types/component/DefaultLegendContent"
import type {
  NameType,
  Props as TooltipContentProps,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent"
import type { ContentType as TooltipContentType } from "recharts/types/component/Tooltip"
import { twJoin, twMerge } from "tailwind-merge"
import { useIsMobile } from "@/hooks/use-mobile"
import { cx } from "@/lib/primitive"

// #region Chart Types
type ChartType = "default" | "stacked" | "percent"
type ChartLayout = "horizontal" | "vertical" | "radial"
type IntervalType = "preserveStartEnd" | "equidistantPreserveStart"

type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: ChartColorKeys | (string & {}); theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

const CHART_COLORS = {
  "chart-1": "var(--chart-1)",
  "chart-2": "var(--chart-2)",
  "chart-3": "var(--chart-3)",
  "chart-4": "var(--chart-4)",
  "chart-5": "var(--chart-5)",
} as const

type ChartColorKeys = keyof typeof CHART_COLORS | (string & {})

const DEFAULT_COLORS = ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"] as const

// #endregion

// #region Chart Context

type ChartContextProps = {
  config: ChartConfig
  data?: Record<string, any>[]
  layout: ChartLayout
  dataKey?: string
  selectedLegend: string | null
  onLegendSelect: (legendItem: string | null) => void
}

const ChartContext = createContext<ChartContextProps | null>(null)

export function useChart() {
  const context = use(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <Chart />")
  }

  return context
}

// #endregion

// #region helpers

export function valueToPercent(value: number) {
  return `${(value * 100).toFixed(0)}%`
}

const constructCategoryColors = (
  categories: string[],
  colors: readonly ChartColorKeys[],
): Map<string, ChartColorKeys> => {
  const categoryColors = new Map<string, ChartColorKeys>()

  categories.forEach((category, index) => {
    const color = colors[index % colors.length]
    if (color !== undefined) {
      categoryColors.set(category, color)
    }
  })

  return categoryColors
}

const getColorValue = (color?: string): string => {
  if (!color) {
    return "var(--chart-1)"
  }

  return CHART_COLORS[color as "chart-1"] ?? color
}

function getPayloadConfigFromPayload(config: ChartConfig, payload: unknown, key: string) {
  if (typeof payload !== "object" || payload === null) {
    return undefined
  }

  const payloadPayload =
    "payload" in payload && typeof payload.payload === "object" && payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey: string = key

  if (key in payload && typeof payload[key as keyof typeof payload] === "string") {
    configLabelKey = payload[key as keyof typeof payload] as string
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[key as keyof typeof payloadPayload] as string
  }

  return configLabelKey in config ? config[configLabelKey] : config[key as keyof typeof config]
}

// #endregion

// #region Base Chart Components

interface BaseChartProps<TValue extends ValueType, TName extends NameType>
  extends React.HTMLAttributes<HTMLDivElement> {
  containerHeight?: number
  config: ChartConfig
  data: Record<string, any>[]
  dataKey: string
  colors?: readonly (ChartColorKeys | (string & {}))[]
  type?: ChartType
  intervalType?: IntervalType
  layout?: ChartLayout
  valueFormatter?: (value: number) => string

  tooltip?: TooltipContentType<TValue, TName> | boolean
  tooltipProps?: Omit<ChartTooltipProps<TValue, TName>, "content"> & {
    hideLabel?: boolean
    labelSeparator?: boolean
    hideIndicator?: boolean
    indicator?: "line" | "dot" | "dashed"
    nameKey?: string
    labelKey?: string
  }

  cartesianGridProps?: CartesianGridProps

  legend?: LegendContentType | boolean
  legendProps?: Omit<React.ComponentProps<typeof LegendPrimitive>, "content" | "ref">

  xAxisProps?: XAxisPropsPrimitive
  yAxisProps?: YAxisPrimitiveProps

  // XAxis
  displayEdgeLabelsOnly?: boolean

  hideGridLines?: boolean
  hideXAxis?: boolean
  hideYAxis?: boolean
}

const Chart = ({
  id,
  className,
  children,
  config,
  data,
  dataKey,
  ref,
  layout = "horizontal",
  containerHeight,
  ...props
}: Omit<React.ComponentProps<"div">, "children"> &
  Pick<ChartContextProps, "data" | "dataKey"> & {
    config: ChartConfig
    containerHeight?: number
    layout?: ChartLayout
    children: ReactElement | ((props: ChartContextProps) => ReactElement)
  }) => {
  const isMobile = useIsMobile()
  const uniqueId = useId()
  const chartId = useMemo(() => `chart-${id || uniqueId.replace(/:/g, "")}`, [id, uniqueId])

  const [selectedLegend, setSelectedLegend] = useState<string | null>(null)

  const onLegendSelect = useCallback((legendItem: string | null) => {
    setSelectedLegend(legendItem)
  }, [])

  const _data = data ?? []
  const _dataKey = dataKey ?? "value"

  const value = {
    config,
    selectedLegend,
    onLegendSelect,
    data: _data,
    dataKey: _dataKey,
    layout,
  }

  return (
    <ChartContext value={value}>
      <div
        data-chart={chartId}
        ref={ref}
        className={twMerge(
          "z-20 flex w-full justify-center text-xs",
          "[&_.recharts-cartesian-axis-tick_text]:fill-muted-fg [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/80 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden",
          // dot
          "[&_.recharts-dot[fill='#fff']]:fill-(--line-color)",
          // when hover over the line chart, the active dot should not have a fill or stroke
          "[&_.recharts-active-dot>.recharts-dot]:stroke-fg/10",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <ResponsiveContainer height={containerHeight ?? (isMobile ? 200 : 370)}>
          {typeof children === "function" ? children(value) : children}
        </ResponsiveContainer>
      </div>
    </ChartContext>
  )
}

const THEMES = { light: "", dark: ".dark" } as const
const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([_, config]) => config.theme || config.color)

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] || itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join("\n")}
}
`,
          )
          .join("\n"),
      }}
    />
  )
}

type ChartTooltipProps<TValue extends ValueType, TName extends NameType> = React.ComponentProps<
  typeof TooltipPrimitive<TValue, TName>
>

const ChartTooltip = <TValue extends ValueType, TName extends NameType>(
  props: ChartTooltipProps<TValue, TName>,
) => {
  const { layout } = useChart()

  return (
    <TooltipPrimitive
      wrapperStyle={{ outline: "none" }}
      isAnimationActive={true}
      animationDuration={500}
      offset={10}
      cursor={{
        stroke: "var(--muted)",
        strokeWidth: layout === "radial" ? 0.1 : 1,
        fill: "var(--muted)",
        fillOpacity: 0.5,
      }}
      {...props}
    />
  )
}

type ChartLegendProps = Omit<React.ComponentProps<typeof LegendPrimitive>, "ref">

const ChartLegend = (props: ChartLegendProps) => {
  return <LegendPrimitive align="center" verticalAlign="bottom" {...props} />
}

interface XAxisProps extends Omit<XAxisPropsPrimitive, "ref"> {
  displayEdgeLabelsOnly?: boolean
  intervalType?: IntervalType
}

const XAxis = ({
  displayEdgeLabelsOnly,
  className,
  intervalType = "preserveStartEnd",
  minTickGap = 5,
  domain = ["auto", "auto"],
  ...props
}: XAxisProps) => {
  const { dataKey, data, layout } = useChart()

  const ticks =
    displayEdgeLabelsOnly && data?.length && dataKey
      ? [data[0]?.[dataKey], data[data.length - 1]?.[dataKey]]
      : undefined

  const tick = {
    transform: layout === "horizontal" ? "translate(32, 6)" : undefined,
  }
  return (
    <XAxisPrimitive
      className={twMerge("text-muted-fg text-xs **:[text]:fill-muted-fg", className)}
      interval={displayEdgeLabelsOnly ? "preserveStartEnd" : intervalType}
      tick={tick}
      ticks={ticks}
      tickLine={false}
      axisLine={false}
      minTickGap={minTickGap}
      dataKey={layout === "horizontal" ? dataKey : undefined}
      {...props}
    />
  )
}

const YAxis = ({
  className,
  width,
  domain = ["auto", "auto"],
  type,
  ...props
}: Omit<YAxisPrimitiveProps, "ref">) => {
  const { layout, dataKey } = useChart()

  return (
    <YAxisPrimitive
      className={twMerge("text-muted-fg text-xs **:[text]:fill-muted-fg", className)}
      width={(width ?? layout === "horizontal") ? 40 : 80}
      domain={domain}
      tick={{
        transform: layout === "horizontal" ? "translate(-3, 0)" : "translate(0, 0)",
      }}
      dataKey={layout === "horizontal" ? undefined : dataKey}
      type={type || layout === "horizontal" ? "number" : "category"}
      interval={layout === "horizontal" ? undefined : "equidistantPreserveStart"}
      axisLine={false}
      tickLine={false}
      {...props}
    />
  )
}

const CartesianGrid = ({ className, ...props }: CartesianGridPrimitiveProps) => {
  const { layout } = useChart()
  return (
    <CartesianGridPrimitive
      className={twMerge("stroke-1 stroke-muted", className)}
      horizontal={layout !== "vertical"}
      vertical={layout === "vertical"}
      {...props}
    />
  )
}

const ChartTooltipContent = <TValue extends ValueType, TName extends NameType>({
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelSeparator = true,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
  ref,
}: TooltipContentProps<TValue, TName> &
  React.ComponentProps<"div"> & {
    hideLabel?: boolean
    labelSeparator?: boolean
    hideIndicator?: boolean
    indicator?: "line" | "dot" | "dashed"
    nameKey?: string
    labelKey?: string
  }) => {
  const { config } = useChart()

  const tooltipLabel = useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null
    }

    const [item] = payload

    if (!item) {
      return null
    }

    const key = `${labelKey || item.dataKey || item.name || "value"}`
    const itemConfig = getPayloadConfigFromPayload(config, item, key)
    const value =
      !labelKey && typeof label === "string"
        ? config[label as keyof typeof config]?.label || label
        : itemConfig?.label

    if (labelFormatter) {
      return <div className={labelClassName}>{labelFormatter(value, payload)}</div>
    }

    if (!value) {
      return null
    }

    return <div className={labelClassName}>{value}</div>
  }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey])

  if (!payload?.length) {
    return null
  }

  const nestLabel = payload.length === 1 && indicator !== "dot"

  return (
    <div
      ref={ref}
      className={twMerge(
        "grid min-w-48 items-start rounded-lg bg-overlay/70 p-3 py-2 text-overlay-fg text-xs ring ring-current/10 backdrop-blur-lg",
        className,
      )}
    >
      {!hideLabel && (
        <>
          {!nestLabel ? <span className="font-medium">{tooltipLabel}</span> : null}
          {labelSeparator && <span aria-hidden className="mt-2 mb-3 block h-px w-full bg-bg/10" />}
        </>
      )}
      <div className="grid gap-3">
        {payload.map((item, index) => {
          const key = `${nameKey || item.name || item.dataKey || "value"}`
          const itemConfig = getPayloadConfigFromPayload(config, item, key)
          const indicatorColor = color || item.payload.fill || item.color

          return (
            <div
              key={key}
              className={twMerge(
                "flex w-full flex-wrap items-stretch gap-2 *:data-[slot=icon]:text-muted-fg",
                indicator === "dot" && "items-center *:data-[slot=icon]:size-2.5",
                indicator === "line" && "*:data-[slot=icon]:h-full *:data-[slot=icon]:w-2.5",
              )}
            >
              {formatter && item?.value !== undefined && item.name ? (
                formatter(item.value, item.name, item, index, item.payload)
              ) : (
                <>
                  {itemConfig?.icon ? (
                    <itemConfig.icon />
                  ) : (
                    !hideIndicator && (
                      <div
                        className={twMerge(
                          "shrink-0 rounded-full border-(--color-border) bg-(--color-bg)",
                          indicator === "dot" && "size-2.5",
                          indicator === "line" && "w-1",
                          indicator === "dashed" &&
                            "w-0 border-[1.5px] border-dashed bg-transparent",
                          nestLabel && indicator === "dashed" && "my-0.5",
                        )}
                        style={
                          {
                            "--color-bg": indicatorColor,
                            "--color-border": indicatorColor,
                          } as React.CSSProperties
                        }
                      />
                    )
                  )}
                  <div
                    className={twMerge(
                      "flex flex-1 justify-between leading-none",
                      nestLabel ? "items-end" : "items-center",
                    )}
                  >
                    <div className="grid gap-1.5">
                      {nestLabel ? tooltipLabel : null}
                      <span className="text-muted-fg">{itemConfig?.label || item.name}</span>
                    </div>

                    {item.value && (
                      <span className="font-medium font-mono text-fg tabular-nums">
                        {item.value.toString()}
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

type ChartLegendContentProps = ToggleButtonGroupProps &
  Pick<LegendProps, "align" | "verticalAlign"> & {
    payload?: ReadonlyArray<LegendPayload>
    hideIcon?: boolean
    nameKey?: string
    ref?: React.Ref<any>
  }

const ChartLegendContent = ({
  className,
  hideIcon = false,
  payload,
  align = "right",
  verticalAlign = "bottom",
  nameKey,
  ref,
}: ChartLegendContentProps) => {
  const { config, selectedLegend, onLegendSelect } = useChart()

  if (!payload?.length) {
    return null
  }

  return (
    <ToggleButtonGroup
      ref={ref}
      className={cx(
        twJoin(
          "flex flex-wrap items-center gap-x-1",
          verticalAlign === "top" ? "pb-3" : "pt-3",
          align === "right" ? "justify-end" : align === "left" ? "justify-start" : "justify-center",
        ),
        className,
      )}
      selectedKeys={selectedLegend ? [selectedLegend] : undefined}
      onSelectionChange={(v) => {
        const key = [...v][0]?.toString() ?? null
        onLegendSelect(key)
      }}
      selectionMode="single"
    >
      {payload.map((item: LegendPayload) => {
        const key = `${nameKey || item.dataKey || "value"}`
        const itemConfig = getPayloadConfigFromPayload(config, item, key)

        return (
          <ToggleButton
            key={key}
            id={key}
            className={twMerge(
              "flex items-center gap-2 rounded-sm px-2 py-1 text-muted-fg *:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:size-2.5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:text-muted-fg",
              "selected:bg-secondary/70 selected:text-secondary-fg",
              "hover:bg-secondary/70 hover:text-secondary-fg",
            )}
            aria-label={"Legend Item"}
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon data-slot="icon" />
            ) : (
              <div
                data-slot="icon"
                className="rounded-full"
                style={{
                  backgroundColor: item.color,
                }}
              />
            )}
            {itemConfig?.label}
          </ToggleButton>
        )
      })}
    </ToggleButtonGroup>
  )
}

export type {
  ChartConfig,
  ChartColorKeys,
  ChartType,
  ChartLayout,
  IntervalType,
  BaseChartProps,
  ChartTooltipProps,
  XAxisProps,
  ChartLegendProps,
  ChartLegendContentProps,
}

export {
  Chart,
  ChartLegend,
  XAxis,
  YAxis,
  CartesianGrid,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegendContent,
}
export { getColorValue, constructCategoryColors, DEFAULT_COLORS, CHART_COLORS }
