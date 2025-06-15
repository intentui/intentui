import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  IconArchive,
  IconBell,
  IconBellAlarm,
  IconBug,
  IconCamera,
  IconCodeBrackets,
  IconFile,
  IconFileCloud,
  IconFileText,
  IconGallery,
  IconMailNotify,
  IconMusicNote,
  IconSettings,
  IconTerminal,
  IconTriangleExclamation,
  IconVideoCam,
} from "@intentui/icons"

export default function ToggleGroupSquareSizeDemo() {
  return (
    <div className="flex flex-col gap-y-6">
      <div>
        <ToggleGroup size="sq-xs">
          <ToggleGroupItem id="bell">
            <IconBell />
          </ToggleGroupItem>
          <ToggleGroupItem id="alarm">
            <IconBellAlarm />
          </ToggleGroupItem>
          <ToggleGroupItem id="notification">
            <IconMailNotify />
          </ToggleGroupItem>
          <ToggleGroupItem id="alert">
            <IconTriangleExclamation />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div>
        <ToggleGroup size="sq-sm">
          <ToggleGroupItem id="code">
            <IconCodeBrackets />
          </ToggleGroupItem>
          <ToggleGroupItem id="terminal">
            <IconTerminal />
          </ToggleGroupItem>
          <ToggleGroupItem id="bug">
            <IconBug />
          </ToggleGroupItem>
          <ToggleGroupItem id="settings">
            <IconSettings />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div>
        <ToggleGroup size="sq-md">
          <ToggleGroupItem id="image">
            <IconGallery />
          </ToggleGroupItem>
          <ToggleGroupItem id="camera">
            <IconCamera />
          </ToggleGroupItem>
          <ToggleGroupItem id="video">
            <IconVideoCam />
          </ToggleGroupItem>
          <ToggleGroupItem id="music">
            <IconMusicNote />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div>
        <ToggleGroup size="sq-lg">
          <ToggleGroupItem id="file">
            <IconFile />
          </ToggleGroupItem>
          <ToggleGroupItem id="doc">
            <IconFileText />
          </ToggleGroupItem>
          <ToggleGroupItem id="pdf">
            <IconFileCloud />
          </ToggleGroupItem>
          <ToggleGroupItem id="archive">
            <IconArchive />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  )
}
