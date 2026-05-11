import { FORMAT_ELEMENT_COMMAND } from "lexical";

import { ComponentPickerOption } from "@/components/ui/editor/plugins/picker/component-picker-option";
import { AlignLeftIcon } from "@/components/ui/editor/icons/align-left-icon.tsx";
import { AlignCenterIcon } from "@/components/ui/editor/icons/align-center-icon.tsx";
import { AlignRightIcon } from "@/components/ui/editor/icons/align-right-icon.tsx";
import { AlignJustifyIcon } from "@/components/ui/editor/icons/align-justify-icon.tsx";

export function AlignmentPickerPlugin({
  alignment,
}: {
  alignment: "left" | "center" | "right" | "justify";
}) {
  return new ComponentPickerOption(`Align ${alignment}`, {
    icon: <AlignIcons alignment={alignment} />,
    keywords: ["align", "justify", alignment],
    onSelect: (_, editor) =>
      editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, alignment),
  });
}

function AlignIcons({
  alignment,
}: {
  alignment: "left" | "center" | "right" | "justify";
}) {
  switch (alignment) {
    case "left":
      return <AlignLeftIcon className="size-4" />;
    case "center":
      return <AlignCenterIcon className="size-4" />;
    case "right":
      return <AlignRightIcon className="size-4" />;
    case "justify":
      return <AlignJustifyIcon className="size-4" />;
  }
}
