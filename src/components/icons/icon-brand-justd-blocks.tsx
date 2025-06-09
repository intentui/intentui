import { twMerge } from "tailwind-merge"

export function IconBrandIntentui({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      data-slot="icon"
      className={twMerge("size-4", className)}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <rect width="20" height="20" x="2" y="2" fill="#0D6DFD" rx="3.75" />
      <g fill="#fff" filter="url(#a)" shapeRendering="crispEdges">
        <path d="M5.36 6.311c0-.525.426-.952.951-.952h1.904c.526 0 .952.427.952.952v1.904a.95.95 0 0 1-.952.952H6.311a.95.95 0 0 1-.952-.952z" />
        <path
          d="M10.105 6.311c0-.525.426-.952.952-.952h1.904c.525 0 .952.427.952.952v1.904a.95.95 0 0 1-.952.952h-1.904a.95.95 0 0 1-.952-.952z"
          fillOpacity=".5"
        />
        <path d="M14.85 6.311c0-.525.426-.952.952-.952h1.904c.526 0 .952.427.952.952v1.904a.95.95 0 0 1-.952.952h-1.904a.95.95 0 0 1-.952-.952z" />
        <path
          d="M14.85 11.057c0-.526.426-.952.952-.952h1.904c.526 0 .952.426.952.952v1.904a.95.95 0 0 1-.952.952h-1.904a.95.95 0 0 1-.952-.952z"
          fillOpacity=".5"
        />
      </g>
      <defs>
        <filter
          id="a"
          width="13.426"
          height="8.68"
          x="5.296"
          y="5.328"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy=".032" />
          <feGaussianBlur stdDeviation=".032" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_74_56" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_74_56" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}
