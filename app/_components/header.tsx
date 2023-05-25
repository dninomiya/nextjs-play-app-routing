'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

export default function Header() {
  const pathName = usePathname();

  return (
    <header>
      <div className="text-slate-500 text-sm border rounded-full px-5 py-2 border-slate-800">
        {pathName}
      </div>
    </header>
  );
}
