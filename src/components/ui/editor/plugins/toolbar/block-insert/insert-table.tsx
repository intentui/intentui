import { TableCellsIcon } from "@heroicons/react/24/outline";

import { useToolbarContext } from "@/components/ui/editor/context/toolbar-context";
import { InsertTableDialog } from "@/components/ui/editor/plugins/table-plugin";
import { MenuItem } from "@/components/ui/menu";

export function InsertTable() {
  const { activeEditor, showModal } = useToolbarContext();

  return (
    <MenuItem
      onAction={() =>
        showModal("Insert Table", (onClose) => (
          <InsertTableDialog activeEditor={activeEditor} onClose={onClose} />
        ))
      }
    >
      <div className="flex items-center gap-1">
        <TableCellsIcon className="size-4" width={16} height={16} />
        <span>Table</span>
      </div>
    </MenuItem>
  );
}
