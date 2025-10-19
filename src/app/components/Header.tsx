import { useState } from "react";
import { crawlUrl } from "@/lib/firecrawl";

export default function Header({ onCrawl }: { onCrawl: (data: unknown) => void }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isValidUrl = (str: string) => {
    try {
      new URL(str);
      return true;
    } catch {
      return false;
    }
  };

  const handleCrawl = async () => {
    setError("");
    if (!url || !isValidUrl(url)) {
      setError("Please enter a valid URL.");
      return;
    }
    setLoading(true);
    try {
      const data = await crawlUrl(url);
      onCrawl(data);
    } catch {
      setError("Failed to crawl. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="flex flex-col md:flex-row items-center justify-between p-4 border-b bg-white gap-4">
      <div className="flex items-center gap-2">
        <span className="text-2xl">🔥</span>
        <h1 className="text-lg font-semibold">Firefly Lite</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
        <input
          type="text"
          placeholder="Enter website URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border rounded-md px-3 py-1 w-full md:w-64"
        />
        <button
          onClick={handleCrawl}
          disabled={loading}
          className="bg-indigo-600 hover:bg-indigo-700 transition text-white px-4 py-1 rounded-md"
        >
          {loading ? "Crawling..." : "Crawl"}
        </button>
      </div>
      {error && <span className="text-red-500 text-sm mt-2 md:mt-0">{error}</span>}
    </header>
  );
}
