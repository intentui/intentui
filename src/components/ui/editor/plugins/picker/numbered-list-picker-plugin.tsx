import { INSERT_ORDERED_LIST_COMMAND } from "@lexical/list";

import { NumberedListIcon } from "@heroicons/react/24/outline";

import { ComponentPickerOption } from "@/components/ui/editor/plugins/picker/component-picker-option";

export function NumberedListPickerPlugin() {
  return new ComponentPickerOption("Numbered List", {
    icon: <NumberedListIcon className="size-4" />,
    keywords: ["numbered list", "ordered list", "ol"],
    onSelect: (_, editor) =>
      editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined),
  });
}
