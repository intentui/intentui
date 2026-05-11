import { useToolbarContext } from "@/components/ui/editor/context/toolbar-context";
import { InsertLayoutDialog } from "@/components/ui/editor/plugins/layout-plugin";
import { MenuItem } from "@/components/ui/menu";
import { ViewColumnsIcon } from "@heroicons/react/24/outline";

export function InsertColumnsLayout() {
  const { activeEditor, showModal } = useToolbarContext();

  return (
    <MenuItem
      onAction={() =>
        showModal("Insert Columns Layout", (onClose) => (
          <InsertLayoutDialog activeEditor={activeEditor} onClose={onClose} />
        ))
      }
    >
      <div className="flex items-center gap-1">
        <ViewColumnsIcon className="size-4" width={16} height={16} />
        <span>Columns Layout</span>
      </div>
    </MenuItem>
  );
}
