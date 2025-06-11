export const siteConfig = {
  name: "Intent UI Accessible React Component Library – Copy, Customize & Own Your UI",
  url: "https://intentui.com",
  description:
    "Intent UI lets developers copy-paste fully-accessible React components, tailor them with Tailwind, and ship production UIs in minutes.",
  author: "irsyadadl",
  links: {
    twitter: "https://x.com/intent/follow?screen_name=intentui",
    github: "https://github.com/intentuilabs",
    discord: "https://discord.gg/DYmVJ66JUD",
  },
  discord: "https://discord.gg/DYmVJ66JUD",
  repo: "https://github.com/irsyadadl/intentui",
  currentVersion: "3.x",
  cli: {
    version: "beta",
    command: "@intentui/cli",
  },
  get cliCommand() {
    return `${this.cli.command}@${this.cli.version}`
  },
}

export type SiteConfig = typeof siteConfig
