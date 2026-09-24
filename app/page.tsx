import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <div className="container mx-auto px-4 py-6 max-w-4xl text-center">
        <h1 className="text-5xl font-extrabold tracking-tight">ToDoツール</h1>
        <p>このツールの使い方です</p>
        <button className="bg-blue-600  text-white p-3 mt-6 rounded-full shadow-2xl shadow-amber-600 hover:bg-red-700 transition duration-700">
          ツールを起動する
        </button> */}
      {/* 
        max-:windowサイズの最大値を決める。
        m:余白
        p:内側の余白
        */}
      {/* </div> */}
      <div className="flex">
        {/* <!-- 左側：メニュー --> */}
        <aside className="bg-gray-100 border-r border-gray-300 overflow-y-auto flex-none">
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4 text-gray-800">メニュー</h2>
            <nav>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 rounded hover:bg-gray-200 text-gray-700"
                  >
                    ホーム
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 rounded hover:bg-gray-200 text-gray-700"
                  >
                    プロフィール
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 rounded hover:bg-gray-200 text-gray-700"
                  >
                    設定
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 rounded hover:bg-gray-200 text-gray-700"
                  >
                    ヘルプ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 rounded hover:bg-gray-200 text-gray-700"
                  >
                    お問い合わせ
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        {/* <!-- 真ん中：メインコンテンツ --> */}
        <main className="bg-white overflow-y-auto flex-1">
          <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-gray-900">
              メインコンテンツ
            </h1>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                セクション1
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                ここにメインコンテンツの内容が入ります。このセクションには主要な情報や記事の本文などが表示されます。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Flexboxを使用して、画面を3分割したレイアウトになっています。左側にメニュー、中央にメインコンテンツ、右側に目次が配置されています。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                セクション2
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                このレイアウトは、Tailwind
                CSSのFlexboxユーティリティクラスを使用して実装されています。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                中央のメインコンテンツエリアは `flex-1`
                クラスを使用して、残りのスペースを自動的に埋めるように設定されています。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                セクション3
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                各セクションには適切なマージンとパディングが設定されており、読みやすいレイアウトになっています。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                右側の目次エリアでは、このページの各セクションへのナビゲーションリンクが表示されます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                セクション4
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                このレイアウトは、レスポンシブデザインにも対応できるように設計されています。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                必要に応じて、メディアクエリを使用してモバイルデバイスでの表示を最適化することもできます。
              </p>
            </section>
          </div>
        </main>

        {/* <!-- 右側：目次 --> */}
        <aside className="bg-gray-50 border-l border-gray-300 overflow-y-auto flex-none">
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4 text-gray-800">目次</h2>
            <nav>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#section1"
                    className="block px-4 py-2 rounded hover:bg-gray-200 text-gray-700 text-sm"
                  >
                    セクション1
                  </a>
                </li>
                <li>
                  <a
                    href="#section2"
                    className="block px-4 py-2 rounded hover:bg-gray-200 text-gray-700 text-sm"
                  >
                    セクション2
                  </a>
                </li>
                <li>
                  <a
                    href="#section3"
                    className="block px-4 py-2 rounded hover:bg-gray-200 text-gray-700 text-sm"
                  >
                    セクション3
                  </a>
                </li>
                <li>
                  <a
                    href="#section4"
                    className="block px-4 py-2 rounded hover:bg-gray-200 text-gray-700 text-sm"
                  >
                    セクション4
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>

      <div className="grid grid-cols-12 gap-4 p-4">
        {/* 12分割中、8つの升目を使うエリア */}
        <div className="col-span-8 bg-white border p-4">メインコンテンツ</div>
        {/* 12分割中、4つの升目を使うエリア */}
        <div className="col-span-4 bg-gray-50 border p-4">サイドバー</div>
      </div>
    </>
  );
}
