import {
  type JSX,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import * as ReactDOM from "react-dom";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { DraggableBlockPlugin_EXPERIMENTAL } from "@lexical/react/LexicalDraggableBlockPlugin";
import {
  $createParagraphNode,
  $createTextNode,
  $getNearestNodeFromDOMNode,
  $getNodeByKey,
  $isParagraphNode,
  $isTextNode,
  type NodeKey,
} from "lexical";


import { useEditorModal } from "@/components/ui/editor/editor-hooks/use-modal";
import { Button } from "@/components/ui/button";

import { ComponentPickerOption } from "./picker/component-picker-option";
import { PlusIcon } from "@heroicons/react/20/solid";

const DRAGGABLE_BLOCK_MENU_CLASSNAME = "draggable-block-menu";

type PickerState = {
  insertBefore: boolean;
  targetNodeKey: NodeKey;
};

function isOnMenu(element: HTMLElement): boolean {
  return !!element.closest(`.${DRAGGABLE_BLOCK_MENU_CLASSNAME}`);
}

export function DraggableBlockPlugin({
  anchorElem,
  baseOptions = [],
  dynamicOptionsFn,
}: {
  anchorElem: HTMLElement | null;
  baseOptions?: Array<ComponentPickerOption>;
  dynamicOptionsFn?: ({
    queryString,
  }: {
    queryString: string;
  }) => Array<ComponentPickerOption>;
}): JSX.Element | null {
  const [editor] = useLexicalComposerContext();
  const [modal, showModal] = useEditorModal();
  const menuRef = useRef<HTMLDivElement>(null);
  const pickerRef = useRef<HTMLDivElement>(null);
  const targetLineRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [draggableElement, setDraggableElement] = useState<HTMLElement | null>(
    null,
  );
  const [pickerState, setPickerState] = useState<PickerState | null>(null);
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [queryString, setQueryString] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [pickerPosition, setPickerPosition] = useState<{
    left: number;
    top: number;
  } | null>(null);

  const options = useMemo(() => {
    if (!queryString) {
      return baseOptions;
    }
    const regex = new RegExp(queryString, "i");
    return [
      ...(dynamicOptionsFn?.({ queryString }) ?? []),
      ...baseOptions.filter(
        (option) =>
          regex.test(option.title) ||
          option.keywords.some((keyword) => regex.test(keyword)),
      ),
    ];
  }, [baseOptions, dynamicOptionsFn, queryString]);

  useEffect(() => {
    if (!isPickerOpen) return;
    setHighlightedIndex((current) =>
      Math.min(current, Math.max(options.length - 1, 0)),
    );
  }, [isPickerOpen, options.length]);

  useEffect(() => {
    if (!isPickerOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (
        (pickerRef.current && pickerRef.current.contains(target)) ||
        (menuRef.current && menuRef.current.contains(target))
      ) {
        return;
      }
      setIsPickerOpen(false);
      setPickerState(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isPickerOpen]);

  const selectOption = useCallback(
    (option: ComponentPickerOption) => {
      if (!pickerState) {
        setIsPickerOpen(false);
        return;
      }
      setIsPickerOpen(false);
      editor.update(() => {
        const node = $getNodeByKey(pickerState.targetNodeKey);
        if (!node) return;
        const placeholder = $createParagraphNode();
        const textNode = $createTextNode("");
        placeholder.append(textNode);
        if (pickerState.insertBefore) {
          node.insertBefore(placeholder);
        } else {
          node.insertAfter(placeholder);
        }
        textNode.select();
        option.onSelect(queryString, editor, showModal);
        const latestPlaceholder = placeholder.getLatest();
        if ($isParagraphNode(latestPlaceholder)) {
          const onlyChild = latestPlaceholder.getFirstChild();
          if (
            $isTextNode(onlyChild) &&
            onlyChild.getTextContent().length === 0 &&
            latestPlaceholder.getChildrenSize() === 1
          ) {
            latestPlaceholder.remove();
          }
        }
      });
    },
    [editor, pickerState, queryString, showModal],
  );

  useEffect(() => {
    if (!isPickerOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!options.length) return;
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setHighlightedIndex((i) => (i + 1 >= options.length ? 0 : i + 1));
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setHighlightedIndex((i) => (i - 1 < 0 ? options.length - 1 : i - 1));
      } else if (event.key === "Enter") {
        event.preventDefault();
        const option = options[highlightedIndex];
        if (option) selectOption(option);
      } else if (event.key === "Escape") {
        event.preventDefault();
        setIsPickerOpen(false);
        setPickerState(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [highlightedIndex, isPickerOpen, options, selectOption]);

  useEffect(() => {
    if (isPickerOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isPickerOpen]);

  function openComponentPicker(e: React.MouseEvent) {
    if (!draggableElement || !editor) return;

    let targetNodeKey: NodeKey | null = null;
    editor.read(() => {
      const resolvedNode = $getNearestNodeFromDOMNode(draggableElement);
      if (resolvedNode) {
        targetNodeKey = resolvedNode.getKey();
      }
    });

    if (!targetNodeKey) return;

    const insertBefore = e.altKey || e.ctrlKey;
    const rect = menuRef.current?.getBoundingClientRect();
    setPickerPosition(
      rect
        ? {
            left: rect.left + rect.width + window.scrollX + 8,
            top: rect.top + window.scrollY,
          }
        : null,
    );
    setPickerState({ insertBefore, targetNodeKey });
    setQueryString("");
    setHighlightedIndex(0);
    setIsPickerOpen(true);
  }

  if (!anchorElem) return null;

  return (
    <>
      {modal}
      {isPickerOpen && pickerPosition
        ? ReactDOM.createPortal(
            <div
              ref={pickerRef}
              className="absolute z-50 w-56 rounded-md bg-overlay text-overlay-fg shadow-md ring-1 ring-border"
              style={{
                left: pickerPosition.left,
                top: pickerPosition.top,
              }}
            >
              <input
                ref={inputRef}
                value={queryString}
                onChange={(e) => setQueryString(e.target.value)}
                placeholder="Filter blocks..."
                className="w-full border-b border-border bg-transparent px-3 py-2 text-sm outline-hidden placeholder:text-muted-fg"
              />
              <ul className="max-h-64 overflow-y-auto p-1">
                {options.length === 0 ? (
                  <li className="px-2 py-1.5 text-sm text-muted-fg">
                    No results found.
                  </li>
                ) : (
                  options.map((option, i) => (
                    <li
                      key={option.key}
                      className={`flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden ${
                        highlightedIndex === i
                          ? "bg-secondary text-secondary-fg"
                          : ""
                      } hover:bg-secondary hover:text-secondary-fg`}
                      onClick={() => {
                        setHighlightedIndex(i);
                        selectOption(option);
                      }}
                      onMouseEnter={() => setHighlightedIndex(i)}
                    >
                      {option.icon}
                      <span>{option.title}</span>
                    </li>
                  ))
                )}
              </ul>
            </div>,
            document.body,
          )
        : null}
      <DraggableBlockPlugin_EXPERIMENTAL
        anchorElem={anchorElem}
        menuRef={menuRef as React.RefObject<HTMLDivElement>}
        targetLineRef={targetLineRef as React.RefObject<HTMLDivElement>}
        menuComponent={
          <div
            ref={menuRef}
            className="draggable-block-menu absolute top-0 left-0 flex items-center opacity-0 will-change-transform"
          >
            <Button
              intent="plain"
              size="sq-xs"
              aria-label="Insert block (Alt/Ctrl: above)"
              className="cursor-pointer rounded-sm text-muted-fg hover:bg-secondary hover:text-fg"
              onPress={openComponentPicker as unknown as () => void}
            >
              <PlusIcon />
            </Button>
            <Button
              intent="plain"
              size="sq-xs"
              aria-label="Drag block"
              className="cursor-grab rounded-sm text-muted-fg hover:bg-secondary hover:text-fg active:cursor-grabbing"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M7.5 5.75C7.5 4.7835 8.2835 4 9.25 4C10.2165 4 11 4.7835 11 5.75C11 6.7165 10.2165 7.5 9.25 7.5C8.2835 7.5 7.5 6.7165 7.5 5.75Z" fill="currentColor" /><path d="M13 5.75C13 4.7835 13.7835 4 14.75 4C15.7165 4 16.5 4.7835 16.5 5.75C16.5 6.7165 15.7165 7.5 14.75 7.5C13.7835 7.5 13 6.7165 13 5.75Z" fill="currentColor" /><path d="M7.5 18.25C7.5 17.2835 8.2835 16.5 9.25 16.5C10.2165 16.5 11 17.2835 11 18.25C11 19.2165 10.2165 20 9.25 20C8.2835 20 7.5 19.2165 7.5 18.25Z" fill="currentColor" /><path d="M13 18.25C13 17.2835 13.7835 16.5 14.75 16.5C15.7165 16.5 16.5 17.2835 16.5 18.25C16.5 19.2165 15.7165 20 14.75 20C13.7835 20 13 19.2165 13 18.25Z" fill="currentColor" /><path d="M7.5 11.9C7.5 10.9335 8.2835 10.15 9.25 10.15C10.2165 10.15 11 10.9335 11 11.9V12C11 12.9665 10.2165 13.75 9.25 13.75C8.2835 13.75 7.5 12.9665 7.5 12V11.9Z" fill="currentColor" /><path d="M13 11.9C13 10.9335 13.7835 10.15 14.75 10.15C15.7165 10.15 16.5 10.9335 16.5 11.9V12C16.5 12.9665 15.7165 13.75 14.75 13.75C13.7835 13.75 13 12.9665 13 12V11.9Z" fill="currentColor" />
              </svg>
            </Button>
          </div>
        }
        targetLineComponent={
          <div
            ref={targetLineRef}
            className="bg-primary pointer-events-none absolute top-0 left-0 h-0.5 opacity-0 will-change-transform"
          />
        }
        isOnMenu={isOnMenu}
        onElementChanged={setDraggableElement}
      />
    </>
  );
}
