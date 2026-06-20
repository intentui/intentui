'use client'

import { twMerge } from 'tailwind-merge'
import { buttonStyles } from '@/components/ui/button'
import { Text } from '@/components/ui/text'

export function AdsMobile({ className }: { className?: string }) {
  return (
    <div className="-mx-4 sm:mx-0">
      <a
        target="_blank"
        href="https://design.intentui.com/?utm_source=intentui.com&utm_medium=referral&utm_campaign=docs_intentui"
        className={twMerge(
          'not-prose mt-6 block border-page border-t border-b bg-radial-[at_50%_75%] from-sky-600 via-blue-600 to-90% to-blue-900 p-4 sm:hidden sm:border-b-0 sm:p-6',
          className
        )}
        rel="noopener"
      >
        <span className="block font-medium text-white text-xl sm:text-base/6">
          Unlock the full power of Intent UI Design
        </span>
        <Text className="mt-2.5 mb-3 block text-pretty text-blue-100 *:text-white">
          Build modern web apps faster with <strong>1000+ resources</strong> across{' '}
          <strong>components</strong>, <strong>blocks</strong>, <strong>patterns</strong>,{' '}
          <strong>templates</strong>, and <strong>starter kits</strong>.
        </Text>
        <span
          className={buttonStyles({
            intent: 'outline',
            size: 'sm',
            className: 'border-white/20 bg-white/10 text-white',
          })}
        >
          Learn more
        </span>
      </a>
    </div>
  )
}
