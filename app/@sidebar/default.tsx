import Link from 'next/link';
import Note from '../_components/note';

export default function Default() {
  return (
    <div>
      <Link
        href="/"
        className="block rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        ホームにもどる
      </Link>

      <Note
        title="@sidebar/default.tsx"
        description="初回アクセス時にパスに対応するコンポーネントがない場合 default コンポーネントが表示されます。 default コンポーネントがない場合、他のルートも合わせて 404 になってしまいます。一度他の内容が表示されると、以後対応するコンポーネントがない場合 default ではなく引き続き直前のコンポーネントが表示されるようになります。"
      />
    </div>
  );
}
