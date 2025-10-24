"use client"

import {
  ArrowLeftStartOnRectangleIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  Cog6ToothIcon,
  HeartIcon,
  PencilSquareIcon,
  SparklesIcon,
  StarIcon,
  UserIcon,
} from "@heroicons/react/24/outline"
import { useState } from "react"
import { Menu as MenuPrimitive } from "react-aria-components"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Checkbox, CheckboxLabel } from "@/components/ui/checkbox"
import { Description, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { MenuItem, MenuLabel, MenuSection } from "@/components/ui/menu"
import {
  ModalBody,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "@/components/ui/modal"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { TextField } from "@/components/ui/text-field"

export default function SheetMenuDemo() {
  const [isOpen, setIsOpen] = useState(false)
  const closeModal = () => setIsOpen(false)
  return (
    <>
      <ModalContent isOpen={isOpen} onOpenChange={setIsOpen}>
        <ModalHeader>
          <ModalTitle>Edit status</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <PencilSquareIcon className="size-5" />
              <TextField>
                <Label>Status</Label>
                <Input placeholder="What's your status?" />
              </TextField>
            </div>
            <Select>
              <Label>Clear Status</Label>
              <SelectTrigger />
              <SelectContent>
                <SelectItem>Never</SelectItem>
                <SelectItem>in 30 Minutes</SelectItem>
                <SelectItem>in 1 Hour</SelectItem>
                <SelectItem>in 8 Hours</SelectItem>
                <SelectItem>after Today</SelectItem>
                <SelectItem>after a Week</SelectItem>
                <SelectItem>after a Month</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <Label>Visible to</Label>
              <SelectTrigger />
              <SelectContent>
                <SelectItem>Everyone</SelectItem>
                <SelectItem>Organization</SelectItem>
                <SelectItem>Public</SelectItem>
              </SelectContent>
            </Select>
            <Checkbox>
              <CheckboxLabel>Busy</CheckboxLabel>
              <Description>
                When others mention you, assign you, or request your review, GitHub will let them
                know that you have limited availability.
              </Description>
            </Checkbox>
          </div>
        </ModalBody>
        <ModalFooter>
          <ModalClose>Clear Status</ModalClose>
          <Button onPress={closeModal}>Set Status</Button>
        </ModalFooter>
      </ModalContent>
      <Sheet>
        <SheetTrigger aria-label="Open menu">
          <Avatar src="https://intentui.com/images/avatar/cobain.jpg" alt="irsyadadl" />
        </SheetTrigger>
        <SheetContent isFloat={false} closeButton={false}>
          <SheetHeader className="flex flex-row gap-x-3.5 border-b sm:gap-x-3 sm:px-4 sm:pt-3 sm:pb-2">
            <Avatar src="https://intentui.com/images/avatar/cobain.jpg" isSquare alt="cobain" />
            <div>
              <SheetTitle className="text-base/4 sm:text-base/4">Kurt Cobain</SheetTitle>
              <SheetDescription>@cobain</SheetDescription>
            </div>
          </SheetHeader>
          <SheetBody className="px-0 sm:px-0">
            <MenuPrimitive className="divide-y *:[[role=group]]:p-2">
              <MenuSection>
                <MenuItem>
                  <UserIcon className="size-5" />
                  <MenuLabel>Your profile</MenuLabel>
                </MenuItem>
                <MenuItem>
                  <BookOpenIcon className="size-5" />
                  <MenuLabel>Your repositories</MenuLabel>
                </MenuItem>
                <MenuItem>
                  <SparklesIcon className="size-5" />
                  <MenuLabel>Copilot</MenuLabel>
                </MenuItem>
                <MenuItem>
                  <MenuLabel>Your projects</MenuLabel>
                </MenuItem>
                <MenuItem>
                  <StarIcon className="size-5" />
                  <MenuLabel>Your stars</MenuLabel>
                </MenuItem>
                <MenuItem>
                  <MenuLabel>Your gists</MenuLabel>
                </MenuItem>
                <MenuItem>
                  <MenuLabel>Your organizations</MenuLabel>
                </MenuItem>
                <MenuItem>
                  <MenuLabel>Your enterprises</MenuLabel>
                </MenuItem>
                <MenuItem>
                  <HeartIcon className="size-5" />
                  <MenuLabel>Your sponsors</MenuLabel>
                </MenuItem>
              </MenuSection>
              <MenuSection>
                <MenuItem>
                  <MenuLabel>Feature preview</MenuLabel>
                </MenuItem>
                <MenuItem>
                  <Cog6ToothIcon className="size-5" />
                  <MenuLabel>Settings</MenuLabel>
                </MenuItem>
              </MenuSection>
              <MenuSection>
                <MenuItem>
                  <MenuLabel>GitHub Docs</MenuLabel>
                </MenuItem>
                <MenuItem>
                  <MenuLabel>GitHub Support</MenuLabel>
                </MenuItem>
                <MenuItem>
                  <ChatBubbleLeftRightIcon className="size-5" />
                  <MenuLabel>GitHub Community</MenuLabel>
                </MenuItem>
              </MenuSection>
            </MenuPrimitive>
          </SheetBody>
          <SheetFooter className="border-t bg-muted/20 sm:p-4">
            <Button size="sm" className="w-full justify-between bg-bg" intent="outline">
              <span>Sign out</span>
              <ArrowLeftStartOnRectangleIcon className="size-5" />
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  )
}
