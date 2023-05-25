'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus';
import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

SyntaxHighlighter.registerLanguage('tsx', tsx);

export default function CodeView({
  sources,
}: {
  sources: {
    [key in string]: string;
  };
}) {
  const pathname = usePathname();
  const params = useSearchParams();
  const path = params.get('source') as string;
  const code = sources[path];

  const { setNodeRef } = useDroppable({
    id: 'droppable',
  });

  if (!code) {
    return null;
  }

  return (
    <div
      ref={setNodeRef}
      className="fixed flex border border-gray-700 flex-col w-1/2 inset-y-6 overflow-auto right-6 rounded-lg bg-[#1e1e1e] shadow-lg"
    >
      <div className="border-b flex justify-between items-center border-slate-700/40 p-4 text-sm text-gray-600">
        <p>{path.replace('app', '')}</p>
        <Link
          href={{
            pathname,
            query: null,
          }}
        >
          <XMarkIcon className="w-5 h-5 text-gray-600" />
        </Link>
      </div>
      <div className="flex-1 p-4 overflow-auto">
        <div className="-m-[13px]">
          <SyntaxHighlighter language="tsx" style={prism}>
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}
