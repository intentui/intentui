'use client'

import { Autocomplete, useFilter } from 'react-aria-components/Autocomplete'
import { TextField } from '@/components/ui/text-field'
import { Textarea } from '@/components/ui/textarea'
import { useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import getCaretRect from 'textarea-caret'
import { Menu, MenuContent, MenuItem } from '@/components/ui/menu'
import { Label } from '@/components/ui/field'

const usernames = [
  { id: 1, name: 'ethancarter' },
  { id: 2, name: 'lilyadams' },
  { id: 3, name: 'ryanhughes' },
  { id: 4, name: 'graceparker' },
  { id: 5, name: 'owenbailey' },
  { id: 6, name: 'hannahreed' },
  { id: 7, name: 'calebturner' },
  { id: 8, name: 'avafoster' },
  { id: 9, name: 'isaacward' },
  { id: 10, name: 'elliecooper' },
  { id: 11, name: 'nathanking' },
  { id: 12, name: 'rubybell' },
  { id: 13, name: 'adrianprice' },
  { id: 14, name: 'clairebennett' },
  { id: 15, name: 'eliwatson' },
  { id: 16, name: 'mayacoleman' },
  { id: 17, name: 'julianross' },
  { id: 18, name: 'norarussell' },
  { id: 19, name: 'aaronbrooks' },
  { id: 20, name: 'stellaperry' },
  { id: 21, name: 'wyattkelly' },
  { id: 22, name: 'leahmorgan' },
  { id: 23, name: 'sebastianhill' },
  { id: 24, name: 'isabelgray' },
  { id: 25, name: 'connorjames' },
]

export default function TextareaAutocompleteExample() {
  const { startsWith } = useFilter({ sensitivity: 'base' })
  const [inputValue, setInputValue] = useState('')
  const [anchorIndex, setAnchorIndex] = useState(-1)
  const [filterValue, setFilterValue] = useState('')
  const inputRef = useRef<HTMLTextAreaElement>(null)

  function updateFilter() {
    let { selectionStart, selectionEnd, value } = inputRef.current!
    if (selectionStart === selectionEnd && document.activeElement === inputRef.current!) {
      let index = value.lastIndexOf('@', selectionStart)
      if (index >= 0) {
        let slice = value.slice(index + 1, selectionStart)
        if (!slice.includes(' ')) {
          setAnchorIndex(index)
          setFilterValue(slice)
          return
        }
      }
    }

    setAnchorIndex(-1)
  }

  return (
    <Autocomplete inputValue={filterValue} filter={startsWith}>
      <TextField
        value={inputValue}
        onChange={(value) => {
          setInputValue(value)
          updateFilter()
        }}
        onSelect={updateFilter}
        onBlur={updateFilter}
      >
        <Label>Reply</Label>
        <Textarea ref={inputRef} placeholder="Type @ for mention" />
      </TextField>
      <Menu>
        <MenuContent
          renderEmptyState={() => 'No results found.'}
          popover={{
            triggerRef: inputRef,
            isOpen: anchorIndex >= 0,
            isNonModal: true,
            placement: 'bottom start',
            trigger: 'MenuTrigger',
            getTargetRect: (target) => {
              let { top, left } = getCaretRect(inputRef.current!, anchorIndex!)
              let { top: targetTop, left: targetLeft } = target.getBoundingClientRect()
              return new DOMRect(targetLeft + left, targetTop + top, 1, 16)
            },
          }}
          items={usernames}
          onAction={(value) => {
            const user = usernames.find((user) => String(user.id) === String(value))

            if (!user) {
              return
            }

            let prefix = inputValue.slice(0, anchorIndex) + '@' + user.name + ' '
            let suffix = inputValue.slice(inputRef.current!.selectionEnd)
            flushSync(() => setInputValue(prefix + suffix))
            inputRef.current!.setSelectionRange(prefix.length, prefix.length)
            updateFilter()
          }}
        >
          {(item) => (
            <MenuItem id={item.id} textValue={item.name}>
              {item.name}
            </MenuItem>
          )}
        </MenuContent>
      </Menu>
    </Autocomplete>
  )
}
