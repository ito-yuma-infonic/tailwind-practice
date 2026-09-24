import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <h1 className="text-5xl font-extrabold tracking-tight">ToDoツール</h1>
        <p>このツールの使い方です</p>
        <button className="bg-blue-600  text-white p-3 mt-6 rounded-full shadow-2xl shadow-amber-600 hover:bg-red-700 transition duration-700">
          ツールを起動する
        </button>
        {/* 
        max-:windowサイズの最大値を決める。
        m:余白
        p:内側の余白
        */}
      </div>
    </>
  );
}
