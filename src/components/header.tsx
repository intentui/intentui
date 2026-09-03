import { cn } from 'cn'
import { PageContainer } from '@/components/page-container'
import { Heading, type HeadingProps } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'

export function Header({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('border-page', className)}>
      <PageContainer>
        <div className="border-page pt-14 pb-6 lg:border-x lg:p-6 lg:pt-32">{props.children}</div>
      </PageContainer>
    </div>
  )
}

export function HeaderInner({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('mx-auto max-w-2xl text-center sm:mx-0 sm:text-left', className)}
      {...props}
    />
  )
}

export function HeaderTitle({ className, ...props }: Omit<HeadingProps, 'level'>) {
  return (
    <Heading
      level={1}
      className={cn('mb-4 font-medium text-3xl sm:text-4xl', className)}
      {...props}
    />
  )
}

export function HeaderDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return <Text className={cn('text-pretty text-base/7 sm:text-lg/8', className)} {...props} />
}
