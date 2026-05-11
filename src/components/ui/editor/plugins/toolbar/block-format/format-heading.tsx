import { $createHeadingNode, type HeadingTagType } from "@lexical/rich-text";
import { $setBlocksType } from "@lexical/selection";
import {
  $getRoot,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
} from "lexical";

import { useToolbarContext } from "@/components/ui/editor/context/toolbar-context";
import { blockTypeToBlockName } from "@/components/ui/editor/plugins/toolbar/block-format/block-format-data";
import { MenuItem } from "@/components/ui/menu";

export function FormatHeading({ levels = [] }: { levels: HeadingTagType[] }) {
  const { activeEditor, blockType } = useToolbarContext();

  const formatHeading = (headingSize: HeadingTagType) => {
    if (blockType !== headingSize) {
      activeEditor.focus();
      activeEditor.update(() => {
        const selection = $getSelection();
        const root = $getRoot();
        const anchorKey = $isRangeSelection(selection)
          ? selection.anchor.key
          : null;
        const noUsableSelection =
          !$isRangeSelection(selection) || anchorKey === root.getKey();

        if (noUsableSelection) {
          const heading = $createHeadingNode(headingSize);
          const firstChild = root.getFirstChild();
          if (
            firstChild &&
            $isElementNode(firstChild) &&
            firstChild.isEmpty()
          ) {
            firstChild.replace(heading);
          } else {
            root.append(heading);
          }
          heading.select();
          return;
        }

        $setBlocksType(selection, () => $createHeadingNode(headingSize));
      });
    }
  };

  return levels.map((level) => (
    <MenuItem key={level} onAction={() => formatHeading(level)}>
      <div className="flex items-center gap-1 font-normal">
        {blockTypeToBlockName[level].icon}
        {blockTypeToBlockName[level].label}
      </div>
    </MenuItem>
  ));
}
