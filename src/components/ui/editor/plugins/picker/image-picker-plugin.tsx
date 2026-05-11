import { InsertImageDialog } from "@/components/ui/editor/extensions/images-extension";
import { ComponentPickerOption } from "@/components/ui/editor/plugins/picker/component-picker-option";
import { PhotoIcon } from "@heroicons/react/24/outline";

export function ImagePickerPlugin() {
  return new ComponentPickerOption("Image", {
    icon: <PhotoIcon className="size-4" />,
    keywords: ["image", "photo", "picture", "file"],
    onSelect: (_, editor, showModal) =>
      showModal("Insert Image", (onClose) => (
        <InsertImageDialog activeEditor={editor} onClose={onClose} />
      )),
  });
}
