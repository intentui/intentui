import { useState } from "react";

import { $isLinkNode } from "@lexical/link";
import { $findMatchingParent } from "@lexical/utils";
import {
  $isElementNode,
  $isRangeSelection,
  type BaseSelection,
  type ElementFormatType,
  FORMAT_ELEMENT_COMMAND,
  INDENT_CONTENT_COMMAND,
  OUTDENT_CONTENT_COMMAND,
} from "lexical";

import { AlignLeftIcon } from "@/components/ui/editor/icons/align-left-icon.tsx";
import { AlignCenterIcon } from "@/components/ui/editor/icons/align-center-icon.tsx";
import { AlignRightIcon } from "@/components/ui/editor/icons/align-right-icon.tsx";
import { AlignJustifyIcon } from "@/components/ui/editor/icons/align-justify-icon.tsx";

import { useToolbarContext } from "@/components/ui/editor/context/toolbar-context";
import { useUpdateToolbarHandler } from "@/components/ui/editor/editor-hooks/use-update-toolbar";
import { getSelectedNode } from "@/components/ui/editor/utils/get-selected-node";
import { Separator } from "@/components/ui/separator";
import { Toggle } from "@/components/ui/toggle";

const ELEMENT_FORMAT_OPTIONS: {
  [key in Exclude<ElementFormatType, "start" | "end" | "">]: {
    icon: React.ReactNode;
    name: string;
  };
} = {
  left: {
    icon: <AlignLeftIcon/>
    ,
    name: "Left Align",
  },
  center: {
    icon: <AlignCenterIcon/>
    ,
    name: "Center Align",
  },
  right: {
    icon: <AlignRightIcon/>
    ,
    name: "Right Align",
  },
  justify: {
    icon: <AlignJustifyIcon/>
    ,
    name: "Justify Align",
  },
};

export function ElementFormatToolbarPlugin({
  separator = true,
}: {
  separator?: boolean;
}) {
  const { activeEditor } = useToolbarContext();
  const [elementFormat, setElementFormat] = useState<ElementFormatType>("left");

  const $updateToolbar = (selection: BaseSelection) => {
    if ($isRangeSelection(selection)) {
      const node = getSelectedNode(selection);
      const parent = node.getParent();

      let matchingParent;
      if ($isLinkNode(parent)) {
        matchingParent = $findMatchingParent(
          node,
          (parentNode) => $isElementNode(parentNode) && !parentNode.isInline(),
        );
      }
      setElementFormat(
        $isElementNode(matchingParent)
          ? matchingParent.getFormatType()
          : $isElementNode(node)
            ? node.getFormatType()
            : parent?.getFormatType() || "left",
      );
    }
  };

  useUpdateToolbarHandler($updateToolbar);

  return (
    <>
      <div className="flex items-center gap-0.5">
        {Object.entries(ELEMENT_FORMAT_OPTIONS).map(([value, option]) => (
          <Toggle
            key={value}
            intent="outline"
            size="sq-sm"
            aria-label={option.name}
            isSelected={elementFormat === value}
            onChange={() => {
              setElementFormat(value as ElementFormatType);
              activeEditor.dispatchCommand(
                FORMAT_ELEMENT_COMMAND,
                value as ElementFormatType,
              );
            }}
          >
            {option.icon}
          </Toggle>
        ))}
      </div>
      {separator && <Separator orientation="vertical" className="!h-7" />}
      <div className="flex items-center gap-0.5">
        <Toggle
          intent="outline"
          size="sq-sm"
          aria-label="Outdent"
          onChange={() =>
            activeEditor.dispatchCommand(OUTDENT_CONTENT_COMMAND, undefined)
          }
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
            <path d="M21.25 14V10L18.25 12L21.25 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.25 5.75H2.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.25 18.25H2.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.25 12H2.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.5 12L20.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

        </Toggle>
        <Toggle
          intent="outline"
          size="sq-sm"
          aria-label="Indent"
          onChange={() =>
            activeEditor.dispatchCommand(INDENT_CONTENT_COMMAND, undefined)
          }
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
            <path d="M9.75 5.75H21.25M9.75 18.25H21.25M9.75 12H21.25M4.5 12L3.5 12M2.75 10V14L5.75 12L2.75 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

        </Toggle>
      </div>
    </>
  );
}
