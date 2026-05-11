import { useCallback, useState } from "react";

import { $isTableSelection } from "@lexical/table";
import {
  $isRangeSelection,
  type BaseSelection,
  FORMAT_TEXT_COMMAND,
  type TextFormatType,
} from "lexical";



import { useToolbarContext } from "@/components/ui/editor/context/toolbar-context";
import { useUpdateToolbarHandler } from "@/components/ui/editor/editor-hooks/use-update-toolbar";
import { Toggle } from "@/components/ui/toggle";
import { BoldIcon } from "@/components/ui/editor/icons/bold-icon.tsx";
import { ItalicIcon } from "@/components/ui/editor/icons/italic-icon.tsx";
import { UnderlineIcon } from "@/components/ui/editor/icons/underline-icon.tsx";
import { StrikethroughIcon } from "@/components/ui/editor/icons/strikethrough-icon.tsx";

const FORMATS = [
  { format: "bold", icon: BoldIcon, label: "Bold" },
  { format: "italic", icon: ItalicIcon, label: "Italic" },
  { format: "underline", icon: UnderlineIcon, label: "Underline" },
  { format: "strikethrough", icon: StrikethroughIcon, label: "Strikethrough" },
] as const;

export function FontFormatToolbarPlugin() {
  const { activeEditor } = useToolbarContext();
  const [activeFormats, setActiveFormats] = useState<string[]>([]);

  const $updateToolbar = useCallback((selection: BaseSelection) => {
    if ($isRangeSelection(selection) || $isTableSelection(selection)) {
      const formats: string[] = [];
      FORMATS.forEach(({ format }) => {
        if (selection.hasFormat(format as TextFormatType)) {
          formats.push(format);
        }
      });
      setActiveFormats((prev) => {
        if (
          prev.length !== formats.length ||
          !formats.every((f) => prev.includes(f))
        ) {
          return formats;
        }
        return prev;
      });
    }
  }, []);

  useUpdateToolbarHandler($updateToolbar);

  return (
    <div className="flex items-center gap-0.5">
      {FORMATS.map(({ format, icon: Icon, label }) => (
        <Toggle
          key={format}
          aria-label={label}
          size="sq-sm"
          intent="outline"
          isSelected={activeFormats.includes(format)}
          onChange={() => {
            activeEditor.dispatchCommand(
              FORMAT_TEXT_COMMAND,
              format as TextFormatType,
            );
          }}
        >
          <Icon className="size-4" />
        </Toggle>
      ))}
    </div>
  );
}
