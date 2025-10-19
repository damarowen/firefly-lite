"use client";

import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Viewer from "./components/Viewer";

type CrawlItem = {
    url: string;
    content: string;
};

export default function HomePage() {
  const [crawls, setCrawls] = useState<CrawlItem[]>([]);
  const [selected, setSelected] = useState<CrawlItem | null>(null);

  const handleCrawl = (data: any) => {
    const newItem: CrawlItem = { url: data.url, content: data.markdown || data.html || "" };
    setCrawls(prev => [newItem, ...prev]);
    setSelected(newItem);
  };

  const handleSelect = (idx: number) => {
    setSelected(crawls[idx]);
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header onCrawl={handleCrawl} />
      <div className="flex flex-1">
        <Sidebar
          items={crawls.map(item => item.url)}
          onSelect={handleSelect}
        />
        <Viewer content={selected?.content || ""} />
      </div>
    </div>
  );
}
