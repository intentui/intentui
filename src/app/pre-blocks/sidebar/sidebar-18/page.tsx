import { CodeHighlighter } from "@/components/code/code-highlighter"

export default async function Page() {
  return (
    <div className="min-h-screen">
      <div className="p-4">
        <CodeHighlighter
          lang="php"
          max96={false}
          className="[--shiki-bg:transparent] **:[pre]:px-8"
          removeLastLine
          plain
          code={processedSourceCode}
        />
      </div>
    </div>
  )
}

const processedSourceCode = `
<?php

namespace App\\Http\\Controllers;

abstract class Controller
{
    //
}
`
