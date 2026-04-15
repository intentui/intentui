"use client";
import { Autocomplete, useFilter } from 'react-aria-components/Autocomplete';
import { Popover } from 'react-aria-components/Popover';
import { Dialog } from "@/components/ui/dialog"
import { Label } from "@/components/ui/field"
import { ListBox } from "@/components/ui/list-box"
import { SearchField, SearchInput } from "@/components/ui/search-field"
import { Select, SelectItem, SelectTrigger } from "@/components/ui/select"

const languages = [
  { id: "en", name: "English" },
  { id: "es", name: "Spanish" },
  { id: "fr", name: "French" },
  { id: "de", name: "German" },
  { id: "it", name: "Italian" },
  { id: "pt", name: "Portuguese" },
  { id: "ru", name: "Russian" },
  { id: "ja", name: "Japanese" },
  { id: "zh", name: "Chinese" },
  { id: "ar", name: "Arabic" },
  { id: "hi", name: "Hindi" },
  { id: "ko", name: "Korean" },
  { id: "sv", name: "Swedish" },
  { id: "nl", name: "Dutch" },
  { id: "tr", name: "Turkish" },
  { id: "pl", name: "Polish" },
  { id: "cs", name: "Czech" },
  { id: "el", name: "Greek" },
  { id: "he", name: "Hebrew" },
]

export default function SelectSearchableDemo() {
  const { contains } = useFilter({ sensitivity: "base" })
  return (
    <Select>
      <Label>Select a language</Label>
      <SelectTrigger />
      <Popover className="entering:fade-in exiting:fade-out flex max-h-80 w-(--trigger-width) entering:animate-in exiting:animate-out flex-col overflow-hidden rounded-lg border bg-overlay">
        <Dialog aria-label="Language">
          <Autocomplete filter={contains}>
            <div className="border-b py-0.5">
              <SearchField className="rounded-lg focus-within:ring-0" autoFocus>
                <SearchInput
                  className="border-none ring-0 focus:ring-0"
                  placeholder="Search&hellip;"
                />
              </SearchField>
            </div>
            <ListBox
              className="max-h-[inherit] min-w-[inherit] rounded-t-none border-0 bg-transparent shadow-none"
              items={languages}
            >
              {(item) => <SelectItem>{item.name}</SelectItem>}
            </ListBox>
          </Autocomplete>
        </Dialog>
      </Popover>
    </Select>
  )
}
