import colors from "@/json/colors.json"
import {
  accentColors300,
  accentColors400,
  accentColors500,
  adjustLightness,
  neutralColors,
} from "@/lib/colors"

type BlackWhite = "white" | "black"

type Shade = keyof (typeof colors)["slate"]
export const getColorValue = (colorKey: string | BlackWhite, shade?: Shade) => {
  if (colorKey === "white") return "oklch(1 0 0)"
  if (colorKey === "black") return "oklch(0 0 0)"
  if (!shade) throw new Error(`Shade is required for colorKey: ${colorKey}`)
  return colors[colorKey as keyof typeof colors][shade]
}

type ForegroundColor = Shade | BlackWhite
const getFgValue = (colorKey: string, fg: ForegroundColor) => {
  if (fg === "white" || fg === "black") return getColorValue(fg)
  return getColorValue(colorKey, fg)
}

export const generateTheme = (
  selectedColors: Record<"primary" | "gray" | "accent" | "radius", string>,
) => {
  const { primary, gray, accent, radius } = selectedColors

  const isNeutralPrimary = neutralColors.includes(primary)
  const isShade400Primary = accentColors400.includes(primary)
  const isShade500Primary = accentColors500.includes(primary)
  const isShade300Primary = accentColors300.includes(primary)

  const isNeutralAccent = neutralColors.includes(accent)
  const isShade400Accent = accentColors400.includes(accent)
  const isShade500Accent = accentColors500.includes(accent)
  const isShade300Accent = accentColors300.includes(accent)

  const determineShade = (
    isNeutral: boolean,
    is500: boolean,
    is300: boolean,
    is400: boolean,
    isDarkMode = false,
  ) => {
    if (isNeutral) return isDarkMode ? "50" : "950" // Adjust for light and dark
    if (is500) return "500"
    if (is300) return "300"
    if (is400) return "400"
    return "600"
  }

  const determineForeground = (isNeutral: boolean, is400: boolean, isDarkMode = false) => {
    if (isNeutral) return isDarkMode ? "950" : "50"
    return is400 ? "950" : "white"
  }

  const lightPrimary: Shade = determineShade(
    isNeutralPrimary,
    isShade500Primary,
    isShade300Primary,
    isShade400Primary,
  )
  const lightPrimaryFg: ForegroundColor = determineForeground(isNeutralPrimary, isShade400Primary)

  const darkPrimary: Shade = determineShade(
    isNeutralPrimary,
    isShade500Primary,
    isShade300Primary,
    isShade400Primary,
    true,
  )
  const darkPrimaryFg: ForegroundColor = determineForeground(
    isNeutralPrimary,
    isShade400Primary,
    true,
  )

  const lightAccent: Shade = isNeutralAccent
    ? "200"
    : determineShade(isNeutralAccent, isShade500Accent, isShade300Accent, isShade400Accent)
  const lightAccentFg: ForegroundColor = isNeutralAccent
    ? "950"
    : determineForeground(isNeutralAccent, isShade400Accent)

  const darkAccent: Shade = isNeutralAccent
    ? "800"
    : determineShade(isNeutralAccent, isShade500Accent, isShade300Accent, isShade400Accent, true)
  const darkAccentFg: ForegroundColor = isNeutralAccent
    ? "50"
    : determineForeground(isNeutralAccent, isShade400Accent, true)

  const dangerColor =
    primary === "red"
      ? adjustLightness(getColorValue("red", "600"), -4)
      : getColorValue("red", "600")

  const warningColor =
    primary === "amber"
      ? adjustLightness(getColorValue("amber", "200"), -0)
      : getColorValue("amber", "400")

  const lightPrimaryFgValue = getFgValue(primary, lightPrimaryFg)
  const darkPrimaryFgValue = getFgValue(primary, darkPrimaryFg)
  const lightAccentFgValue = getFgValue(accent, lightAccentFg)
  const darkAccentFgValue = getFgValue(accent, darkAccentFg)

  const chartShadesLight: Array<Shade> = isNeutralPrimary
    ? ["900", "700", "600", "500", "400"]
    : ["600", "400", "300", "200", "100"]

  const chartShadesDark: Array<Shade> = isNeutralPrimary
    ? ["800", "700", "500", "400", "300"]
    : ["700", "500", "400", "300", "200"]

  const lightRingShade = isNeutralPrimary ? "950" : "600"
  const darkRingShade = isNeutralPrimary ? "50" : "600"

  const lightColors = `--bg: ${getColorValue("white")};
    --fg: ${getColorValue(gray, "950")};
    
    --primary: ${getColorValue(primary, lightPrimary)};
    --primary-fg: ${lightPrimaryFgValue};
    
    --secondary: ${getColorValue(gray, "200")};
    --secondary-fg: ${getColorValue(gray, "950")};
    
    --overlay: ${getColorValue("white")};
    --overlay-fg: ${getColorValue(gray, "950")};
    
    --accent: ${getColorValue(accent, lightAccent)};
    --accent-fg: ${lightAccentFgValue};
    
    --muted: ${getColorValue(gray, "100")};
    --muted-fg: ${getColorValue(gray, "500")};
    
    --success: ${getColorValue("emerald", "600")};
    --success-fg: ${getColorValue("white")};
    
    --warning: ${warningColor};
    --warning-fg: ${getColorValue("amber", "950")};
    
    --danger: ${dangerColor};
    --danger-fg: ${getColorValue("red", "50")};
    
    --border: ${adjustLightness(getColorValue(gray, "300"), +4)};
    --input: ${getColorValue(gray, "300")};
    --ring: ${getColorValue(primary, lightRingShade)};
    
    --navbar: ${adjustLightness(getColorValue(gray, "50"), +1)};
    --navbar-fg: ${getColorValue(gray, "950")};
    
    --sidebar: ${getColorValue(gray, "100")};
    --sidebar-fg: ${getColorValue(gray, "950")};
    
    --chart-1: ${getColorValue(primary, chartShadesLight[0])};
    --chart-2: ${getColorValue(primary, chartShadesLight[1])};
    --chart-3: ${getColorValue(primary, chartShadesLight[2])};
    --chart-4: ${getColorValue(primary, chartShadesLight[3])};
    --chart-5: ${getColorValue(primary, chartShadesLight[4])};
    `

  const darkColors = `--bg: ${adjustLightness(getColorValue(gray, "950"), -5)};
    --fg: ${getColorValue(gray, "50")};
    
    --primary: ${getColorValue(primary, darkPrimary)};
    --primary-fg: ${darkPrimaryFgValue};
    
    --secondary: ${adjustLightness(getColorValue(gray, "800"), -3)};
    --secondary-fg: ${getColorValue(gray, "50")};
    
    --accent: ${getColorValue(accent, darkAccent)};
    --accent-fg: ${darkAccentFgValue};
    
    --muted: ${getColorValue(gray, "900")};
    --muted-fg: ${getColorValue(gray, "400")};
    
    --overlay: ${adjustLightness(getColorValue(gray, "900"), -3)};
    --overlay-fg: ${getColorValue(gray, "50")};
    
    --success: ${getColorValue("emerald", "600")};
    --success-fg: ${getColorValue("white")};
    
    --warning: ${warningColor};
    --warning-fg: ${getColorValue("amber", "950")};
    
    --danger: ${dangerColor};
    --danger-fg: ${getColorValue("red", "50")};
    
    --border: ${adjustLightness(getColorValue(gray, "700"), -10)};
    --input: ${adjustLightness(getColorValue(gray, "700"), -5)};
    --ring: ${getColorValue(primary, darkRingShade)};
    
    --navbar: ${adjustLightness(getColorValue(gray, "900"), -2)};
    --navbar-fg: ${getColorValue(gray, "50")};
    
    --sidebar: ${adjustLightness(getColorValue(gray, "900"), -5)};
    --sidebar-fg: ${getColorValue(gray, "50")};
   
    --chart-1: ${getColorValue(primary, chartShadesDark[0])};
    --chart-2: ${getColorValue(primary, chartShadesDark[1])};
    --chart-3: ${getColorValue(primary, chartShadesDark[2])};
    --chart-4: ${getColorValue(primary, chartShadesDark[3])};
    --chart-5: ${getColorValue(primary, chartShadesDark[4])};`

  const radiusValues = `
    --radius-lg: ${radius || "0.5rem"};
    --radius-xs: calc(var(--radius-lg) * 0.5);
    --radius-sm: calc(var(--radius-lg) * 0.75);
    --radius-md: calc(var(--radius-lg) * 0.9);
    --radius-xl: calc(var(--radius-lg) * 1.25);
    --radius-2xl: calc(var(--radius-lg) * 1.5);
    --radius-3xl: calc(var(--radius-lg) * 2);
    --radius-4xl: calc(var(--radius-lg) * 3);`

  return `@layer base {
  :root {
    ${lightColors}${radiusValues}
  }
  
  .dark {
    ${darkColors}
  }
}`
}
