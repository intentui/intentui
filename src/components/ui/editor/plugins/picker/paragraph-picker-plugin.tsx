import { $setBlocksType } from "@lexical/selection";
import {
  $createParagraphNode,
  $getSelection,
  $isRangeSelection,
} from "lexical";

import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";

import { ComponentPickerOption } from "@/components/ui/editor/plugins/picker/component-picker-option";

export function ParagraphPickerPlugin() {
  return new ComponentPickerOption("Paragraph", {
    icon: <Bars3BottomLeftIcon className="size-4" />,
    keywords: ["normal", "paragraph", "p", "text"],
    onSelect: (_, editor) =>
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $setBlocksType(selection, () => $createParagraphNode());
        }
      }),
  });
}
