export const siteConfig = {
  name: "Intent UI",
  url: "https://intentui.com",
  description:
    "Intent offers customizable, accessible React components with Tailwind CSS, ready for easy copy and paste into your projects.",
  author: "irsyadadl",
  links: {
    twitter: "https://x.com/intent/follow?screen_name=intentui",
    github: "https://github.com/intentuilabs",
    discord: "https://discord.gg/DYmVJ66JUD",
  },
  discord: "https://discord.gg/DYmVJ66JUD",
  repo: "https://github.com/irsyadadl/intentui",
  currentVersion: "2.x",
  cli: {
    version: "beta",
    command: "@intentui/cli",
  },
  get cliCommand() {
    return `${this.cli.command}@${this.cli.version}`
  },
}

export type SiteConfig = typeof siteConfig
