'use client';

import { useState } from 'react';
import { crawlUrl } from '../lib/firecrawl';

export default function Home() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCrawl = async () => {
    if (!url) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const data = await crawlUrl(url);
      setResult(data);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
      <main className="min-h-screen flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6 space-y-6">
          <h1 className="text-3xl font-bold text-center">🔥 Firecrawl Wrapper</h1>
          <p className="text-center text-gray-600">
            Masukkan URL yang ingin kamu crawl menggunakan Firecrawl API.
          </p>

          <div className="flex space-x-2">
            <input
                type="text"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200 outline-none"
            />
            <button
                onClick={handleCrawl}
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Crawl'}
            </button>
          </div>

          {error && <p className="text-red-500 text-center">{error}</p>}

          {result && (
              <div className="bg-gray-100 p-4 rounded-lg max-h-[400px] overflow-auto">
            <pre className="text-sm text-gray-800 whitespace-pre-wrap">
              {JSON.stringify(result, null, 2)}
            </pre>
              </div>
          )}
        </div>
      </main>
  );
}
