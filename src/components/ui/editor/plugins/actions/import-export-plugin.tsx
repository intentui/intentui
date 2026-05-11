import { exportFile, importFile } from "@lexical/file";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import {
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent } from "@/components/ui/tooltip";

export function ImportExportPlugin() {
  const [editor] = useLexicalComposerContext();
  return (
    <>
      <Tooltip>
        <Button
          intent="plain"
          size="sq-sm"
          onPress={() => importFile(editor)}
          aria-label="Import editor state from JSON"
        >
          <ArrowUpTrayIcon className="size-4" />
        </Button>
        <TooltipContent>Import Content</TooltipContent>
      </Tooltip>

      <Tooltip>
        <Button
          intent="plain"
          size="sq-sm"
          onPress={() =>
            exportFile(editor, {
              fileName: `Editor ${new Date().toISOString()}`,
              source: "Editor",
            })
          }
          aria-label="Export editor state to JSON"
        >
          <ArrowDownTrayIcon className="size-4" />
        </Button>
        <TooltipContent>Export Content</TooltipContent>
      </Tooltip>
    </>
  );
}
