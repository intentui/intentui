import { CalendarIcon } from "@heroicons/react/24/outline";

import { INSERT_DATETIME_COMMAND } from "@/components/ui/editor/extensions/date-time-extension";
import { ComponentPickerOption } from "@/components/ui/editor/plugins/picker/component-picker-option";

export function DateTimePickerPlugin() {
  return new ComponentPickerOption("Date", {
    icon: <CalendarIcon className="size-4" />,
    keywords: ["date", "calendar", "time", "today"],
    onSelect: (_, editor) => {
      const dateTime = new Date();
      dateTime.setHours(0, 0, 0, 0);
      editor.dispatchCommand(INSERT_DATETIME_COMMAND, { dateTime });
    },
  });
}
