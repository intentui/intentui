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
    return parseColor("#ffffff");
  }
}

export function FontBackgroundToolbarPlugin() {
  const { activeEditor } = useToolbarContext();
  const [bgColor, setBgColor] = useState("#ffffff");

  const $updateToolbar = (selection: BaseSelection) => {
    if ($isRangeSelection(selection)) {
      setBgColor(
        $getSelectionStyleValueForProperty(
          selection,
          "background-color",
          "#ffffff",
        ),
      );
    }
  };

  useUpdateToolbarHandler($updateToolbar);

  const applyStyleText = useCallback(
    (styles: Record<string, string>) => {
      activeEditor.update(
        () => {
          const selection = $getSelection();
          if (selection !== null) {
            $patchStyleText(selection, styles);
          }
        },
        { tag: "historic" },
      );
    },
    [activeEditor],
  );

  const value = safeParse(bgColor);

  return (
    <ColorPicker
      value={value}
      onChange={(c) => {
        const next = c.toString("hexa");
        setBgColor(next);
        applyStyleText({ "background-color": next });
      }}
    >
      <Popover>
        <Button
          intent="outline"
          size="sq-sm"
          aria-label="Background color"
          data-slot="control"
          className="flex-col gap-0.5 p-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
            <path d="M10.8251 20.4744L20.3587 13.0945C20.8351 12.7257 20.8797 12.0226 20.4537 11.5966L12.1599 3.3028C11.7339 2.87682 11.0308 2.92141 10.662 3.39778L3.28205 12.9314C2.35752 14.1257 2.46503 15.8211 3.533 16.8891L6.86739 20.2235C7.93537 21.2915 9.63078 21.399 10.8251 20.4744Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M12.0007 11.2381L2.74805 6.39148" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M22.5 19.6001C22.5 20.9256 21.4926 22.0001 20.25 22.0001C19.0074 22.0001 18 20.9256 18 19.6001C18 18.2128 19.3366 16.8254 19.9495 16.2622C20.1217 16.104 20.3783 16.104 20.5505 16.2622C21.1634 16.8254 22.5 18.2128 22.5 19.6001Z" fill="currentColor" />
          </svg>

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
              <ColorField aria-label="Background color" className="font-mono">
                <Input />
              </ColorField>
            </div>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </ColorPicker>
  );
}
