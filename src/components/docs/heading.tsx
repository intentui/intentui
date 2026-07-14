import { twMerge } from 'tailwind-merge'

interface HeadingProps extends React.ComponentPropsWithoutRef<'h2'> {
  as: 'h2' | 'h3' | 'h4'
}

export function Heading({ as: Component, className, id, ...props }: HeadingProps) {
  return (
    <Component
      {...props}
      id={id}
      className={twMerge(
        "not-typeset mt-8 mb-4 scroll-mt-24 font-medium after:ml-2 after:text-muted-fg after:opacity-0 after:transition-opacity after:content-['#'] hover:after:opacity-100",
        className
      )}
    />
  )
}
