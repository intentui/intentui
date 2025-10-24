export function BrandIntentuiIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 25 24"
      data-slot="icon"
      aria-hidden="true"
    >
      <rect width={20} height={20} x="2.5" y={2} fill="#0D6DFD" rx="3.75" />
      <g fill="#fff" filter="url(#icon-brand-intentui_svg__a)" shapeRendering="crispEdges">
        <path d="M5.86 6.311c0-.525.426-.952.951-.952h1.904c.526 0 .952.427.952.952v1.904a.95.95 0 0 1-.952.952H6.811a.95.95 0 0 1-.952-.952V6.311Z" />
        <path
          fillOpacity="0.5"
          d="M10.605 6.311c0-.525.426-.952.952-.952h1.904c.525 0 .952.427.952.952v1.904a.95.95 0 0 1-.952.952h-1.904a.95.95 0 0 1-.952-.952z"
        />
        <path d="M15.35 6.311c0-.525.426-.952.952-.952h1.904c.526 0 .952.427.952.952v1.904a.95.95 0 0 1-.952.952h-1.904a.95.95 0 0 1-.952-.952z" />
        <path
          fillOpacity="0.5"
          d="M15.35 11.057c0-.526.426-.952.952-.952h1.904c.526 0 .952.426.952.952v1.904a.95.95 0 0 1-.952.952h-1.904a.95.95 0 0 1-.952-.952z"
        />
      </g>
      <defs>
        <filter
          id="icon-brand-intentui_svg__a"
          width="13.426"
          height="8.68"
          x="5.796"
          y="5.328"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="0.032" />
          <feGaussianBlur stdDeviation="0.032" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_11777_624" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_11777_624" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}
