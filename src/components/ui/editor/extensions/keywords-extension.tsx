import { registerLexicalTextEntity } from "@lexical/text";
import { TextNode, defineExtension, mergeRegister } from "lexical";

import { $createKeywordNode, KeywordNode } from "../nodes/keyword-node";

const KEYWORDS_REGEX =
  /(^|$|[^A-Za-z])(congrats|congratulations|gratuluju|gratuluji|gratulujeme|blahopřeju|blahopřeji|blahopřejeme|Til lykke|Tillykke|Glückwunsch|Gratuliere|felicitaciones|enhorabuena|paljon onnea|onnittelut|Félicitations|gratula|gratulálok|gratulálunk|congratulazioni|complimenti|おめでとう|おめでとうございます|축하해|축하해요|gratulerer|Gefeliciteerd|gratulacje|Parabéns|parabéns|felicitações|felicitări|мои поздравления|поздравляем|поздравляю|gratulujem|blahoželám|ยินดีด้วย|ขอแสดงความยินดี|tebrikler|tebrik ederim|恭喜|祝贺你|恭喜你|baie geluk|veels geluk|অভিনন্দন|Čestitam|Čestitke|Čestitamo|Συγχαρητήρια|Μπράβο|અભિનંદન|badhai|बधाई|अभिनंदन|Честитам|Свака част|hongera|வாழ்த்துகள்|வாழ்த்துக்கள்|అభినందనలు|അഭിനന്ദനങ്ങൾ|Chúc mừng|מזל טוב|mazel tov|mazal tov)(^|$|[^A-Za-z])/i;

function $convertToKeywordNode(textNode: TextNode): KeywordNode {
  return $createKeywordNode(textNode.getTextContent());
}

function getKeywordMatch(text: string) {
  const matchArr = KEYWORDS_REGEX.exec(text);

  if (matchArr === null) {
    return null;
  }

  const hashtagLength = matchArr[2].length;
  const startOffset = matchArr.index + matchArr[1].length;
  const endOffset = startOffset + hashtagLength;
  return {
    end: endOffset,
    start: startOffset,
  };
}

export const KeywordsExtension = defineExtension({
  name: "@intentui-editor/LexicalKeywords",
  nodes: () => [KeywordNode],
  register(editor) {
    return mergeRegister(
      ...registerLexicalTextEntity(
        editor,
        getKeywordMatch,
        KeywordNode,
        $convertToKeywordNode,
      ),
    );
  },
});
