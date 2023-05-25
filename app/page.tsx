export default function Home() {
  return (
    <main>
      <h1 className="font-bold">トップページ</h1>

      <p className="mt-6 text-gray-500">
        右のサイドバーからページ遷移を行い、どのルートがアクティブになるか、左のツリーで確認してみましょう。
      </p>

      <p className="mt-6 underline text-indigo-600">
        <a
          href="https://github.com/dninomiya/nextjs-play-app-routing"
          target="_blank"
        >
          GitHub
        </a>
      </p>
    </main>
  );
}
