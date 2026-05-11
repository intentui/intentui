import { $createHeadingNode } from "@lexical/rich-text";
import { $setBlocksType } from "@lexical/selection";
import { $getSelection, $isRangeSelection } from "lexical";

import { H1Icon, H2Icon, H3Icon } from "@heroicons/react/24/outline";

import { ComponentPickerOption } from "@/components/ui/editor/plugins/picker/component-picker-option";

export function HeadingPickerPlugin({ n }: { n: 1 | 2 | 3 }) {
  return new ComponentPickerOption(`Heading ${n}`, {
    icon: <HeadingIcons n={n} />,
    keywords: ["heading", "header", `h${n}`],
    onSelect: (_, editor) =>
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $setBlocksType(selection, () => $createHeadingNode(`h${n}`));
        }
      }),
  });
}

function HeadingIcons({ n }: { n: number }) {
  switch (n) {
    case 1:
      return <H1Icon className="size-4" />;
    case 2:
      return <H2Icon className="size-4" />;
    case 3:
      return <H3Icon className="size-4" />;
  }
}
