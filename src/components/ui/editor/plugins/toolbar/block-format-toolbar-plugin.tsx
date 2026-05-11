import { $isListNode, ListNode } from "@lexical/list";
import { $isHeadingNode } from "@lexical/rich-text";
import { $findMatchingParent, $getNearestNodeOfType } from "@lexical/utils";
import {
  $isRangeSelection,
  $isRootOrShadowRoot,
  type BaseSelection,
} from "lexical";


import { useToolbarContext } from "@/components/ui/editor/context/toolbar-context";
import { useUpdateToolbarHandler } from "@/components/ui/editor/editor-hooks/use-update-toolbar";
import { blockTypeToBlockName } from "@/components/ui/editor/plugins/toolbar/block-format/block-format-data";
import { Button } from "@/components/ui/button";
import { Menu, MenuContent } from "@/components/ui/menu";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export function BlockFormatDropDown({
  children,
}: {
  children: React.ReactNode;
}) {
  const { activeEditor, blockType, setBlockType } = useToolbarContext();

  function $updateToolbar(selection: BaseSelection) {
    if ($isRangeSelection(selection)) {
      const anchorNode = selection.anchor.getNode();
      let element =
        anchorNode.getKey() === "root"
          ? anchorNode
          : $findMatchingParent(anchorNode, (e) => {
              const parent = e.getParent();
              return parent !== null && $isRootOrShadowRoot(parent);
            });

      if (element === null) {
        element = anchorNode.getTopLevelElementOrThrow();
      }

      const elementKey = element.getKey();
      const elementDOM = activeEditor.getElementByKey(elementKey);

      if (elementDOM !== null) {
        if ($isListNode(element)) {
          const parentList = $getNearestNodeOfType<ListNode>(
            anchorNode,
            ListNode,
          );
          const type = parentList
            ? parentList.getListType()
            : element.getListType();
          setBlockType(type);
        } else {
          const type = $isHeadingNode(element)
            ? element.getTag()
            : element.getType();
          if (type in blockTypeToBlockName) {
            setBlockType(type as keyof typeof blockTypeToBlockName);
          }
        }
      }
    }
  }

  useUpdateToolbarHandler($updateToolbar);

  const { label, icon } =
    blockTypeToBlockName[blockType] ?? blockTypeToBlockName.paragraph;

  return (
    <Menu>
      <Button intent="outline" size="sm" className="gap-1 px-2">
        {icon}
        <span className="text-sm">{label}</span>
        <ChevronDownIcon />
      </Button>
      <MenuContent>{children}</MenuContent>
    </Menu>
  );
}
