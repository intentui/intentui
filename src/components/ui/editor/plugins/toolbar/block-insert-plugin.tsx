import { useEditorModal } from "@/components/ui/editor/editor-hooks/use-modal";
import { Button } from "@/components/ui/button";
import { Menu, MenuContent } from "@/components/ui/menu";
import { PlusIcon } from "@heroicons/react/20/solid";

export function BlockInsertPlugin({ children }: { children: React.ReactNode }) {
  const [modal] = useEditorModal();

  return (
    <>
      {modal}
      <Menu>
        <Button intent="outline" size="sm" className="gap-1 px-2">
          <PlusIcon />
          <span className="text-sm">Insert</span>
        </Button>
        <MenuContent>{children}</MenuContent>
      </Menu>
    </>
  );
}
