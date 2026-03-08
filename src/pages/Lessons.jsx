import { useState } from "react";

export default function Lessons() {
  const [activeMonth, setActiveMonth] = useState(1);
  const months = [
    { id: 1, label: "Month 1", sub: "PHP Foundations", color: "blue", weeks: ["Week 1: Programming Logic", "Week 2: Core PHP", "Week 3: PHP + Database", "Week 4: Git + Workflow"] },
    { id: 2, label: "Month 2", sub: "Laravel", color: "purple", weeks: ["Week 5: Laravel Fundamentals", "Week 6: Models & Migrations", "Week 7: CRUD Application", "Week 8: API Development"] },
    { id: 3, label: "Month 3", sub: "Engineering", color: "green", weeks: ["Week 9: Debugging", "Week 10: External APIs", "Week 11: Automation Tools", "Week 12: Final Project"] },
  ];
  const cls = { blue: { border: "border-blue-200", bg: "bg-blue-50", header: "bg-blue-600", badge: "bg-blue-100 text-blue-800" }, purple: { border: "border-purple-200", bg: "bg-purple-50", header: "bg-purple-600", badge: "bg-purple-100 text-purple-800" }, green: { border: "border-green-200", bg: "bg-green-50", header: "bg-green-600", badge: "bg-green-100 text-green-800" } };
  const m = months.find((x) => x.id === activeMonth);
  const cl = cls[m.color];

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-green-700 to-blue-700 rounded-2xl p-4 text-white">
        <h2 className="text-lg font-black">📅 12-Week Lesson Plan</h2>
        <p className="text-green-200 text-xs mt-1">প্রতি সপ্তাহে ২ class × ২ ঘণ্টা = ৪ ঘণ্টা</p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {months.map((mo) => {
          const c = cls[mo.color];
          return (
            <button
              key={mo.id}
              onClick={() => setActiveMonth(mo.id)}
              className={`rounded-xl py-2.5 px-2 text-xs font-bold border-2 transition-all ${activeMonth === mo.id ? `${c.header} text-white border-transparent` : `bg-white ${c.border} text-gray-600`}`}
            >
              {mo.label}<br /><span className="font-normal opacity-75">{mo.sub}</span>
            </button>
          );
        })}
      </div>
      <div className={`rounded-2xl border-2 ${cl.border} overflow-hidden`}>
        <div className={`${cl.header} px-4 py-3`}>
          <p className="text-white font-black">{m.label} — {m.sub}</p>
        </div>
        <div className={`${cl.bg} p-3 space-y-2`}>
          {m.weeks.map((w, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${cl.badge}`}>Week {m.id * 4 - 3 + i}</span>
                <span className="font-bold text-gray-800 text-sm">{w.split(": ")[1]}</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {["Class 1 — Theory + Demo (2h)", "Class 2 — Practice + Review (2h)"].map((c, j) => (
                  <div key={j} className="bg-gray-50 rounded-lg px-3 py-2 text-xs text-gray-600">{c}</div>
                ))}
              </div>
              <div className="mt-2 flex gap-2">
                <div className="flex-1 bg-amber-50 border border-amber-100 rounded-lg px-2 py-1.5 text-xs text-amber-700">📝 Weekly assignment</div>
                <div className="flex-1 bg-emerald-50 border border-emerald-100 rounded-lg px-2 py-1.5 text-xs text-emerald-700">📦 GitHub deliverable</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-sm p-4">
        <p className="text-sm font-bold text-gray-700 mb-3">📋 Weekly Routine</p>
        {[{ d: "Mon–Tue", t: "📚 Learning sessions (2–3টা)" }, { d: "Wed–Thu", t: "💻 Coding assignments" }, { d: "Friday", t: "🔍 Code review session" }, { d: "Weekend", t: "📝 Learning log + prep" }].map((r, i) => (
          <div key={i} className="flex items-center gap-3 py-1.5 border-b border-gray-100 last:border-0">
            <span className="text-xs font-bold text-gray-500 w-20 shrink-0">{r.d}</span>
            <span className="text-sm text-gray-700">{r.t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
