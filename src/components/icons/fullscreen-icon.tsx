export function FullscreenIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      data-slot="icon"
      aria-hidden="true"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8.25 3.75h-3.5a1 1 0 0 0-1 1v3.5m12-4.5h3.5a1 1 0 0 1 1 1v3.5m0 7.5v3.5a1 1 0 0 1-1 1h-3.5m-7.5 0h-3.5a1 1 0 0 1-1-1v-3.5"
      />
    </svg>
  )
}
