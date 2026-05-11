import { type JSX } from "react";

import { MenuOption } from "@lexical/react/LexicalTypeaheadMenuPlugin";
import { type LexicalEditor } from "lexical";

export class ComponentPickerOption extends MenuOption {
  title: string;
  icon?: JSX.Element;
  keywords: Array<string>;
  keyboardShortcut?: string;
  onSelect: (
    queryString: string,
    editor: LexicalEditor,
    showModal: (
      title: string,
      showModal: (onClose: () => void) => JSX.Element,
    ) => void,
  ) => void;

  constructor(
    title: string,
    options: {
      icon?: JSX.Element;
      keywords?: Array<string>;
      keyboardShortcut?: string;
      onSelect: (
        queryString: string,
        editor: LexicalEditor,
        showModal: (
          title: string,
          showModal: (onClose: () => void) => JSX.Element,
        ) => void,
      ) => void;
    },
  ) {
    super(title);
    this.title = title;
    this.keywords = options.keywords || [];
    this.icon = options.icon;
    this.keyboardShortcut = options.keyboardShortcut;
    this.onSelect = options.onSelect.bind(this);
  }
}
