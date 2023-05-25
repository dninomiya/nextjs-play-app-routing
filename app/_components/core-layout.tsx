import React, { Suspense } from 'react';
import Header from './header';
import FileTree from './tree';
import CodePanel from './code';

export default function CoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex mt-10 pb-14 gap-10">
      <FileTree />
      <div className="flex-1">
        <Header />
        <div className="flex gap-10 mt-10">{children}</div>
      </div>
      <Suspense fallback={<p>loading</p>}>
        <CodePanel />
      </Suspense>
    </div>
  );
}
