import { Code } from "../components/Code.jsx";

export default function Deploy() {
  return (
    <div className="space-y-3">
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-4 text-white">
        <h2 className="text-lg font-black">🚀 How to Host This Site</h2>
        <p className="text-gray-400 text-xs mt-1">এই docs site টা কীভাবে real URL এ host করবে</p>
      </div>

      {[
        {
          step: "Option 1 — Vercel (Fastest, Free)", color: "indigo", icon: "⚡",
          desc: "সবচেয়ে সহজ। ৫ মিনিটে live।",
          code: `# 1. React app বানাও
npx create-react-app learnai-docs
cd learnai-docs

# 2. এই artifact এর code App.js তে paste করো

# 3. Vercel এ deploy করো
npm install -g vercel
vercel

# Done! তোমাকে একটা URL দেবে:
# https://learnai-docs.vercel.app`,
        },
        {
          step: "Option 2 — Netlify (Drag & Drop)", color: "green", icon: "🌐",
          desc: "Code না জানলেও হবে — folder drag করো।",
          code: `# 1. Build করো
npm run build

# 2. netlify.com এ যাও
# 3. "build" folder টা drag & drop করো
# Done! Free URL পাবে।`,
        },
        {
          step: "Option 3 — GitHub Pages (Free)", color: "purple", icon: "🐙",
          desc: "GitHub account থাকলে সবচেয়ে ভালো।",
          code: `# 1. GitHub repo তৈরি করো
git init && git add . && git commit -m "init"
git remote add origin https://github.com/user/learnai-docs
git push

# 2. package.json এ add করো:
"homepage": "https://username.github.io/learnai-docs"

# 3. Deploy করো
npm install gh-pages --save-dev
npm run deploy

# URL: https://username.github.io/learnai-docs`,
        },
      ].map((o, i) => {
        const cls = { indigo: { border: "border-indigo-200", bg: "bg-indigo-50", header: "bg-indigo-600" }, green: { border: "border-green-200", bg: "bg-green-50", header: "bg-green-600" }, purple: { border: "border-purple-200", bg: "bg-purple-50", header: "bg-purple-600" } };
        const cl = cls[o.color];
        return (
          <div key={i} className={`rounded-2xl border-2 ${cl.border} overflow-hidden`}>
            <div className={`${cl.header} px-4 py-2.5 flex items-center gap-2`}>
              <span className="text-xl">{o.icon}</span>
              <p className="text-white font-bold text-sm">{o.step}</p>
            </div>
            <div className={`${cl.bg} p-3`}>
              <p className="text-xs text-gray-600 mb-1">{o.desc}</p>
              <Code lang="bash" code={o.code} />
            </div>
          </div>
        );
      })}

      <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4">
        <p className="text-sm font-bold text-amber-800 mb-2">💡 Custom Domain যোগ করতে চাইলে</p>
        <div className="space-y-1.5">
          {[
            "learnaibd.com কিনো — Namecheap বা Exabytes BD (~$10/year)",
            "Vercel বা Netlify dashboard এ 'Custom Domain' add করো",
            "DNS এ CNAME record যোগ করো — ব্যস!",
          ].map((t, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-amber-600 font-bold text-sm shrink-0">{i + 1}.</span>
              <p className="text-xs text-amber-800">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
