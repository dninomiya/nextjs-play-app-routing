'use client';

import { useSelectedLayoutSegments } from 'next/navigation';
import React from 'react';
import { FolderIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';

type FileOrFolder = {
  name: string;
  children?: FileOrFolder[];
  currentPath?: {
    slot: 'main' | 'sidebar' | 'modal';
    pattern: string;
  };
};

const tree: FileOrFolder[] = [
  {
    name: 'layout.tsx',
  },
  {
    name: 'page.tsx',
    currentPath: {
      slot: 'main',
      pattern: '',
    },
  },
  {
    name: 'monsters',
    children: [
      {
        name: 'page.tsx',
        currentPath: {
          slot: 'main',
          pattern: 'monsters',
        },
      },
      {
        name: '[id]',
        children: [
          {
            name: 'page.tsx',
            currentPath: {
              slot: 'main',
              pattern: 'monsters/.*',
            },
          },
        ],
      },
    ],
  },
  {
    name: '@sidebar',
    children: [
      {
        name: 'page.tsx',
        currentPath: {
          slot: 'sidebar',
          pattern: '',
        },
      },
      {
        name: 'default.tsx',
        currentPath: {
          slot: 'sidebar',
          pattern: '__DEFAULT__',
        },
      },
      {
        name: 'monsters',
        children: [
          {
            name: 'page.tsx',
            currentPath: {
              slot: 'sidebar',
              pattern: 'monsters',
            },
          },
        ],
      },
    ],
  },
  {
    name: '@modal',
    children: [
      {
        name: 'default.tsx',
        currentPath: {
          slot: 'modal',
          pattern: '__DEFAULT__',
        },
      },
      {
        name: '(.)monsters',
        children: [
          {
            name: '[id]',
            children: [
              {
                name: 'page.tsx',
                currentPath: {
                  slot: 'modal',
                  pattern: '\\(\\.\\)monsters/.*',
                },
              },
            ],
          },
        ],
      },
    ],
  },
];

export default function FileTree() {
  const pathes = {
    main: useSelectedLayoutSegments(),
    sidebar: useSelectedLayoutSegments('sidebar'),
    modal: useSelectedLayoutSegments('modal'),
  };

  console.log(pathes);

  return (
    <div className="text-xs">
      <div className="border rounded-md border-slate-700 w-[240px] bg-slate-900">
        <ul className="divide-y divide-slate-700">
          {tree.map((item) => (
            <Item key={item.name} pathes={pathes} data={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

const Item = ({
  data,
  pathes,
}: {
  data: FileOrFolder;
  pathes: {
    main: string[];
    sidebar: string[];
    modal: string[];
  };
}) => {
  const isActive =
    data.currentPath &&
    pathes[data.currentPath.slot]
      .join('/')
      .match(new RegExp(`^${data.currentPath.pattern}$`));

  // if (data.currentPath) {
  //   const targetString = pathes[data.currentPath?.slot].join('/');
  //   console.log(targetString, data.currentPath?.pattern, data.name, isActive);
  // }

  const isSlot = data.name.match('@');
  const slotName = (
    isSlot ? data.name.replace('@', '') : data.currentPath?.slot
  ) as 'main' | 'sidebar';

  const colors = {
    outline: {
      main: 'outline-indigo-600',
      sidebar: 'outline-pink-500',
      modal: 'outline-amber-500',
    },
    badge: {
      main: 'bg-indigo-500 shadow-indigo-500',
      sidebar: 'bg-pink-500 shadow-pink-500',
      modal: 'bg-amber-500 shadow-amber-500',
    },
  };

  if (data.children?.length) {
    return (
      <li
        className={classNames(
          isSlot && `outline my-3 outline-1 ${colors.outline[slotName]}`
        )}
      >
        <div className="h-9 px-3 flex items-center">
          <div className="w-7 grid place-items-center">
            <FolderIcon className="w-5 h-5 mr-3 text-slate-400" />
          </div>
          {data.name}
        </div>
        <ul className="pl-7 border-t divide-y divide-slate-800 border-slate-800">
          {data.children.map((item) => (
            <Item
              data={item}
              key={data.name + '_' + item.name}
              pathes={pathes}
            />
          ))}
        </ul>
      </li>
    );
  } else {
    return (
      <li className="h-9 px-3 flex items-center">
        <span className="flex-1">{data.name}</span>
        <span
          className={classNames(
            'w-2 h-2 rounded-full transition shadow-[0_0_10px_0]',
            isActive ? colors.badge[slotName] : 'shadow-transparent'
          )}
        ></span>
      </li>
    );
  }
};
