import { INSERT_CHECK_LIST_COMMAND } from "@lexical/list";

import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";

import { ComponentPickerOption } from "@/components/ui/editor/plugins/picker/component-picker-option";

export function CheckListPickerPlugin() {
  return new ComponentPickerOption("Check List", {
    icon: <ClipboardDocumentCheckIcon className="size-4" />,
    keywords: ["check list", "todo list"],
    onSelect: (_, editor) =>
      editor.dispatchCommand(INSERT_CHECK_LIST_COMMAND, undefined),
  });
}
