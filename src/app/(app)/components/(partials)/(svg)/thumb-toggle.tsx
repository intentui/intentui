export function ThumbToggle() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="20" fill="none" viewBox="0 0 60 14">
      <rect
        width="27.5"
        height="13.5"
        x=".25"
        y=".25"
        stroke="var(--input)"
        rx="2.187"
        strokeWidth=".5"
      />
      <rect width="16" height="2" x="6" y="6" fill="var(--muted-fg)" rx="1" />
      <rect width="28" height="14" x="32" fill="var(--secondary)" rx="2.437" />
      <rect width="16" height="2" x="38" y="6" fill="var(--muted-fg)" rx="1" />
    </svg>
  )
}
