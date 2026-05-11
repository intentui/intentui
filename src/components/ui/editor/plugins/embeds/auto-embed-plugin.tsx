import { type JSX, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

import {
  AutoEmbedOption,
  type EmbedConfig,
  type EmbedMatchResult,
  LexicalAutoEmbedPlugin,
  URL_MATCHER,
} from "@lexical/react/LexicalAutoEmbedPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import type { LexicalEditor } from "lexical";


import { useEditorModal } from "@/components/ui/editor/editor-hooks/use-modal";
import { INSERT_TWEET_COMMAND } from "@/components/ui/editor/plugins/embeds/twitter-plugin";
import { INSERT_YOUTUBE_COMMAND } from "@/components/ui/editor/plugins/embeds/youtube-plugin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { XMarkIcon } from "@heroicons/react/24/solid";

const YoutubeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    width={16}
    height={16}
    className="size-4"
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const TwitterIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    width={16}
    height={16}
    className="size-4"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export interface CustomEmbedConfig extends EmbedConfig {
  contentName: string;
  icon?: JSX.Element;
  exampleUrl: string;
  keywords: Array<string>;
  description?: string;
}

export const YoutubeEmbedConfig: CustomEmbedConfig = {
  contentName: "Youtube Video",
  exampleUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
  icon: YoutubeIcon,
  insertNode: (editor: LexicalEditor, result: EmbedMatchResult) => {
    editor.dispatchCommand(INSERT_YOUTUBE_COMMAND, result.id);
  },
  keywords: ["youtube", "video"],
  parseUrl: async (url: string) => {
    const match =
      /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/.exec(url);
    const id = match ? (match?.[2].length === 11 ? match[2] : null) : null;
    if (id != null) {
      return { id, url };
    }
    return null;
  },
  type: "youtube-video",
};

export const TwitterEmbedConfig: CustomEmbedConfig = {
  contentName: "Tweet",
  exampleUrl: "https://twitter.com/jack/status/20",
  icon: TwitterIcon,
  insertNode: (editor: LexicalEditor, result: EmbedMatchResult) => {
    editor.dispatchCommand(INSERT_TWEET_COMMAND, result.id);
  },
  keywords: ["tweet", "twitter"],
  parseUrl: (text: string) => {
    const match =
      /^https:\/\/(twitter|x)\.com\/(#!\/)?(\w+)\/status(es)*\/(\d+)/.exec(
        text,
      );
    if (match != null) {
      return { id: match[5], url: match[1] };
    }
    return null;
  },
  type: "tweet",
};

export const EmbedConfigs = [TwitterEmbedConfig, YoutubeEmbedConfig];

const debounce = (callback: (text: string) => void, delay: number) => {
  let timeoutId: number;
  return (text: string) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback(text);
    }, delay);
  };
};

export function AutoEmbedDialog({
  embedConfig,
  onClose,
}: {
  embedConfig: CustomEmbedConfig;
  onClose: () => void;
}): JSX.Element {
  const [text, setText] = useState("");
  const [editor] = useLexicalComposerContext();
  const [embedResult, setEmbedResult] = useState<EmbedMatchResult | null>(null);

  const validateText = useMemo(
    () =>
      debounce((inputText: string) => {
        const urlMatch = URL_MATCHER.exec(inputText);
        if (embedConfig != null && inputText != null && urlMatch != null) {
          Promise.resolve(embedConfig.parseUrl(inputText)).then(
            (parseResult) => {
              setEmbedResult(parseResult);
            },
          );
        } else if (embedResult != null) {
          setEmbedResult(null);
        }
      }, 200),
    [embedConfig, embedResult],
  );

  const onClick = () => {
    if (embedResult != null) {
      embedConfig.insertNode(editor, embedResult);
      onClose();
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <Input
        type="text"
        placeholder={embedConfig.exampleUrl}
        value={text}
        onChange={(e) => {
          const { value } = e.target;
          setText(value);
          validateText(value);
        }}
      />
      <div className="flex justify-end">
        <Button isDisabled={!embedResult} onPress={onClick} intent="primary">
          Embed
        </Button>
      </div>
    </div>
  );
}

export function AutoEmbedPlugin(): JSX.Element {
  const [modal, showModal] = useEditorModal();
  const activeConfigRef = useRef<CustomEmbedConfig | null>(null);

  const openEmbedModal = (embedConfig: CustomEmbedConfig) => {
    showModal(`Embed ${embedConfig.contentName}`, (onClose) => (
      <AutoEmbedDialog embedConfig={embedConfig} onClose={onClose} />
    ));
  };

  const getMenuOptions = (
    activeEmbedConfig: CustomEmbedConfig,
    embedFn: () => void,
    dismissFn: () => void,
  ) => {
    activeConfigRef.current = activeEmbedConfig;
    return [
      new AutoEmbedOption("Dismiss", { onSelect: dismissFn }),
      new AutoEmbedOption(`Embed ${activeEmbedConfig.contentName}`, {
        onSelect: embedFn,
      }),
    ];
  };

  return (
    <>
      {modal}
      <LexicalAutoEmbedPlugin<CustomEmbedConfig>
        embedConfigs={EmbedConfigs}
        onOpenEmbedModalForConfig={openEmbedModal}
        getMenuOptions={getMenuOptions}
        menuRenderFn={(
          anchorElementRef,
          { selectedIndex, options, selectOptionAndCleanUp },
        ) => {
          if (!anchorElementRef.current) return null;
          const activeConfig = activeConfigRef.current;
          return createPortal(
            <div className="absolute z-10 -translate-y-full transform rounded-md bg-overlay text-overlay-fg shadow-md ring-1 ring-border">
              <ul className="max-h-64 min-w-48 overflow-y-auto p-1">
                {options.map((option, index) => {
                  const isDismiss = option.title === "Dismiss";
                  const icon = isDismiss ? (
                    <XMarkIcon />
                  ) : (
                    activeConfig?.icon ?? null
                  );
                  return (
                    <li
                      key={option.key}
                      className={`flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden ${
                        selectedIndex === index
                          ? "bg-secondary text-secondary-fg"
                          : ""
                      } hover:bg-secondary hover:text-secondary-fg`}
                      onClick={() => selectOptionAndCleanUp(option)}
                    >
                      <span className="flex size-4 shrink-0 items-center justify-center text-muted-fg">
                        {icon}
                      </span>
                      <span className="flex-1 truncate">{option.title}</span>
                    </li>
                  );
                })}
              </ul>
            </div>,
            anchorElementRef.current,
          );
        }}
      />
    </>
  );
}
