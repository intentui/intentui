export const siteConfig = {
  name: "Intent UI",
  url: "https://intentui.com",
  description:
    "Intent UI helps developers copy and paste fully accessible React components, customize them with Tailwind, and ship production ready UIs in minutes.",
  author: "irsyadadl",
  links: {
    twitter: "https://x.com/intent/follow?screen_name=intentui",
    github: "https://github.com/intentui",
    discord: "https://discord.gg/DYmVJ66JUD",
  },
  discord: "https://discord.gg/DYmVJ66JUD",
  repo: "https://github.com/intentui/intentui",
  repoStars: "1.6",
  currentVersion: "3.x",
  cli: {
    version: "latest",
    command: "shadcn@latest",
  },
  get cliCommand() {
    return `${this.cli.command}@${this.cli.version}`
  },
  shadcn: "npx shadcn@latest",
}

export type SiteConfig = typeof siteConfig

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "oklch(0.17 0.006 285.885)",
}
