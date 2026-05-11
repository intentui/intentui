import { $createQuoteNode } from "@lexical/rich-text";
import { $setBlocksType } from "@lexical/selection";
import { $getSelection, $isRangeSelection } from "lexical";

import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";

import { ComponentPickerOption } from "@/components/ui/editor/plugins/picker/component-picker-option";

export function QuotePickerPlugin() {
  return new ComponentPickerOption("Quote", {
    icon: <ChatBubbleBottomCenterTextIcon className="size-4" />,
    keywords: ["block quote"],
    onSelect: (_, editor) =>
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $setBlocksType(selection, () => $createQuoteNode());
        }
      }),
  });
}
