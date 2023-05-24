import { Monsters } from '@/app/_lib/monsters';
import Link from 'next/link';
import React from 'react';

export default function PhotoDetail({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const item = Monsters.find((item) => item.id === params.id);

  if (!item) return null;

  return (
    <div>
      <div className="aspect-video w-full grid place-items-center bg-indigo-600 rounded-md">
        <img src={`/images/${item.id}.png`} alt="" className="block h-48" />
      </div>
      <h1 className="mt-4 font-semibold mb-6 text-2xl">{item.title}</h1>

      <p>直接アクセスしたらこの画面が表示されます。</p>
    </div>
  );
}
