'use client';

import { BookOpenIcon, HomeIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    label: 'ホーム',
    icon: HomeIcon,
    href: '/',
  },
  {
    label: 'モンスターリスト',
    icon: BookOpenIcon,
    href: '/monsters',
  },
];

export default function Sidebar() {
  const pathName = usePathname();

  return (
    <div>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={classNames(
                pathName === link.href
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-950',
                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
              )}
            >
              <link.icon
                className={classNames(
                  pathName === link.href
                    ? 'text-white'
                    : 'text-gray-600 group-hover:text-white',
                  'h-6 w-6 shrink-0'
                )}
                aria-hidden="true"
              />
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
