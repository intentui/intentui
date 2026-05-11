import { useEffect, useState } from "react";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { IS_APPLE, mergeRegister } from "@lexical/utils";
import {
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  COMMAND_PRIORITY_CRITICAL,
  REDO_COMMAND,
  UNDO_COMMAND,
} from "lexical";

import {
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
} from "@heroicons/react/24/outline";

import { useToolbarContext } from "@/components/ui/editor/context/toolbar-context";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export function HistoryToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const { activeEditor, $updateToolbar } = useToolbarContext();
  const [isEditable, setIsEditable] = useState(editor.isEditable());
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);

  useEffect(() => {
    return mergeRegister(
      editor.registerEditableListener((editable) => {
        setIsEditable(editable);
      }),
      activeEditor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          $updateToolbar();
        });
      }),
      activeEditor.registerCommand<boolean>(
        CAN_UNDO_COMMAND,
        (payload) => {
          setCanUndo(payload);
          return false;
        },
        COMMAND_PRIORITY_CRITICAL,
      ),
      activeEditor.registerCommand<boolean>(
        CAN_REDO_COMMAND,
        (payload) => {
          setCanRedo(payload);
          return false;
        },
        COMMAND_PRIORITY_CRITICAL,
      ),
    );
  }, [$updateToolbar, activeEditor, editor]);

  return (
    <ButtonGroup>
      <Button
        isDisabled={!canUndo || !isEditable}
        onPress={() => {
          activeEditor.dispatchCommand(UNDO_COMMAND, undefined);
        }}
        type="button"
        aria-label={IS_APPLE ? "Undo (⌘Z)" : "Undo (Ctrl+Z)"}
        size="sq-sm"
        intent="outline"
      >
        <ArrowUturnLeftIcon className="size-4" />
      </Button>
      <Button
        isDisabled={!canRedo || !isEditable}
        onPress={() => {
          activeEditor.dispatchCommand(REDO_COMMAND, undefined);
        }}
        type="button"
        aria-label={IS_APPLE ? "Redo (⇧⌘Z)" : "Redo (Ctrl+Y)"}
        intent="outline"
        size="sq-sm"
      >
        <ArrowUturnRightIcon className="size-4" />
      </Button>
    </ButtonGroup>
  );
}
