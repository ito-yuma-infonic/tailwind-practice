import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-5xl font-extrabold tracking-tight">ToDoツール</h1>
        <p>このツールの使い方です</p>
        <button className="bg-blue-600  text-white p-3 mt-6">
          ツールを起動する
        </button>
      </div>
    </>
  );
}
