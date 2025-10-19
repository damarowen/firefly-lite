"use client";

import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Viewer from "./components/Viewer";

type CrawlItem = {
    url: string;
    content: string;
};

type CrawlResponse = {
    markdown?: string;
    metadata?: {
        url?: string;
        sourceURL?: string;
        // Add other metadata fields if needed
    };
};


export default function HomePage() {
  const [crawls, setCrawls] = useState<CrawlItem[]>([]);
  const [selected, setSelected] = useState<CrawlItem | null>(null);

  const handleCrawl = (data: unknown) => {
    const crawlData = data as CrawlResponse;
    const url = crawlData.metadata?.url || crawlData.metadata?.sourceURL || "";
    const content = crawlData.markdown || "";
    if (!url) return;
    const newItem: CrawlItem = { url, content };
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
