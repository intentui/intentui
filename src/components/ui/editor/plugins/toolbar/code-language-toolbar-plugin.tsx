import { useCallback, useState } from "react";

import { $isCodeNode } from "@lexical/code";
import {
  CODE_LANGUAGE_FRIENDLY_NAME_MAP,
  CODE_LANGUAGE_MAP,
} from "@lexical/code-prism";
import { $isListNode } from "@lexical/list";
import { $findMatchingParent } from "@lexical/utils";
import {
  $getNodeByKey,
  $isRangeSelection,
  $isRootOrShadowRoot,
  type BaseSelection,
} from "lexical";

import { useToolbarContext } from "@/components/ui/editor/context/toolbar-context";
import { useUpdateToolbarHandler } from "@/components/ui/editor/editor-hooks/use-update-toolbar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

function getCodeLanguageOptions(): [string, string][] {
  const options: [string, string][] = [];

  for (const [lang, friendlyName] of Object.entries(
    CODE_LANGUAGE_FRIENDLY_NAME_MAP,
  )) {
    options.push([lang, friendlyName]);
  }

  return options;
}

const CODE_LANGUAGE_OPTIONS = getCodeLanguageOptions();

export function CodeLanguageToolbarPlugin() {
  const { activeEditor } = useToolbarContext();
  const [codeLanguage, setCodeLanguage] = useState<string>("");
  const [selectedElementKey, setSelectedElementKey] = useState<string | null>(
    null,
  );

  const $updateToolbar = (selection: BaseSelection) => {
    if ($isRangeSelection(selection)) {
      const anchorNode = selection.anchor.getNode();
      let element =
        anchorNode.getKey() === "root"
          ? anchorNode
          : $findMatchingParent(anchorNode, (e) => {
              const parent = e.getParent();
              return parent !== null && $isRootOrShadowRoot(parent);
            });

      if (element === null) {
        element = anchorNode.getTopLevelElementOrThrow();
      }

      const elementKey = element.getKey();
      const elementDOM = activeEditor.getElementByKey(elementKey);

      if (elementDOM !== null) {
        setSelectedElementKey(elementKey);

        if (!$isListNode(element) && $isCodeNode(element)) {
          const language =
            element.getLanguage() as keyof typeof CODE_LANGUAGE_MAP;
          setCodeLanguage(
            language ? CODE_LANGUAGE_MAP[language] || language : "",
          );
          return;
        }
      }
    }
  };

  useUpdateToolbarHandler($updateToolbar);

  const onCodeLanguageSelect = useCallback(
    (value: string) => {
      activeEditor.update(() => {
        if (selectedElementKey !== null) {
          const node = $getNodeByKey(selectedElementKey);
          if ($isCodeNode(node)) {
            node.setLanguage(value);
          }
        }
      });
      setCodeLanguage(value);
    },
    [activeEditor, selectedElementKey],
  );

  return (
    <Select
      value={codeLanguage || null}
      onChange={(key) => {
        if (key !== null) onCodeLanguageSelect(String(key));
      }}
      aria-label="Code language"
      placeholder="Select Language"
    >
      <SelectTrigger className="w-40" />
      <SelectContent>
        {CODE_LANGUAGE_OPTIONS.map(([value, label]) => (
          <SelectItem key={value} id={value} textValue={label}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
