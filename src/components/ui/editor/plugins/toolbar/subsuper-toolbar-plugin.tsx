import { useState } from "react";

import { $isTableSelection } from "@lexical/table";
import {
  $isRangeSelection,
  type BaseSelection,
  FORMAT_TEXT_COMMAND,
} from "lexical";

import { useToolbarContext } from "@/components/ui/editor/context/toolbar-context";
import { useUpdateToolbarHandler } from "@/components/ui/editor/editor-hooks/use-update-toolbar";
import { Toggle } from "@/components/ui/toggle";

export function SubSuperToolbarPlugin() {
  const { activeEditor } = useToolbarContext();
  const [isSubscript, setIsSubscript] = useState(false);
  const [isSuperscript, setIsSuperscript] = useState(false);

  const $updateToolbar = (selection: BaseSelection) => {
    if ($isRangeSelection(selection) || $isTableSelection(selection)) {
      setIsSubscript(selection.hasFormat("subscript"));
      setIsSuperscript(selection.hasFormat("superscript"));
    }
  };

  useUpdateToolbarHandler($updateToolbar);

  return (
    <div className="flex items-center gap-0.5">
      <Toggle
        intent="outline"
        size="sq-sm"
        aria-label="Toggle subscript"
        isSelected={isSubscript}
        onChange={() => {
          activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, "subscript");
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path d="M21.25 20.25H16.75C16.75 17.75 21.25 17.4352 21.25 14.9459C21.25 13.6227 20.2485 12.75 19.0058 12.75C17.9336 12.75 17.1989 13.3949 16.9025 14.2455" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M2.75 5.75L13.25 18.25M13.25 5.75L2.75 18.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      </Toggle>
      <Toggle
        intent="outline"
        size="sq-sm"
        aria-label="Toggle superscript"
        isSelected={isSuperscript}
        onChange={() => {
          activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, "superscript");
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path d="M21.25 11.25H16.75C16.75 8.75 21.25 8.43516 21.25 5.9459C21.25 4.62271 20.2485 3.75 19.0058 3.75C17.9336 3.75 17.1989 4.39493 16.9025 5.24555" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M2.75 5.75L13.25 18.25M13.25 5.75L2.75 18.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      </Toggle>
    </div>
  );
}
