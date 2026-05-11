import type { JSX } from "react";
import * as React from "react";
import { useState } from "react";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useLexicalNodeSelection } from "@lexical/react/useLexicalNodeSelection";
import {
  $getNodeByKey,
  IS_BOLD,
  IS_HIGHLIGHT,
  IS_ITALIC,
  IS_STRIKETHROUGH,
  IS_UNDERLINE,
  type NodeKey,
} from "lexical";

import { format } from "date-fns";
import { setHours, setMinutes } from "date-fns";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent } from "@/components/ui/popover";

import { $isDateTimeNode, type DateTimeNode } from "../nodes/date-time-node";

const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export default function DateTimeComponent({
  dateTime,
  format: textFormat,
  nodeKey,
}: {
  dateTime: Date | undefined;
  format: number;
  nodeKey: NodeKey;
}): JSX.Element {
  const [editor] = useLexicalComposerContext();
  const [selected, setSelected] = useState(dateTime);
  const [includeTime, setIncludeTime] = useState(() => {
    if (!dateTime) return false;
    return dateTime.getHours() !== 0 || dateTime.getMinutes() !== 0;
  });
  const [timeValue, setTimeValue] = useState(() => {
    if (!dateTime) return "00:00";
    const h = dateTime.getHours();
    const m = dateTime.getMinutes();
    if (h !== 0 || m !== 0) {
      return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
    }
    return "00:00";
  });
  const [isNodeSelected] = useLexicalNodeSelection(nodeKey);

  const withDateTimeNode = (cb: (node: DateTimeNode) => void): void => {
    editor.update(() => {
      const node = $getNodeByKey(nodeKey);
      if ($isDateTimeNode(node)) {
        cb(node);
      }
    });
  };

  const handleCheckedChange = (checked: boolean) => {
    withDateTimeNode((node) => {
      if (checked) {
        setIncludeTime(true);
      } else {
        if (selected) {
          node.setDateTime(setHours(setMinutes(selected, 0), 0));
        }
        setIncludeTime(false);
        setTimeValue("00:00");
      }
    });
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    withDateTimeNode((node) => {
      const time = e.target.value;
      if (!selected) {
        setTimeValue(time);
        return;
      }
      const [hours, minutes] = time.split(":").map((s) => parseInt(s, 10));
      const newDate = setHours(setMinutes(selected, minutes), hours);
      setSelected(newDate);
      node.setDateTime(newDate);
      setTimeValue(time);
    });
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    withDateTimeNode((node) => {
      const value = e.target.value;
      if (!value) {
        setSelected(undefined);
        return;
      }
      const date = new Date(value);
      const [hours, minutes] = timeValue.split(":").map((s) => parseInt(s, 10));
      const newDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        hours,
        minutes,
      );
      node.setDateTime(newDate);
      setSelected(newDate);
    });
  };

  const displayLabel = dateTime
    ? format(dateTime, includeTime ? "PPP p" : "PPP")
    : null;
  const dateInputValue = selected
    ? `${selected.getFullYear()}-${String(selected.getMonth() + 1).padStart(2, "0")}-${String(selected.getDate()).padStart(2, "0")}`
    : "";

  return (
    <Popover>
      <Button
        intent="outline"
        data-empty={!dateTime}
        data-selected={isNodeSelected}
        className={twMerge(
          "inline-flex h-auto gap-1.5 px-2 py-0.5 text-sm font-normal",
          "data-[empty=true]:text-muted-fg",
          "data-[selected=true]:ring-2 data-[selected=true]:ring-primary",
          textFormat & IS_BOLD && "font-bold",
          textFormat & IS_ITALIC && "italic",
          textFormat & IS_UNDERLINE && "underline",
          textFormat & IS_STRIKETHROUGH && "line-through",
          textFormat & IS_HIGHLIGHT && "bg-warning-subtle",
        )}
      >
        <CalendarIcon className="size-3.5" />
        {displayLabel ?? <span>Pick a date</span>}
      </Button>
      <PopoverContent className="w-auto p-3">
        <div className="flex flex-col gap-3">
          <input
            type="date"
            value={dateInputValue}
            onChange={handleDateChange}
            className="rounded-md border border-input bg-transparent px-2 py-1 text-sm text-fg"
            aria-label="Date"
          />
          <div className="flex items-center gap-2 border-t pt-2">
            <input
              id={`include-time-${nodeKey}`}
              type="checkbox"
              checked={includeTime}
              onChange={(e) => handleCheckedChange(e.target.checked)}
              className="size-4"
            />
            <label
              htmlFor={`include-time-${nodeKey}`}
              className="flex items-center gap-2"
            >
              <input
                type="time"
                value={timeValue}
                onChange={handleTimeChange}
                disabled={!includeTime}
                className="rounded-md border border-input bg-transparent px-2 py-1 text-xs text-fg disabled:opacity-50"
              />
              <span className="text-xs text-muted-fg">{userTimeZone}</span>
            </label>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
