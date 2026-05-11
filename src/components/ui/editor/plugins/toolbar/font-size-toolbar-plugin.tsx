import { useCallback, useState } from "react";

import {
  $getSelectionStyleValueForProperty,
  $patchStyleText,
} from "@lexical/selection";
import { $getSelection, $isRangeSelection, type BaseSelection } from "lexical";


import { useToolbarContext } from "@/components/ui/editor/context/toolbar-context";
import { useUpdateToolbarHandler } from "@/components/ui/editor/editor-hooks/use-update-toolbar";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

const DEFAULT_FONT_SIZE = 16;
const MIN_FONT_SIZE = 1;
const MAX_FONT_SIZE = 72;

export function FontSizeToolbarPlugin() {
  const style = "font-size";
  const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE);

  const { activeEditor } = useToolbarContext();

  const $updateToolbar = (selection: BaseSelection) => {
    if ($isRangeSelection(selection)) {
      const value = $getSelectionStyleValueForProperty(
        selection,
        "font-size",
        `${DEFAULT_FONT_SIZE}px`,
      );
      setFontSize(parseInt(value) || DEFAULT_FONT_SIZE);
    }
  };

  useUpdateToolbarHandler($updateToolbar);

  const updateFontSize = useCallback(
    (newSize: number) => {
      const size = Math.min(Math.max(newSize, MIN_FONT_SIZE), MAX_FONT_SIZE);
      activeEditor.update(() => {
        const selection = $getSelection();
        if (selection !== null) {
          $patchStyleText(selection, {
            [style]: `${size}px`,
          });
        }
      });
      setFontSize(size);
    },
    [activeEditor, style],
  );

  return (
    <ButtonGroup>
      <Button
        intent="outline"
        size="sq-sm"
        onPress={() => updateFontSize(fontSize - 1)}
        isDisabled={fontSize <= MIN_FONT_SIZE}
        aria-label="Decrease font size"
      >
        <MinusIcon />
      </Button>
      <input
        type="text"
        inputMode="numeric"
        value={String(fontSize)}
        onChange={(e) =>
          updateFontSize(parseInt(e.target.value) || DEFAULT_FONT_SIZE)
        }
        aria-label="Font size"
        className="w-14 h-9 sm:h-8 border border-border bg-transparent text-center text-sm/none text-fg outline-hidden focus-visible:border-ring focus-visible:relative focus-visible:z-10 focus-visible:ring-3 focus-visible:ring-ring/20"
      />
      <Button
        intent="outline"
        size="sq-sm"
        onPress={() => updateFontSize(fontSize + 1)}
        isDisabled={fontSize >= MAX_FONT_SIZE}
        aria-label="Increase font size"
      >
        <PlusIcon />
      </Button>
    </ButtonGroup>
  );
}
