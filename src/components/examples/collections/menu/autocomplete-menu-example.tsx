'use client'

import {
  ArrowDownTrayIcon,
  ClipboardDocumentIcon,
  ClipboardIcon,
  DocumentDuplicateIcon,
  DocumentPlusIcon,
  DocumentTextIcon,
  EyeIcon,
  FolderOpenIcon,
  LinkIcon,
  LockClosedIcon,
  PencilSquareIcon,
  PhotoIcon,
  ScissorsIcon,
  ShareIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'
import { Autocomplete, useFilter } from 'react-aria-components/Autocomplete'
import { Menu as PrimitiveMenu } from 'react-aria-components/Menu'
import { Button } from '@/components/ui/button'
import {
  Menu,
  MenuItem,
  MenuLabel,
  MenuSection,
  MenuSeparator,
  menuContentStyles,
} from '@/components/ui/menu'
import { PopoverContent as Popover } from '@/components/ui/popover'
import { SearchField, SearchInput } from '@/components/ui/search-field'

export default function WithAutocomplete() {
  const { contains } = useFilter({ sensitivity: 'base' })

  return (
    <Menu>
      <Button intent="secondary">Actions</Button>
      <Popover className="*:data-[slot=popover-inner]:overflow-hidden" placement="bottom">
        <Autocomplete filter={contains}>
          <SearchField
            aria-label="Search actions"
            autoFocus
            className="border-b sm:**:[svg]:top-2.5"
          >
            <SearchInput
              className="rounded-none border-0 focus:border-input focus:ring-0 hover:focus:border-transparent sm:py-1.5"
              placeholder="Search actions"
            />
          </SearchField>
          <PrimitiveMenu
            renderEmptyState={() => (
              <div className="col-span-full grid min-h-20 place-content-center text-muted-fg">
                <span>No result</span>
              </div>
            )}
            className={menuContentStyles()}
          >
            <MenuSection aria-label="File">
              <MenuItem textValue="file new document create">
                <DocumentPlusIcon />
                <MenuLabel>New document</MenuLabel>
              </MenuItem>
              <MenuItem textValue="file open browse">
                <FolderOpenIcon />
                <MenuLabel>Open file</MenuLabel>
              </MenuItem>
              <MenuItem textValue="file preview view">
                <EyeIcon />
                <MenuLabel>Preview</MenuLabel>
              </MenuItem>
              <MenuItem textValue="file duplicate copy">
                <DocumentDuplicateIcon />
                <MenuLabel>Duplicate</MenuLabel>
              </MenuItem>
              <MenuItem textValue="file rename edit title">
                <PencilSquareIcon />
                <MenuLabel>Rename</MenuLabel>
              </MenuItem>
              <MenuItem textValue="file export download pdf">
                <ArrowDownTrayIcon />
                <MenuLabel>Export as PDF</MenuLabel>
              </MenuItem>
            </MenuSection>

            <MenuSeparator />

            <MenuSection aria-label="Edit">
              <MenuItem textValue="edit cut remove selection">
                <ScissorsIcon />
                <MenuLabel>Cut</MenuLabel>
              </MenuItem>
              <MenuItem textValue="edit copy selection">
                <ClipboardDocumentIcon />
                <MenuLabel>Copy</MenuLabel>
              </MenuItem>
              <MenuItem textValue="edit paste clipboard">
                <ClipboardIcon />
                <MenuLabel>Paste</MenuLabel>
              </MenuItem>
              <MenuItem textValue="edit insert image photo media">
                <PhotoIcon />
                <MenuLabel>Insert image</MenuLabel>
              </MenuItem>
              <MenuItem textValue="edit insert text block paragraph">
                <DocumentTextIcon />
                <MenuLabel>Insert text block</MenuLabel>
              </MenuItem>
            </MenuSection>

            <MenuSeparator />

            <MenuSection aria-label="Share">
              <MenuItem textValue="share invite people">
                <ShareIcon />
                <MenuLabel>Share document</MenuLabel>
              </MenuItem>
              <MenuItem textValue="share copy link url">
                <LinkIcon />
                <MenuLabel>Copy link</MenuLabel>
              </MenuItem>
              <MenuItem textValue="share permissions access lock">
                <LockClosedIcon />
                <MenuLabel>Manage access</MenuLabel>
              </MenuItem>
            </MenuSection>

            <MenuSeparator />

            <MenuSection aria-label="Danger zone">
              <MenuItem intent="danger" textValue="delete remove trash document">
                <TrashIcon />
                <MenuLabel>Move to trash</MenuLabel>
              </MenuItem>
            </MenuSection>
          </PrimitiveMenu>
        </Autocomplete>
      </Popover>
    </Menu>
  )
}
