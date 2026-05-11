import type { JSX } from "react";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { TreeView } from "@lexical/react/LexicalTreeView";

import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";

import { Button } from "@/components/ui/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
} from "@/components/ui/modal";
import { ScrollArea } from "@/components/ui/scroll-area";

export function TreeViewPlugin(): JSX.Element {
  const [editor] = useLexicalComposerContext();
  return (
    <Modal>
      <Button intent="plain" size="sq-sm" aria-label="Show editor tree">
        <CodeBracketSquareIcon className="size-4" />
      </Button>
      <ModalContent size="2xl">
        <ModalHeader>
          <ModalTitle>Tree View</ModalTitle>
        </ModalHeader>
        <ScrollArea className="bg-fg text-bg h-96 overflow-hidden rounded-lg p-2 m-(--gutter)">
          <TreeView
            viewClassName="tree-view-output"
            treeTypeButtonClassName="debug-treetype-button"
            timeTravelPanelClassName="debug-timetravel-panel"
            timeTravelButtonClassName="debug-timetravel-button"
            timeTravelPanelSliderClassName="debug-timetravel-panel-slider"
            timeTravelPanelButtonClassName="debug-timetravel-panel-button"
            editor={editor}
          />
        </ScrollArea>
      </ModalContent>
    </Modal>
  );
}
