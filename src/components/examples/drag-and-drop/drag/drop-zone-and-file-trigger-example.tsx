'use client'

import { PhotoIcon } from '@heroicons/react/24/outline'
import type { DropEvent } from '@react-types/shared'
import { useState } from 'react'
import { isFileDropItem } from 'react-aria-components/useDragAndDrop'
import { DropZone } from '@/components/ui/drop-zone'
import { Description } from '@/components/ui/field'
import { FileTrigger } from '@/components/ui/file-trigger'

export default function DropZoneAndFileTriggerDemo() {
  const [droppedImage, setDroppedImage] = useState<string | undefined>(undefined)

  const onDropHandler = async (e: DropEvent) => {
    const item = e.items
      .filter(isFileDropItem)
      .find((item) => item.type === 'image/jpeg' || item.type === 'image/png')
    if (item) {
      const file = await item.getFile()
      setDroppedImage(URL.createObjectURL(file))
    }
  }

  const onSelectHandler = async (files: FileList | null) => {
    if (files) {
      const file = files.item(0)

      if (file) {
        setDroppedImage(URL.createObjectURL(file))
      }
    }
  }
  return (
    <DropZone
      getDropOperation={(types) =>
        types.has('image/jpeg') || types.has('image/png') ? 'copy' : 'cancel'
      }
      onDrop={onDropHandler}
    >
      {droppedImage ? (
        <img alt="" src={droppedImage} className="aspect-square size-full object-contain" />
      ) : (
        <div className="grid space-y-3">
          <div className="mx-auto grid size-12 place-content-center rounded-full border bg-secondary/70 group-data-[drop-target]:border-primary/70 group-data-[drop-target]:bg-primary/20">
            <PhotoIcon className="size-5" />
          </div>
          <div className="flex justify-center">
            <FileTrigger
              acceptedFileTypes={['image/png', 'image/jpeg']}
              allowsMultiple={false}
              onSelect={onSelectHandler}
            >
              Upload a file
            </FileTrigger>
          </div>
          <Description>Or drag and drop PNG, JPG, GIF up to 10MB</Description>
        </div>
      )}
      <input type="hidden" name="image" value={droppedImage} />
    </DropZone>
  )
}
