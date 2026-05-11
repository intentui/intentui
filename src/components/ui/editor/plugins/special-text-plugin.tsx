import type { JSX } from "react";
import { useEffect } from "react";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import type { LexicalEditor } from "lexical";
import { TextNode } from "lexical";

import {
  $createSpecialTextNode,
  SpecialTextNode,
} from "@/components/ui/editor/nodes/special-text-node";

const BRACKETED_TEXT_REGEX = /\[([^\[\]]+)\]/; // eslint-disable-line

function $findAndTransformText(node: TextNode): null | TextNode {
  const text = node.getTextContent();

  const match = BRACKETED_TEXT_REGEX.exec(text);
  if (match) {
    const startIndex = match.index;

    let targetNode;
    if (startIndex === 0) {
      [targetNode] = node.splitText(startIndex + match[0].length);
    } else {
      [, targetNode] = node.splitText(startIndex, startIndex + match[0].length);
    }

    const specialTextNode = $createSpecialTextNode(match[1]);
    targetNode.replace(specialTextNode);
    return specialTextNode;
  }

  return null;
}

function $textNodeTransform(node: TextNode): void {
  let targetNode: TextNode | null = node;

  while (targetNode !== null) {
    if (!targetNode.isSimpleText()) {
      return;
    }

    targetNode = $findAndTransformText(targetNode);
  }
}

function useTextTransformation(editor: LexicalEditor): void {
  useEffect(() => {
    if (!editor.hasNodes([SpecialTextNode])) {
      throw new Error(
        "SpecialTextPlugin: SpecialTextNode not registered on editor",
      );
    }

    return editor.registerNodeTransform(TextNode, $textNodeTransform);
  }, [editor]);
}

export default function SpecialTextPlugin(): JSX.Element | null {
  const [editor] = useLexicalComposerContext();
  useTextTransformation(editor);
  return null;
}
