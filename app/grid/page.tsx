import Image from "next/image";
import "./page.css";
export default function Home() {
  return (
    <main className="p-1">
      <h1 className="text-lg font-semibold">movie</h1>
      {/* gap:要素間の隙間 */}
      <article className="grid grid-cols-3 gap-2">
        <div className="card">
          <img
            src="https://picsum.photos/id/1/1920/1080"
            className="rounded-lg"
          />
          <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-2">
            <div className="rounded-full bg-gray-500 w-10 h-10"></div>
            <div>
              <h2 className="text-sm">Movie Title</h2>
              <p className="text-xs">説明です</p>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <img
            src="https://picsum.photos/id/2/1920/1080"
            className="rounded-lg"
          />
          <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-2">
            <div className="rounded-full bg-gray-500 w-10 h-10"></div>
            <div>
              <h2 className="text-sm">Movie Title</h2>
              <p className="text-xs">説明です</p>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <img
            src="https://picsum.photos/id/3/1920/1080"
            className="rounded-lg"
          />
          <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-2">
            <div className="rounded-full bg-gray-500 w-10 h-10"></div>
            <div>
              <h2 className="text-sm">Movie Title</h2>
              <p className="text-xs">説明です</p>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <img
            src="https://picsum.photos/id/4/1920/1080"
            className="rounded-lg"
          />
          <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-2">
            <div className="rounded-full bg-gray-500 w-10 h-10"></div>
            <div>
              <h2 className="text-sm">Movie Title</h2>
              <p className="text-xs">説明です</p>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <img
            src="https://picsum.photos/id/5/1920/1080"
            className="rounded-lg"
          />
          <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-2">
            <div className="rounded-full bg-gray-500 w-10 h-10"></div>
            <div>
              <h2 className="text-sm">Movie Title</h2>
              <p className="text-xs">説明です</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
