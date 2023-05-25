import Note from '@/app/_components/note';
import Link from 'next/link';

export default function Default() {
  return (
    <div>
      <Link
        href="/"
        className="mb-6 block rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        ホームにもどる
      </Link>

      <div>
        <fieldset>
          <legend className="block text-sm font-medium text-gray-400">
            属性
          </legend>
          <div className="space-y-3 pt-6">
            <div className="flex items-center">
              <input
                id="color-0"
                name="color[]"
                value="white"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="color-0" className="ml-3 text-sm text-gray-400">
                ほのお
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="color-1"
                name="color[]"
                value="beige"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="color-1" className="ml-3 text-sm text-gray-400">
                こおり
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="color-2"
                name="color[]"
                value="blue"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="color-2" className="ml-3 text-sm text-gray-400">
                かくとう
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="color-3"
                name="color[]"
                value="brown"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="color-3" className="ml-3 text-sm text-gray-400">
                ドラゴン
              </label>
            </div>
          </div>
        </fieldset>
      </div>

      <Note
        title="/@sidebar/monsters/page.tsx"
        description="モンスター一覧画面（/monsters）で表示されるサイドバー"
      />
    </div>
  );
}
