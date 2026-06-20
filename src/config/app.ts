export const app = {
  name: 'Intent UI',
  url: 'https://intentui.com',
  description:
    'Intent UI helps developers copy and paste fully accessible React components, customize them with Tailwind, and ship production ready UIs in minutes.',
  author: {
    username: 'irsyad',
    name: 'Irsyad',
    url: 'https://x.com/irsyad',
  },
  links: {
    twitter: 'https://x.com/intent/follow?screen_name=intentui',
    github: 'https://github.com/intentui',
    discord: 'https://discord.gg/DYmVJ66JUD',
  },
  repo: {
    url: 'https://github.com/intentui/intentui',
    currentVersion: '3.x',
    repoStars: '1.9',
  },
  cli: {
    version: 'latest',
    command: 'shadcn@latest',
  },
  get cliCommand() {
    return `${this.cli.command}@${this.cli.version}`
  },
  shadcn: 'npx shadcn@latest',
  editorThemes: {
    light: 'github-light',
    dark: 'github-dark',
  },
}

export type SiteConfig = typeof app

export const META_THEME_COLORS = {
  light: '#ffffff',
  dark: 'oklch(0.17 0.006 285.885)',
}
