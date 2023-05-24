import Link from 'next/link';

export default function Default() {
  return (
    <div>
      <p className="mb-6">
        パスに対応するコンポーネントがない場合 @sidebar/default.tsx
        が表示されます。
      </p>

      <Link
        href="/"
        className="mt-6 block rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        ホームにもどる
      </Link>
    </div>
  );
}
