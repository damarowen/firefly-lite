// src/app/components/Sidebar.tsx
import { useState } from "react";

export default function Sidebar({
  items,
  onSelect,
}: {
    items: string[];
    onSelect: (idx: number) => void;
}) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <aside className="w-full md:w-64 border-r bg-gray-50 p-4 h-screen overflow-auto flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">📂</span>
        <h2 className="text-base font-semibold">Crawled Sites</h2>
      </div>
      <ul className="space-y-2">
        {items.length === 0 ? (
          <li className="text-gray-400 text-sm">No sites crawled yet.</li>
        ) : (
          items.map((url, idx) => (
            <li
              key={idx}
              onClick={() => {
                setActiveIdx(idx);
                onSelect(idx);
              }}
              className={`cursor-pointer text-sm border-b border-gray-200 pb-1 px-2 rounded transition
                                ${activeIdx === idx
              ? "bg-indigo-100 text-indigo-700 font-medium"
              : "text-gray-700 hover:bg-gray-200"}
                            `}
            >
              {url}
            </li>
          ))
        )}
      </ul>
    </aside>
  );
}
