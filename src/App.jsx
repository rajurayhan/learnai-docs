import { useState } from "react";
import Strategy from "./pages/Strategy.jsx";
import Tech from "./pages/Tech.jsx";
import Lessons from "./pages/Lessons.jsx";
import Deploy from "./pages/Deploy.jsx";

const PAGES = [
  { id: "strategy", icon: "🎯", label: "Strategy" },
  { id: "tech", icon: "🧱", label: "Tech" },
  { id: "lessons", icon: "📅", label: "Lessons" },
  { id: "deploy", icon: "🚀", label: "Deploy Guide" },
];

export default function App() {
  const [page, setPage] = useState("strategy");

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2 text-inherit no-underline hover:opacity-90">
              <span className="text-xl">🧠</span>
              <div>
                <p className="font-black text-indigo-700 text-sm leading-none">LearnAI BD</p>
                <p className="text-gray-400 text-xs">Documentation</p>
              </div>
            </a>
          </div>
          <div className="flex gap-1">
            {PAGES.map((p) => (
              <button
                key={p.id}
                onClick={() => setPage(p.id)}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all ${page === p.id ? "bg-indigo-600 text-white" : "text-gray-500 hover:bg-gray-100"}`}
              >
                <span>{p.icon}</span>
                <span className="hidden sm:inline">{p.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-4 pb-10">
        {page === "strategy" && <Strategy />}
        {page === "tech" && <Tech />}
        {page === "lessons" && <Lessons />}
        {page === "deploy" && <Deploy />}
      </div>
    </div>
  );
}
