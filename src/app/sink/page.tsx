"use client"

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { Button, buttonStyles } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { Menu } from "@/components/ui/menu"

export default function Page() {
  return (
    <div className="flex items-center gap-x-1 p-10">
      <Menu>
        <Button intent="secondary" size="sm">
          Open in...
          <svg
            data-slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </Menu>
      <div className="5 flex items-center gap-x-1">
        <Link className={buttonStyles({ size: "sq-sm", intent: "secondary" })} href="#">
          <ChevronRightIcon />{" "}
        </Link>
        <Link className={buttonStyles({ size: "sq-sm", intent: "secondary" })} href="#">
          <ChevronLeftIcon />{" "}
        </Link>
      </div>
    </div>
  )
}
