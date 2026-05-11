import { effect, namedSignals } from "@lexical/extension";
import { $trimTextContentFromAnchor } from "@lexical/selection";
import { $restoreEditorState } from "@lexical/utils";
import {
  $getSelection,
  $isRangeSelection,
  type EditorState,
  RootNode,
  defineExtension,
  safeCast,
} from "lexical";

export interface MaxLengthConfig {
  disabled: boolean;
  maxLength: number;
}

export const MaxLengthExtension = defineExtension({
  build: (_, config) => namedSignals(config),
  config: safeCast<MaxLengthConfig>({ disabled: false, maxLength: 30 }),
  name: "@intentui-editor/MaxLength",
  register: (editor, _, state) =>
    effect(() => {
      const output = state.getOutput();
      if (output.disabled.value) {
        return;
      }
      const maxLength = output.maxLength.value;
      let lastRestoredEditorState: EditorState | null = null;
      return editor.registerNodeTransform(RootNode, (rootNode: RootNode) => {
        const selection = $getSelection();
        if (!$isRangeSelection(selection) || !selection.isCollapsed()) {
          return;
        }
        const prevEditorState = editor.getEditorState();
        const prevTextContentSize = prevEditorState.read(() =>
          rootNode.getTextContentSize(),
        );
        const textContentSize = rootNode.getTextContentSize();
        if (prevTextContentSize !== textContentSize) {
          const delCount = textContentSize - maxLength;
          const anchor = selection.anchor;

          if (delCount > 0) {
            if (
              prevTextContentSize === maxLength &&
              lastRestoredEditorState !== prevEditorState
            ) {
              lastRestoredEditorState = prevEditorState;
              $restoreEditorState(editor, prevEditorState);
            } else {
              $trimTextContentFromAnchor(editor, anchor, delCount);
            }
          }
        }
      });
    }),
});
