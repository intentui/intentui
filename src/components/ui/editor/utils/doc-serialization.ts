import type { SerializedDocument } from "@lexical/file";

const PREFIX = "doc=";

export async function docToHash(doc: SerializedDocument): Promise<string> {
  const json = JSON.stringify(doc);
  const compressed = btoa(unescape(encodeURIComponent(json)));
  return PREFIX + compressed;
}

export async function docFromHash(
  hash: string,
): Promise<SerializedDocument | null> {
  try {
    const trimmed = hash.startsWith("#") ? hash.slice(1) : hash;
    if (!trimmed.startsWith(PREFIX)) return null;
    const compressed = trimmed.slice(PREFIX.length);
    const json = decodeURIComponent(escape(atob(compressed)));
    return JSON.parse(json) as SerializedDocument;
  } catch {
    return null;
  }
}
