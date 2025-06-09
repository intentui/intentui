import { createCookieSessionStorage } from '@remix-run/node'
import { createThemeSessionResolver } from 'remix-themes'

const isProduction = process.env.NODE_ENV === 'production'

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: 'theme',
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    secrets: ['s3cr3t'],
    ...(isProduction ? { domain: 'your-production-domain.com', secure: true } : {})
  }
})

export const themeSessionResolver = createThemeSessionResolver(sessionStorage)
