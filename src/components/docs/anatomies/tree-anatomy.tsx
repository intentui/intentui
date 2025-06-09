import {
  Tree,
  TreeCheckbox,
  TreeContent,
  TreeIndicator,
  TreeItem,
  TreeLabel,
} from "@/components/ui/tree"
import { Collection } from "react-aria-components"

export default function TreeAnatomy() {
  return (
    <Tree>
      <TreeItem textValue="Item 1">
        <TreeContent>
          <TreeIndicator />
          <TreeCheckbox />
          <TreeLabel>Title</TreeLabel>
        </TreeContent>
        <Collection />
      </TreeItem>
    </Tree>
  )
}
