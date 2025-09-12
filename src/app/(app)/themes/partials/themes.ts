import colors from "@/json/colors.json"
import {
  accentColors300,
  accentColors400,
  accentColors500,
  adjustLightness,
  neutralColors,
  subtleColors300,
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
  const isSubtle300Primary = subtleColors300.includes(primary)

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
    ? ["800", "700", "600", "500", "400"]
    : ["600", "500", "400", "300", "200"]

  const chartShadesDark: Array<Shade> = isNeutralPrimary
    ? ["50", "200", "300", "400", "500"]
    : ["700", "500", "400", "300", "200"]

  const lightRingShade = isNeutralPrimary ? "950" : "600"
  const darkRingShade = isNeutralPrimary ? "50" : "600"

  const subtleBaseShadePrimary = (
    isNeutralPrimary ? "600" : isShade400Primary ? "400" : "500"
  ) as Shade
  const subtleAlphaLight = isNeutralPrimary ? 0.1 : subtleBaseShadePrimary === "400" ? 0.2 : 0.15
  const subtleAlphaDark = 0.1

  const lightColors = `--bg: ${getColorValue("white")};
    --fg: ${getColorValue(gray, "900")};

    --primary: ${getColorValue(primary, lightPrimary)};
    --primary-fg: ${lightPrimaryFgValue};

    --primary-subtle: ${`${getColorValue(primary, subtleBaseShadePrimary).slice(0, -1)} / ${subtleAlphaLight})`};
    --primary-subtle-fg: ${getColorValue(primary, "700")};

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

    --success-subtle: ${`${getColorValue("emerald", "500").slice(0, -1)} / 0.15)`};
    --success-subtle-fg: ${getColorValue("emerald", "700")};

    --info-subtle: ${`${getColorValue("sky", "500").slice(0, -1)} / 0.15)`};
    --info-subtle-fg: ${getColorValue("sky", "700")};

    --warning: ${warningColor};
    --warning-fg: ${getColorValue("amber", "950")};

    --warning-subtle: ${`${getColorValue("amber", "400").slice(0, -1)} / 0.2)`};
    --warning-subtle-fg: ${getColorValue("amber", "700")};

    --danger: ${dangerColor};
    --danger-fg: ${getColorValue("red", "50")};

    --danger-subtle: ${`${getColorValue("red", "500").slice(0, -1)} / 0.15)`};
    --danger-subtle-fg: ${getColorValue("red", "700")};

    --border: ${adjustLightness(getColorValue(gray, "300"), +4)};
    --input: ${getColorValue(gray, "300")};
    --ring: ${getColorValue(primary, lightRingShade)};

    --navbar: ${adjustLightness(getColorValue(gray, "50"), +1)};
    --navbar-fg: ${getColorValue(gray, "950")};

    --sidebar: ${getColorValue(gray, "50")};
    --sidebar-fg: ${getColorValue(gray, "950")};
    --sidebar-primary: ${getColorValue(primary, lightPrimary)};
    --sidebar-primary-fg: ${lightPrimaryFgValue};
    --sidebar-accent: ${getColorValue(accent, lightAccent)};
    --sidebar-accent-fg: ${lightAccentFgValue};
    --sidebar-border: ${adjustLightness(getColorValue(gray, "300"), +3)};
    --sidebar-ring: ${getColorValue(primary, lightRingShade)};

    --chart-1: ${getColorValue(primary, chartShadesLight[0])};
    --chart-2: ${getColorValue(primary, chartShadesLight[1])};
    --chart-3: ${getColorValue(primary, chartShadesLight[2])};
    --chart-4: ${getColorValue(primary, chartShadesLight[3])};
    --chart-5: ${getColorValue(primary, chartShadesLight[4])};
    `

  const darkColors = `--bg: ${adjustLightness(getColorValue(gray, "950"), +4)};
    --fg: ${getColorValue(gray, "50")};

    --primary: ${getColorValue(primary, darkPrimary)};
    --primary-fg: ${darkPrimaryFgValue};

    --primary-subtle: ${`${getColorValue(primary, subtleBaseShadePrimary).slice(0, -1)} / ${subtleAlphaDark})`};
    --primary-subtle-fg: ${getColorValue(primary, isSubtle300Primary ? "300" : "400")};

    --secondary: ${adjustLightness(getColorValue(gray, "800"), -3)};
    --secondary-fg: ${getColorValue(gray, "50")};

    --overlay: ${adjustLightness(getColorValue(gray, "900"), 0)};
    --overlay-fg: ${getColorValue(gray, "50")};

    --accent: ${getColorValue(accent, darkAccent)};
    --accent-fg: ${darkAccentFgValue};

    --muted: ${getColorValue(gray, "900")};
    --muted-fg: ${getColorValue(gray, "400")};

    --success: ${getColorValue("emerald", "600")};
    --success-fg: ${getColorValue("white")};

    --success-subtle: ${`${getColorValue("emerald", "500").slice(0, -1)} / 0.1)`};
    --success-subtle-fg: ${getColorValue("emerald", "400")};

    --info-subtle: ${`${getColorValue("sky", "500").slice(0, -1)} / 0.1)`};
    --info-subtle-fg: ${getColorValue("sky", "300")};

    --warning: ${warningColor};
    --warning-fg: ${getColorValue("amber", "950")};

    --warning-subtle: ${`${getColorValue("amber", "400").slice(0, -1)} / 0.1)`};
    --warning-subtle-fg: ${getColorValue("amber", "400")};

    --danger: ${dangerColor};
    --danger-fg: ${getColorValue("red", "50")};

    --danger-subtle: ${`${getColorValue("red", "500").slice(0, -1)} / 0.1)`};
    --danger-subtle-fg: ${getColorValue("red", "400")};

    --border: ${adjustLightness(getColorValue(gray, "700"), -10)};
    --input: ${adjustLightness(getColorValue(gray, "700"), -5)};
    --ring: ${getColorValue(primary, darkRingShade)};

    --navbar: ${adjustLightness(getColorValue(gray, "900"), -2)};
    --navbar-fg: ${getColorValue(gray, "50")};

    --sidebar: ${getColorValue(gray, "900")};
    --sidebar-fg: ${getColorValue(gray, "50")};
    --sidebar-primary: ${getColorValue(primary, darkPrimary)};
    --sidebar-primary-fg: ${darkPrimaryFgValue};
    --sidebar-accent: ${getColorValue(accent, darkAccent)};
    --sidebar-accent-fg: ${darkAccentFgValue};
    --sidebar-border: ${getColorValue(gray, "800")};
    --sidebar-ring: ${getColorValue(primary, darkRingShade)};

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

  return `:root {
    ${lightColors}${radiusValues}
  }

  .dark {
    ${darkColors}
  }`
}
