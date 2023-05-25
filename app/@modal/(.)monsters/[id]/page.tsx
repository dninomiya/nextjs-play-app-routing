'use client';

import Note from '@/app/_components/note';
import { Monsters } from '@/app/_lib/monsters';
import { Dialog, Transition } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import { Fragment, useState } from 'react';

export default function Example({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const [isShowing, setIsShowing] = useState(true);
  const router = useRouter();
  const item = Monsters.find((item) => item.id === params.id);

  if (!item) return null;

  return (
    <Transition.Root
      afterLeave={() => router.back()}
      appear={true}
      show={isShowing}
      as={Fragment}
    >
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsShowing(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform rounded-lg bg-slate-800 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 outline outline-2 outline-amber-500 outline-offset-4">
                <div>
                  <div className="aspect-video w-full grid place-items-center bg-indigo-600 rounded-md">
                    <img
                      src={`/images/${item.id}.png`}
                      alt=""
                      className="block h-32"
                    />
                  </div>
                  <div className="mt-3 sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-semibold leading-6 mb-4"
                    >
                      {item.title}
                    </Dialog.Title>

                    <div className="text-slate-500">
                      <p>この状態でリロードすると詳細ページとして開きます。</p>
                    </div>

                    <Note
                      title="@modal/(.)monsters/[id]/page.tsx"
                      description="傍受ルート（（.）傍受対象のパス）を使うと、本来の遷移先の代わりに自分を表示させることができます。Next.jsのルート変更時のみ傍受するので、目的のURLにダイレクトアクセスした場合は傍受しません。これにより、一覧画面からクリックした際はモーダルを開き、URLを直接開いた場合は詳細画面を開かせる。などの実装ができます。ためしにこの画面をリロードしてみると、モーダルではなく本来の遷移先である詳細画面が開きます。"
                    />
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => setIsShowing(false)}
                  >
                    閉じる
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
