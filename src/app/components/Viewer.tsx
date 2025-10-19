import { useState } from "react";

export default function Viewer({ content }: { content: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (content) {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-gray-900 rounded-lg shadow p-0 m-4 overflow-hidden">
      <div className="flex items-center justify-between bg-gray-800 px-6 py-3 border-b border-gray-700">
        <h3 className="text-lg font-semibold text-gray-100">Viewer</h3>
        <button
          onClick={handleCopy}
          disabled={!content}
          className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded transition disabled:opacity-50"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-6">
        {content ? (
          <pre className="whitespace-pre-wrap text-gray-200 break-words">{content}</pre>
        ) : (
          <p className="text-gray-500">No content to display.</p>
        )}
      </div>
    </div>
  );
}
