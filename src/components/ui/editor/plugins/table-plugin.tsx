import type { JSX } from "react";
import { useEffect, useState } from "react";

import { INSERT_TABLE_COMMAND } from "@lexical/table";
import { type LexicalEditor } from "lexical";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function InsertTableDialog({
  activeEditor,
  onClose,
}: {
  activeEditor: LexicalEditor;
  onClose: () => void;
}): JSX.Element {
  const [rows, setRows] = useState("5");
  const [columns, setColumns] = useState("5");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const row = Number(rows);
    const column = Number(columns);
    if (row && row > 0 && row <= 500 && column && column > 0 && column <= 50) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [rows, columns]);

  const onClick = () => {
    activeEditor.dispatchCommand(INSERT_TABLE_COMMAND, {
      columns,
      rows,
    });

    onClose();
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-2">
        <Label>Rows</Label>
        <Input
          placeholder="# of rows (1-500)"
          onChange={(e) => setRows(e.target.value)}
          value={rows}
          inputMode="numeric"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Columns</Label>
        <Input
          placeholder="# of columns (1-50)"
          onChange={(e) => setColumns(e.target.value)}
          value={columns}
          inputMode="numeric"
        />
      </div>
      <div className="flex justify-end">
        <Button isDisabled={isDisabled} onPress={onClick} intent="primary">
          Confirm
        </Button>
      </div>
    </div>
  );
}
