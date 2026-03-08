import { useState } from "react";

export default function Strategy() {
  const [tab, setTab] = useState("positioning");
  const tabs = [
    { id: "positioning", label: "🎯 Positioning" },
    { id: "features", label: "⚙️ Features" },
    { id: "pricing", label: "💰 Pricing" },
    { id: "gtm", label: "🚀 GTM" },
    { id: "numbers", label: "📊 Numbers" },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-indigo-700 to-purple-700 rounded-2xl p-4 text-white">
        <h2 className="text-lg font-black">🎯 Product Strategy</h2>
        <p className="text-indigo-300 text-xs mt-1">Freemium SaaS · Bangladesh First · Programming Niche</p>
      </div>
      <div className="flex gap-1.5 flex-wrap">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border-2 transition-all ${tab === t.id ? "bg-indigo-600 text-white border-transparent" : "bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "positioning" && (
        <div className="space-y-3">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-5 text-white">
            <p className="text-indigo-200 text-xs mb-1">Product One-liner</p>
            <h3 className="text-lg font-black">"বাংলাদেশের programmers এর জন্য AI-powered career mentor — যে প্রতিদিন তোমার সাথে থাকে।"</h3>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {[
              { who: "University student", pain: "পড়াশোনায় programming নেই, job পেতে হলে নিজে শিখতে হবে — কোথা থেকে শুরু করবে বোঝে না" },
              { who: "Self-taught beginner", pain: "YouTube এ শুরু করে, আটকে যায়, motivation হারায়, কেউ guide করে না" },
              { who: "Job seeker", pain: "Roadmap জানে না, কী শিখলে job পাবে জানে না, interview ready হচ্ছে কিনা বোঝে না" },
            ].map((p, i) => (
              <div key={i} className="bg-rose-50 border border-rose-200 rounded-xl p-3">
                <p className="text-xs font-bold text-rose-600 mb-0.5">{p.who}</p>
                <p className="text-xs text-gray-600">{p.pain}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
            <div className="bg-blue-600 px-4 py-2.5"><p className="text-white font-bold text-sm">⚔️ Competitor Analysis</p></div>
            <div className="bg-blue-50 p-3 overflow-x-auto">
              <table className="w-full text-xs">
                <thead><tr className="text-gray-500">
                  <th className="text-left pb-2">Platform</th>
                  <th className="text-center pb-2">Bengali</th>
                  <th className="text-center pb-2">AI Mentor</th>
                  <th className="text-center pb-2">Personalized</th>
                  <th className="text-center pb-2">Affordable</th>
                </tr></thead>
                <tbody>
                  {[
                    ["Coursera/Udemy", "❌", "🟡", "❌", "❌"],
                    ["10 Minute School", "✅", "❌", "❌", "✅"],
                    ["ChatGPT", "🟡", "✅", "🟡", "❌"],
                    ["LearnAI BD 🌟", "✅", "✅", "✅", "✅"],
                  ].map((r, i) => (
                    <tr key={i} className={i === 3 ? "bg-indigo-50 font-bold" : ""}>
                      {r.map((c, j) => <td key={j} className={`py-1.5 ${j === 0 ? "pr-2 font-medium" : "text-center"}`}>{c}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {tab === "features" && (
        <div className="space-y-3">
          {[
            { tier: "Free", color: "green", icon: "🆓", features: ["AI Roadmap Generator (১টা goal)", "Week 1–2 full access", "Daily log + streak system", "Community access", "১টা AI review/month"] },
            { tier: "Pro — ৳৪৯৯/month", color: "indigo", icon: "⚡", features: ["Unlimited AI assignment review", "Full 12 weeks unlocked", "Weekly AI progress analysis", "Job readiness score", "Mock interview questions", "Curated resource library"] },
            { tier: "Pro Max — ৳১,২৯৯/month", color: "purple", icon: "👑", features: ["2x mentor session/month", "Portfolio review", "CV + LinkedIn optimization", "Placement referral network", "Completion certificate"] },
          ].map((f, i) => {
            const cls = { green: { border: "border-green-200", bg: "bg-green-50", header: "bg-green-600", dot: "bg-green-400" }, indigo: { border: "border-indigo-200", bg: "bg-indigo-50", header: "bg-indigo-600", dot: "bg-indigo-400" }, purple: { border: "border-purple-200", bg: "bg-purple-50", header: "bg-purple-600", dot: "bg-purple-400" } };
            const cl = cls[f.color];
            return (
              <div key={i} className={`rounded-2xl border-2 ${cl.border} overflow-hidden`}>
                <div className={`${cl.header} px-4 py-2.5 flex items-center gap-2`}>
                  <span className="text-xl">{f.icon}</span>
                  <p className="text-white font-black">{f.tier}</p>
                </div>
                <div className={`${cl.bg} p-3 space-y-1.5`}>
                  {f.features.map((feat, j) => (
                    <div key={j} className="flex items-center gap-2 bg-white rounded-lg px-3 py-1.5 border border-gray-100">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${cl.dot}`} />
                      <span className="text-sm text-gray-700">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {tab === "pricing" && (
        <div className="space-y-3">
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-3">
            <p className="text-xs font-bold text-amber-700 mb-1">💡 Pricing Strategy</p>
            <p className="text-xs text-amber-800">৳৪৯৯ = BD market এ "affordable premium"। Stack Learner course ৳২,০০০–৳৫,০০০ one-time। তুমি দিচ্ছো ongoing AI mentorship মাত্র ৳৪৯৯/মাসে — ৳১৬/দিন।</p>
          </div>
          {[
            { name: "Free", price: "৳০", period: "", color: "green", note: "Credit card লাগবে না", features: ["AI Roadmap", "Week 1–2", "Daily streak", "1 review/mo"] },
            { name: "Pro", price: "৳৪৯৯", period: "/month", color: "indigo", note: "৳১৬/দিন — চায়ের দাম", features: ["Unlimited review", "Full 12 weeks", "AI analysis", "Interview Qs"] },
            { name: "Pro Max", price: "৳১,২৯৯", period: "/month", color: "purple", note: "Job পেলে উঠে যাবে", features: ["Mentor sessions", "Portfolio review", "CV help", "Certificate"] },
          ].map((p, i) => {
            const cls = { green: { border: "border-green-200", bg: "bg-green-50", header: "bg-green-600", text: "text-green-600" }, indigo: { border: "border-indigo-200", bg: "bg-indigo-50", header: "bg-indigo-600", text: "text-indigo-600" }, purple: { border: "border-purple-200", bg: "bg-purple-50", header: "bg-purple-600", text: "text-purple-600" } };
            const cl = cls[p.color];
            return (
              <div key={i} className={`rounded-2xl border-2 ${cl.border} overflow-hidden ${i === 1 ? "ring-2 ring-indigo-400 ring-offset-1" : ""}`}>
                <div className={`${cl.header} px-4 py-3 flex justify-between items-center`}>
                  <p className="text-white font-black">{p.name}</p>
                  {i === 1 && <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">🔥 Most Popular</span>}
                </div>
                <div className={`${cl.bg} p-4`}>
                  <div className="flex items-end gap-1 mb-3">
                    <span className={`text-3xl font-black ${cl.text}`}>{p.price}</span>
                    <span className="text-gray-400 text-sm mb-1">{p.period}</span>
                  </div>
                  <div className="space-y-1 mb-3">
                    {p.features.map((f, j) => <div key={j} className="flex items-center gap-2 text-sm text-gray-700"><span className={`text-sm ${cl.text}`}>✓</span>{f}</div>)}
                  </div>
                  <p className="text-xs text-gray-400">{p.note}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {tab === "gtm" && (
        <div className="space-y-3">
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4">
            <p className="text-xs font-bold text-amber-700 mb-2">🚀 First 30 Days Launch Plan</p>
            {[
              { week: "Week 1", action: "Waitlist page live", detail: "Simple landing — 'Coming soon, early access'" },
              { week: "Week 2", action: "Beta group তৈরি", detail: "Facebook/WhatsApp এ ৫০ জন early tester" },
              { week: "Week 3", action: "Beta launch", detail: "Free access, feedback collect করো" },
              { week: "Week 4", action: "Paid launch", detail: "First 100 users কে 50% discount" },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-xl px-3 py-2 mb-1.5 flex items-start gap-3 border border-amber-100">
                <span className="text-xs font-black text-amber-600 shrink-0 w-14">{s.week}</span>
                <div><p className="text-sm font-bold text-gray-800">{s.action}</p><p className="text-xs text-gray-500">{s.detail}</p></div>
              </div>
            ))}
          </div>
          {[
            { ch: "Facebook Groups", impact: "High", tactics: ["Programming Hero, Dev Community BD তে active হও", "Free Roadmap Generator share করো", "৳৫০০/day paid ad — developer audience"] },
            { ch: "YouTube", impact: "Very High", tactics: ["Short tutorials — '৫ মিনিটে Laravel routing'", "Success stories — '৩ মাসে job পেয়েছে'", "SEO: 'PHP শেখার উপায়'"] },
            { ch: "University Partnership", impact: "High", tactics: ["CSE dept এ demo দাও", "Student club কে free Pro দাও", "Campus ambassador — commission দাও"] },
          ].map((c, i) => (
            <div key={i} className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
              <div className="bg-gray-700 px-4 py-2.5 flex justify-between items-center">
                <p className="text-white font-bold text-sm">{c.ch}</p>
                <span className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full">Impact: {c.impact}</span>
              </div>
              <div className="p-3 space-y-1.5">
                {c.tactics.map((t, j) => (
                  <div key={j} className="flex items-start gap-2 bg-gray-50 rounded-lg px-3 py-2">
                    <span className="text-indigo-500 text-xs mt-0.5">▸</span>
                    <p className="text-xs text-gray-700">{t}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "numbers" && (
        <div className="space-y-3">
          <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
            <div className="bg-green-600 px-4 py-2.5"><p className="text-white font-bold text-sm">📈 Revenue Projection</p></div>
            <div className="bg-green-50 p-3 overflow-x-auto">
              <table className="w-full text-xs">
                <thead><tr className="text-gray-500 border-b border-gray-200">
                  <th className="text-left pb-2">Month</th><th className="text-right pb-2">Pro Users</th><th className="text-right pb-2">MRR</th>
                </tr></thead>
                <tbody>
                  {[["M1", "10", "৳7,590"], ["M2", "30", "৳21,470"], ["M3", "80", "৳59,420"], ["M6", "250", "৳189,950"], ["M12", "800", "৳593,950"]].map((r, i) => (
                    <tr key={i} className={`border-b border-gray-100 ${i === 4 ? "font-bold text-green-700" : ""}`}>
                      <td className="py-2">{r[0]}</td><td className="text-right">{r[1]}</td><td className="text-right font-bold">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[{ m: "CAC", v: "~৳200", n: "Facebook + organic" }, { m: "LTV (Pro)", v: "~৳2,994", n: "৳499 × 6mo avg" }, { m: "LTV:CAC", v: "15:1", n: "Excellent (>3 = good)" }, { m: "Churn Target", v: "<5%/mo", n: "Streak করবে কমাবে" }].map((u, i) => (
              <div key={i} className="bg-white rounded-xl p-3 border border-indigo-100">
                <p className="text-xs text-gray-400">{u.m}</p>
                <p className="text-lg font-black text-indigo-600">{u.v}</p>
                <p className="text-xs text-gray-500">{u.n}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
