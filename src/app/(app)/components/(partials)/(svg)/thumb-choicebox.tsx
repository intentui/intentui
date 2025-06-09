export function ThumbChoicebox() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="57" fill="none" viewBox="0 0 100 57">
      <rect width="100" height="24" y="33" fill="var(--secondary)" rx="4" />
      <rect width="32" height="4" x="5" y="39" fill="var(--fg)" rx="2" />
      <rect width="38" height="4" x="5" y="47" fill="var(--muted-fg)" fillOpacity=".5" rx="2" />
      <rect width="21" height="4" x="46" y="47" fill="var(--muted-fg)" fillOpacity=".5" rx="2" />
      <rect
        width="10.5"
        height="10.167"
        x="84.75"
        y="39.75"
        fill="currentColor"
        className="fill-white dark:fill-zinc-600"
        rx="2.25"
      />
      <rect
        width="10.5"
        height="10.167"
        x="84.75"
        y="39.75"
        stroke="var(--input)"
        rx="2.25"
        strokeWidth=".5"
      />
      <rect width="100" height="24" fill="var(--color-blue-100)" rx="4" />
      <rect width="32" height="4" x="5" y="6" fill="var(--color-blue-600)" rx="2" />
      <rect width="38" height="4" x="5" y="14" fill="var(--color-blue-300)" rx="2" />
      <rect width="21" height="4" x="46" y="14" fill="var(--color-blue-300)" rx="2" />
      <rect width="10.5" height="10.5" x="84.75" y="6.75" fill="#155DFC" rx="2.25" />
      <rect
        width="10.5"
        height="10.5"
        x="84.75"
        y="6.75"
        stroke="#155DFC"
        rx="2.25"
        strokeWidth=".5"
      />
      <path
        stroke="#EFF6FF"
        d="M92.667 10.167 89 13.833l-1.667-1.666"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".667"
      />
    </svg>
  )
}
