import { INSERT_TABLE_COMMAND } from "@lexical/table";

import { TableCellsIcon } from "@heroicons/react/24/outline";

import { ComponentPickerOption } from "@/components/ui/editor/plugins/picker/component-picker-option";
import { InsertTableDialog } from "@/components/ui/editor/plugins/table-plugin";

export function TablePickerPlugin() {
  return new ComponentPickerOption("Table", {
    icon: <TableCellsIcon className="size-4" />,
    keywords: ["table", "grid", "spreadsheet", "rows", "columns"],
    onSelect: (_, editor, showModal) =>
      showModal("Insert Table", (onClose) => (
        <InsertTableDialog activeEditor={editor} onClose={onClose} />
      )),
  });
}

export function DynamicTablePickerPlugin({
  queryString,
}: {
  queryString: string;
}) {
  const options: Array<ComponentPickerOption> = [];

  if (queryString == null) {
    return options;
  }

  const tableMatch = queryString.match(/^([1-9]\d?)(?:x([1-9]\d?)?)?$/);

  if (tableMatch !== null) {
    const rows = tableMatch[1];
    const colOptions = tableMatch[2]
      ? [tableMatch[2]]
      : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(String);

    options.push(
      ...colOptions.map(
        (columns) =>
          new ComponentPickerOption(`${rows}x${columns} Table`, {
            icon: <i className="icon table" />,
            keywords: ["table"],
            onSelect: (_, editor) =>
              editor.dispatchCommand(INSERT_TABLE_COMMAND, { columns, rows }),
          }),
      ),
    );
  }

  return options;
}
