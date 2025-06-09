import { Tag, TagGroup, TagList } from "@/components/ui/tag-group"

export default function TagGroupAnatomy() {
  return (
    <TagGroup label="Serverless" selectionMode="multiple">
      <TagList>
        <Tag>AWS Lambda</Tag>
        <Tag>Google Cloud Functions</Tag>
        <Tag>Azure Functions</Tag>
      </TagList>
    </TagGroup>
  )
}
