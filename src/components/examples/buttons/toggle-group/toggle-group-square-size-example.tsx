"use client"

import {
  ArchiveBoxIcon,
  BellAlertIcon,
  BellIcon,
  BugAntIcon,
  CameraIcon,
  CloudIcon,
  CodeBracketIcon,
  Cog6ToothIcon,
  CommandLineIcon,
  DocumentIcon,
  DocumentTextIcon,
  EnvelopeOpenIcon,
  ExclamationTriangleIcon,
  MusicalNoteIcon,
  PhotoIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function ToggleGroupSquareSizeDemo() {
  return (
    <div className="flex flex-col gap-y-6">
      <div>
        <ToggleGroup size="sq-xs">
          <ToggleGroupItem id="bell">
            <BellIcon />
          </ToggleGroupItem>
          <ToggleGroupItem id="alarm">
            <BellAlertIcon />
          </ToggleGroupItem>
          <ToggleGroupItem id="notification">
            <EnvelopeOpenIcon />
          </ToggleGroupItem>
          <ToggleGroupItem id="alert">
            <ExclamationTriangleIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div>
        <ToggleGroup size="sq-sm">
          <ToggleGroupItem id="code">
            <CodeBracketIcon />
          </ToggleGroupItem>
          <ToggleGroupItem id="terminal">
            <CommandLineIcon />
          </ToggleGroupItem>
          <ToggleGroupItem id="bug">
            <BugAntIcon />
          </ToggleGroupItem>
          <ToggleGroupItem id="settings">
            <Cog6ToothIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div>
        <ToggleGroup size="sq-md">
          <ToggleGroupItem id="image">
            <PhotoIcon />
          </ToggleGroupItem>
          <ToggleGroupItem id="camera">
            <CameraIcon />
          </ToggleGroupItem>
          <ToggleGroupItem id="video">
            <VideoCameraIcon />
          </ToggleGroupItem>
          <ToggleGroupItem id="music">
            <MusicalNoteIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div>
        <ToggleGroup size="sq-lg">
          <ToggleGroupItem id="file">
            <DocumentIcon />
          </ToggleGroupItem>
          <ToggleGroupItem id="doc">
            <DocumentTextIcon />
          </ToggleGroupItem>
          <ToggleGroupItem id="pdf">
            <CloudIcon />
          </ToggleGroupItem>
          <ToggleGroupItem id="archive">
            <ArchiveBoxIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  )
}
