import {
  Bars3BottomLeftIcon,
  ChatBubbleBottomCenterTextIcon,
  ClipboardDocumentCheckIcon,
  CodeBracketIcon,
  H1Icon,
  H2Icon,
  H3Icon,
  ListBulletIcon,
  NumberedListIcon,
} from "@heroicons/react/24/outline";

export const blockTypeToBlockName: Record<
  string,
  { label: string; icon: React.ReactNode }
> = {
  paragraph: {
    label: "Paragraph",
    icon: <Bars3BottomLeftIcon className="size-4" />,
  },
  h1: {
    label: "Heading 1",
    icon: <H1Icon className="size-4" />,
  },
  h2: {
    label: "Heading 2",
    icon: <H2Icon className="size-4" />,
  },
  h3: {
    label: "Heading 3",
    icon: <H3Icon className="size-4" />,
  },
  number: {
    label: "Numbered List",
    icon: <NumberedListIcon className="size-4" />,
  },
  bullet: {
    label: "Bulleted List",
    icon: <ListBulletIcon className="size-4" />,
  },
  check: {
    label: "Check List",
    icon: <ClipboardDocumentCheckIcon className="size-4" />,
  },
  code: {
    label: "Code Block",
    icon: <CodeBracketIcon className="size-4" />,
  },
  quote: {
    label: "Quote",
    icon: <ChatBubbleBottomCenterTextIcon className="size-4" />,
  },
};
