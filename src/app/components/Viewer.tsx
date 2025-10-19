import { useState } from "react";
import ReactMarkdown from "react-markdown";

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
          <>
            <section>
              <h4 className="text-md font-bold text-gray-100 mb-2">Styled Markdown</h4>
              <div className="prose prose-invert">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </section>
            <hr className="my-6 border-gray-700" />
            <section>
              <h4 className="text-md font-bold text-gray-100 mb-2">Plain Markdown</h4>
              <pre className="whitespace-pre-wrap text-gray-200 break-words bg-gray-800 p-4 rounded">{content}</pre>
            </section>
          </>
        ) : (
          <p className="text-gray-500">No content to display.</p>
        )}
      </div>
    </div>
  );
}
