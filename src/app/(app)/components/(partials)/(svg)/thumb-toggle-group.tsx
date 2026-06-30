export function ThumbToggleGroup() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="none" viewBox="0 0 80 14">
      <mask id="a" fill="#fff">
        <path d="M0 2a2 2 0 0 1 2-2h18v14H2a2 2 0 0 1-2-2z" />
      </mask>
      <path
        fill="var(--input)"
        d="M-.5 2A2.5 2.5 0 0 1 2-.5h18v1H2A1.5 1.5 0 0 0 .5 2zM20 14.5H2A2.5 2.5 0 0 1-.5 12h1A1.5 1.5 0 0 0 2 13.5h18zm-18 0A2.5 2.5 0 0 1-.5 12V2A2.5 2.5 0 0 1 2-.5v1A1.5 1.5 0 0 0 .5 2v10A1.5 1.5 0 0 0 2 13.5zM20 0v14z"
        mask="url(#a)"
      />
      <path
        stroke="var(--fg)"
        d="M8.094 5.385h4.812M8.094 7.5h2.479m-2.48 2.115h4.813"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".438"
      />
      <mask id="b" fill="#fff">
        <path d="M20 0h20v14H20z" />
      </mask>
      <path
        fill="var(--input)"
        d="M20 0v-.5h-.5V0zm0 14h-.5v.5h.5zM20 .5h20v-1H20zm20 13H20v1h20zm-19.5.5V0h-1v14z"
        mask="url(#b)"
      />
      <path
        stroke="var(--fg)"
        d="M28.094 5.385h4.812M28.094 7.5h4.812m-4.812 2.115h4.812"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".438"
      />
      <path stroke="var(--input)" d="M40.25.25h19.5v13.5h-19.5z" strokeWidth=".5" />
      <path
        stroke="var(--fg)"
        d="M48.094 5.385h4.812M49.26 7.5h2.48m-3.646 2.115h4.812"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".438"
      />
      <mask id="c" fill="#fff">
        <path d="M60 0h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H60z" />
      </mask>
      <path
        fill="var(--input)"
        d="M60-.5h18A2.5 2.5 0 0 1 80.5 2h-1A1.5 1.5 0 0 0 78 .5H60zM80.5 12a2.5 2.5 0 0 1-2.5 2.5H60v-1h18a1.5 1.5 0 0 0 1.5-1.5zM60 14V0zM78-.5A2.5 2.5 0 0 1 80.5 2v10a2.5 2.5 0 0 1-2.5 2.5v-1a1.5 1.5 0 0 0 1.5-1.5V2A1.5 1.5 0 0 0 78 .5z"
        mask="url(#c)"
      />
      <path
        stroke="var(--fg)"
        d="M68.094 5.385h4.812M70.427 7.5h2.48m-4.813 2.115h4.812"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".438"
      />
    </svg>
  )
}
