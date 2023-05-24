import Link from 'next/link';
import React from 'react';
import { Monsters } from '../_lib/monsters';

export default function ProductListPage() {
  return (
    <div>
      <h1 className="font-bold text-xl mb-4">モンスターリスト</h1>
      <div className="grid grid-cols-2 gap-6">
        {Monsters.map((item) => (
          <div
            key={item.id}
            className="relative border border-slate-800 overflow-hidden rounded-md"
          >
            <div className="aspect-video grid place-items-center bg-indigo-600">
              <img
                src={`/images/${item.id}.png`}
                alt=""
                className="block h-32"
              />
            </div>
            <div className="p-4 text-slate-500">
              <h2>{item.title}</h2>
              <Link
                className="absolute inset-0"
                href={`/monsters/${item.id}`}
              ></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
