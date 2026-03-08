import { useState } from "react";

export function Code({ code, lang = "php" }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="rounded-xl overflow-hidden mt-2 text-xs">
      <div className="flex justify-between items-center bg-gray-800 px-3 py-1.5">
        <span className="text-gray-400 font-mono">{lang}</span>
        <button
          onClick={() => {
            navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          className="text-gray-400 hover:text-white transition-colors"
        >
          {copied ? "✅ Copied" : "📋 Copy"}
        </button>
      </div>
      <pre className="bg-gray-900 text-green-300 p-3 overflow-x-auto font-mono leading-relaxed whitespace-pre">
        {code}
      </pre>
    </div>
  );
}
