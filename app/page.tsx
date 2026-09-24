import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-5xl font-extrabold tracking-tight">ToDoツール</h1>
        <p>このツールの使い方です</p>
        <button className="bg-blue-600  text-white p-3 mt-6 rounded-full shadow-2xl shadow-amber-600">
          ツールを起動する
        </button>
        {/* 
        m:余白
        p:内側の余白
        */}
      </div>
    </>
  );
}
