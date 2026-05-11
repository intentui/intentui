import { useState } from "react";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import {
  LockClosedIcon,
  LockOpenIcon,
} from "@heroicons/react/24/outline";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent } from "@/components/ui/tooltip";

export function EditModeTogglePlugin() {
  const [editor] = useLexicalComposerContext();
  const [isEditable, setIsEditable] = useState(() => editor.isEditable());

  return (
    <Tooltip>
      <Button
        intent="plain"
        size="sq-sm"
        onPress={() => {
          editor.setEditable(!editor.isEditable());
          setIsEditable(editor.isEditable());
        }}
        aria-label={`${!isEditable ? "Unlock" : "Lock"} read-only mode`}
      >
        {isEditable ? (
          <LockClosedIcon className="size-4" />
        ) : (
          <LockOpenIcon className="size-4" />
        )}
      </Button>
      <TooltipContent>
        {isEditable ? "View Only Mode" : "Edit Mode"}
      </TooltipContent>
    </Tooltip>
  );
}
