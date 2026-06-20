'use client'

import { Tag, TagGroup, TagList } from '@/components/ui/tag-group'

const articles = [
  { name: 'React Tutorial', url: '#' },
  { name: 'TypeScript Handbook', url: '#' },
  { name: 'JavaScript Guide', url: '#' },
]

export default function TagGroupHrefDemo() {
  return (
    <TagGroup aria-label="Articles">
      <TagList items={articles}>
        {(item) => (
          <Tag id={item.name} href={item.url}>
            {item.name}
          </Tag>
        )}
      </TagList>
    </TagGroup>
  )
}
