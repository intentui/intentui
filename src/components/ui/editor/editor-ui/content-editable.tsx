import type { JSX } from "react";

import { ContentEditable as LexicalContentEditable } from "@lexical/react/LexicalContentEditable";

type Props = {
  placeholder: string;
  className?: string;
  placeholderClassName?: string;
};

export function ContentEditable({
  placeholder,
  className,
  placeholderClassName,
}: Props): JSX.Element {
  return (
    <LexicalContentEditable
      className={`ContentEditable__root relative block overflow-y-auto px-4 py-2 focus:outline-none ${className ?? ""}`.trim()}
      aria-placeholder={placeholder}
      placeholder={
        <div
          className={`text-muted-fg pointer-events-none absolute top-0 left-0 overflow-hidden px-4 py-2 text-ellipsis select-none ${placeholderClassName ?? ""}`.trim()}
        >
          {placeholder}
        </div>
      }
    />
  );
}
