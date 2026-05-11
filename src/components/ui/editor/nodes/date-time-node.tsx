import type { JSX } from "react";
import * as React from "react";

import {
  DecoratorTextNode,
  type SerializedDecoratorTextNode,
  applyFormatFromStyle,
  applyFormatToDom,
} from "@lexical/extension";
import {
  $getState,
  $isTextNode,
  $setState,
  type DOMConversionOutput,
  type DOMExportOutput,
  type LexicalNode,
  type Spread,
  type StateConfigValue,
  type StateValueOrUpdater,
  buildImportMap,
  createState,
} from "lexical";

const DateTimeComponent = React.lazy(
  () => import("@/components/ui/editor/editor-ui/date-time-component"),
);

const tagToFormat = {
  b: "bold",
  i: "italic",
  mark: "highlight",
  s: "strikethrough",
  u: "underline",
} as const;

const getDateTimeText = (dateTime: Date) => {
  if (dateTime === undefined) {
    return "";
  }
  const hours = dateTime?.getHours();
  const minutes = dateTime?.getMinutes();
  return (
    dateTime.toDateString() +
    (hours === 0 && minutes === 0
      ? ""
      : ` ${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}`)
  );
};

export type SerializedDateTimeNode = Spread<
  {
    dateTime?: string;
  },
  SerializedDecoratorTextNode
>;

function $convertDateTimeElement(
  domNode: HTMLElement,
): DOMConversionOutput | null {
  const dateTimeValue = domNode.getAttribute("data-lexical-datetime");
  if (dateTimeValue) {
    const node = $createDateTimeNode(new Date(Date.parse(dateTimeValue)));
    return {
      after: (childLexicalNodes) => {
        const firstChild = childLexicalNodes[0];
        if ($isTextNode(firstChild)) {
          node.setFormat(firstChild.getFormat());
        }
        return childLexicalNodes;
      },
      node,
    };
  }
  const gDocsDateTimePayload = domNode.getAttribute("data-rich-links");
  if (!gDocsDateTimePayload) {
    return null;
  }
  const parsed = JSON.parse(gDocsDateTimePayload);
  const parsedDate =
    parsed?.dat_df?.dfie_ts?.tv?.tv_s * 1000 ||
    Date.parse(parsed?.dat_df?.dfie_dt || "");
  if (isNaN(parsedDate)) {
    return null;
  }
  const dateTimeNode = $createDateTimeNode(new Date(parsedDate));
  return { node: applyFormatFromStyle(dateTimeNode, domNode.style) };
}

const dateTimeState = createState("dateTime", {
  parse: (v) => new Date(v as string),
  unparse: (v) => v.toISOString(),
});

export class DateTimeNode extends DecoratorTextNode {
  $config() {
    return this.config("datetime", {
      extends: DecoratorTextNode,
      importDOM: buildImportMap({
        span: (domNode) =>
          domNode.getAttribute("data-lexical-datetime") !== null ||
          (domNode.getAttribute("data-rich-links") !== null &&
            JSON.parse(domNode.getAttribute("data-rich-links") || "{}").type ===
              "date")
            ? {
                conversion: $convertDateTimeElement,
                priority: 2,
              }
            : null,
      }),
      stateConfigs: [{ flat: true, stateConfig: dateTimeState }],
    });
  }

  getDateTime(): StateConfigValue<typeof dateTimeState> {
    return $getState(this, dateTimeState);
  }

  setDateTime(valueOrUpdater: StateValueOrUpdater<typeof dateTimeState>): this {
    return $setState(this, dateTimeState, valueOrUpdater);
  }

  getTextContent(): string {
    const dateTime = this.getDateTime();
    return getDateTimeText(dateTime);
  }

  exportDOM(): DOMExportOutput {
    const element = document.createElement("span");
    const textDom: HTMLElement | Text = document.createTextNode(
      getDateTimeText(this.getDateTime()),
    );
    element.setAttribute(
      "data-lexical-datetime",
      this.getDateTime()?.toString() || "",
    );
    element.appendChild(applyFormatToDom(this, textDom, tagToFormat));

    return { element };
  }

  createDOM(): HTMLElement {
    const element = document.createElement("span");
    element.setAttribute(
      "data-lexical-datetime",
      this.getDateTime()?.toString() || "",
    );
    element.style.display = "inline-block";
    return element;
  }

  updateDOM(): false {
    return false;
  }

  decorate(): JSX.Element {
    return (
      <DateTimeComponent
        dateTime={this.getDateTime()}
        format={this.getFormat()}
        nodeKey={this.__key}
      />
    );
  }
}

export function $createDateTimeNode(dateTime: Date): DateTimeNode {
  return new DateTimeNode().setDateTime(dateTime);
}

export function $isDateTimeNode(
  node: LexicalNode | null | undefined,
): node is DateTimeNode {
  return node instanceof DateTimeNode;
}
