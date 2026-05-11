import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { CLEAR_EDITOR_COMMAND } from "lexical";

import { TrashIcon } from "@heroicons/react/24/outline";

import { Button } from "@/components/ui/button";
import {
  Modal,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "@/components/ui/modal";
import { Tooltip, TooltipContent } from "@/components/ui/tooltip";

export function ClearEditorActionPlugin() {
  const [editor] = useLexicalComposerContext();

  return (
    <Tooltip>
      <Modal>
        <Button intent="plain" size="sq-sm" aria-label="Clear editor">
          <TrashIcon className="size-4" />
        </Button>
        <ModalContent size="sm">
          <ModalHeader>
            <ModalTitle>Clear Editor</ModalTitle>
            <ModalDescription>
              Are you sure you want to clear the editor?
            </ModalDescription>
          </ModalHeader>
          <ModalFooter>
            <ModalClose intent="outline">Cancel</ModalClose>
            <ModalClose
              intent="danger"
              onPress={() => {
                editor.dispatchCommand(CLEAR_EDITOR_COMMAND, undefined);
              }}
            >
              Clear
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <TooltipContent>Clear Editor</TooltipContent>
    </Tooltip>
  );
}
