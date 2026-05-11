import { useEffect } from "react";

import {
  type SerializedDocument,
  editorStateFromSerializedDocument,
  serializedDocumentFromEditorState,
} from "@lexical/file";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { CLEAR_HISTORY_COMMAND } from "lexical";

import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { toast } from "sonner";

import {
  docFromHash,
  docToHash,
} from "@/components/ui/editor/utils/doc-serialization";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent } from "@/components/ui/tooltip";

export function ShareContentPlugin() {
  const [editor] = useLexicalComposerContext();
  async function shareDoc(doc: SerializedDocument): Promise<void> {
    const url = new URL(window.location.toString());
    url.hash = await docToHash(doc);
    const newUrl = url.toString();
    window.history.replaceState({}, "", newUrl);
    await window.navigator.clipboard.writeText(newUrl);
  }
  useEffect(() => {
    docFromHash(window.location.hash).then((doc) => {
      if (doc && doc.source === "editor") {
        editor.setEditorState(editorStateFromSerializedDocument(editor, doc));
        editor.dispatchCommand(CLEAR_HISTORY_COMMAND, undefined);
      }
    });
  }, [editor]);

  return (
    <Tooltip>
      <Button
        intent="plain"
        size="sq-sm"
        onPress={() =>
          shareDoc(
            serializedDocumentFromEditorState(editor.getEditorState(), {
              source: "editor",
            }),
          ).then(
            () => toast.success("URL copied to clipboard"),
            () => toast.error("URL could not be copied to clipboard"),
          )
        }
        aria-label="Share Playground link to current editor state"
      >
        <PaperAirplaneIcon className="size-4" />
      </Button>
      <TooltipContent>Share Content</TooltipContent>
    </Tooltip>
  );
}
