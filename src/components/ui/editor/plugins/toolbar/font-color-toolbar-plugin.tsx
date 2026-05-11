import { useCallback, useState } from "react";

import {
  $getSelectionStyleValueForProperty,
  $patchStyleText,
} from "@lexical/selection";
import { $getSelection, $isRangeSelection, type BaseSelection } from "lexical";

import { parseColor } from "@react-stately/color";

import { useToolbarContext } from "@/components/ui/editor/context/toolbar-context";
import { useUpdateToolbarHandler } from "@/components/ui/editor/editor-hooks/use-update-toolbar";
import { Button } from "@/components/ui/button";
import { ColorArea } from "@/components/ui/color-area";
import { ColorField } from "@/components/ui/color-field";
import { ColorPicker } from "@/components/ui/color-picker";
import {
  ColorSlider,
  ColorSliderTrack,
} from "@/components/ui/color-slider";
import { ColorSwatch } from "@/components/ui/color-swatch";
import { ColorThumb } from "@/components/ui/color-thumb";
import { Input } from "@/components/ui/input";
import { Popover, PopoverBody, PopoverContent } from "@/components/ui/popover";

function safeParse(value: string) {
  try {
    return parseColor(value);
  } catch {
    return parseColor("#000000");
  }
}

export function FontColorToolbarPlugin() {
  const { activeEditor } = useToolbarContext();
  const [fontColor, setFontColor] = useState("#000000");

  const $updateToolbar = (selection: BaseSelection) => {
    if ($isRangeSelection(selection)) {
      setFontColor(
        $getSelectionStyleValueForProperty(selection, "color", "#000000"),
      );
    }
  };

  useUpdateToolbarHandler($updateToolbar);

  const applyStyleText = useCallback(
    (styles: Record<string, string>) => {
      activeEditor.update(() => {
        const selection = $getSelection();
        if (selection !== null) {
          $patchStyleText(selection, styles);
        }
      });
    },
    [activeEditor],
  );

  const value = safeParse(fontColor);

  return (
    <ColorPicker
      value={value}
      onChange={(c) => {
        const next = c.toString("hexa");
        setFontColor(next);
        applyStyleText({ color: next });
      }}
    >
      <Popover>
        <Button
          intent="outline"
          size="sq-sm"
          aria-label="Font color"
          data-slot="control"
          className="flex-col gap-0.5 p-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16" /><path d="m6 16 6-12 6 12" /><path d="M8 12h8" /></svg>
          <ColorSwatch className="size-auto! h-1 w-4 rounded-full" />
        </Button>
        <PopoverContent className="[--gutter:--spacing(3)]">
          <PopoverBody>
            <div className="space-y-(--gutter) py-2">
              <ColorArea
                colorSpace="hsb"
                xChannel="saturation"
                yChannel="brightness"
                className="size-48"
              />
              <ColorSlider colorSpace="hsb" channel="hue">
                <ColorSliderTrack>
                  <ColorThumb />
                </ColorSliderTrack>
              </ColorSlider>
              <ColorSlider channel="alpha">
                <ColorSliderTrack>
                  <ColorThumb />
                </ColorSliderTrack>
              </ColorSlider>
              <ColorField aria-label="Color" className="font-mono">
                <Input />
              </ColorField>
            </div>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </ColorPicker>
  );
}
