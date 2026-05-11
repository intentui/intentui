import { PhotoIcon } from "@heroicons/react/24/outline";

import { useToolbarContext } from "@/components/ui/editor/context/toolbar-context";
import { InsertImageDialog } from "@/components/ui/editor/extensions/images-extension";
import { MenuItem } from "@/components/ui/menu";

export function InsertImage() {
  const { activeEditor, showModal } = useToolbarContext();

  return (
    <MenuItem
      onAction={() => {
        showModal("Insert Image", (onClose) => (
          <InsertImageDialog activeEditor={activeEditor} onClose={onClose} />
        ));
      }}
    >
      <div className="flex items-center gap-1">
        <PhotoIcon className="size-4" width={16} height={16} />
        <span>Image</span>
      </div>
    </MenuItem>
  );
}
