import { INSERT_EMBED_COMMAND } from "@lexical/react/LexicalAutoEmbedPlugin";

import { useToolbarContext } from "@/components/ui/editor/context/toolbar-context";
import { EmbedConfigs } from "@/components/ui/editor/plugins/embeds/auto-embed-plugin";
import { MenuItem } from "@/components/ui/menu";

export function InsertEmbeds() {
  const { activeEditor } = useToolbarContext();
  return EmbedConfigs.map((embedConfig) => (
    <MenuItem
      key={embedConfig.type}
      onAction={() => {
        activeEditor.dispatchCommand(INSERT_EMBED_COMMAND, embedConfig.type);
      }}
    >
      <div className="flex items-center gap-1">
        {embedConfig.icon}
        <span>{embedConfig.contentName}</span>
      </div>
    </MenuItem>
  ));
}
