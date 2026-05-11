import { effect, namedSignals } from "@lexical/extension";
import { type Transformer, registerMarkdownShortcuts } from "@lexical/markdown";
import { defineExtension, safeCast } from "lexical";

export const MarkdownShortcutsExtension = defineExtension({
  build: (_, config) => namedSignals(config),
  config: safeCast<{ transformers: Array<Transformer> }>({ transformers: [] }),
  name: "@intentui-editor/MarkdownShortcuts",
  register: (editor, _, state) =>
    effect(() => {
      registerMarkdownShortcuts(editor, state.getOutput().transformers.value);
    }),
});
