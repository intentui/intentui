import { INSERT_UNORDERED_LIST_COMMAND } from "@lexical/list";


import { ComponentPickerOption } from "@/components/ui/editor/plugins/picker/component-picker-option";
import { ListBulletIcon } from "@heroicons/react/24/outline";

export function BulletedListPickerPlugin() {
  return new ComponentPickerOption("Bulleted List", {
    icon: <ListBulletIcon className="size-4" />,
    keywords: ["bulleted list", "unordered list", "ul"],
    onSelect: (_, editor) =>
      editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined),
  });
}
