import "rehype-pretty-code"

declare module "react-syntax-highlighter/dist/esm/styles/prism"

// declare module "tailwindcss-motion"

declare module "rehype-pretty-code" {
  interface Options {
    theme?: string
    onVisitLine?: (node: any) => void
    onVisitHighlightedLine?: (node: any) => void
    onVisitHighlightedWord?: (node: any) => void
  }
}
