import { useState } from "react";

// ── CODE BLOCK ────────────────────────────────────────────────────────────────
function Code({ code, lang = "php" }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="rounded-xl overflow-hidden mt-2 text-xs">
      <div className="flex justify-between items-center bg-gray-800 px-3 py-1.5">
        <span className="text-gray-400 font-mono">{lang}</span>
        <button onClick={() => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
          className="text-gray-400 hover:text-white transition-colors">{copied ? "✅ Copied" : "📋 Copy"}</button>
      </div>
      <pre className="bg-gray-900 text-green-300 p-3 overflow-x-auto font-mono leading-relaxed whitespace-pre">{code}</pre>
    </div>
  );
}

// ── PAGE: STRATEGY ────────────────────────────────────────────────────────────
function PageStrategy() {
  const [tab, setTab] = useState("positioning");
  const tabs = [
    { id:"positioning", label:"🎯 Positioning" },
    { id:"features",    label:"⚙️ Features"    },
    { id:"pricing",     label:"💰 Pricing"     },
    { id:"gtm",         label:"🚀 GTM"         },
    { id:"numbers",     label:"📊 Numbers"     },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-indigo-700 to-purple-700 rounded-2xl p-4 text-white">
        <h2 className="text-lg font-black">🎯 Product Strategy</h2>
        <p className="text-indigo-300 text-xs mt-1">Freemium SaaS · Bangladesh First · Programming Niche</p>
      </div>
      <div className="flex gap-1.5 flex-wrap">
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border-2 transition-all ${tab===t.id?"bg-indigo-600 text-white border-transparent":"bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}`}>
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
              { who:"University student", pain:"পড়াশোনায় programming নেই, job পেতে হলে নিজে শিখতে হবে — কোথা থেকে শুরু করবে বোঝে না" },
              { who:"Self-taught beginner", pain:"YouTube এ শুরু করে, আটকে যায়, motivation হারায়, কেউ guide করে না" },
              { who:"Job seeker", pain:"Roadmap জানে না, কী শিখলে job পাবে জানে না, interview ready হচ্ছে কিনা বোঝে না" },
            ].map((p,i) => (
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
                    ["Coursera/Udemy","❌","🟡","❌","❌"],
                    ["10 Minute School","✅","❌","❌","✅"],
                    ["ChatGPT","🟡","✅","🟡","❌"],
                    ["LearnAI BD 🌟","✅","✅","✅","✅"],
                  ].map((r,i) => (
                    <tr key={i} className={i===3?"bg-indigo-50 font-bold":""}>
                      {r.map((c,j) => <td key={j} className={`py-1.5 ${j===0?"pr-2 font-medium":"text-center"}`}>{c}</td>)}
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
            { tier:"Free", color:"green", icon:"🆓", features:["AI Roadmap Generator (১টা goal)","Week 1–2 full access","Daily log + streak system","Community access","১টা AI review/month"] },
            { tier:"Pro — ৳৪৯৯/month", color:"indigo", icon:"⚡", features:["Unlimited AI assignment review","Full 12 weeks unlocked","Weekly AI progress analysis","Job readiness score","Mock interview questions","Curated resource library"] },
            { tier:"Pro Max — ৳১,২৯৯/month", color:"purple", icon:"👑", features:["2x mentor session/month","Portfolio review","CV + LinkedIn optimization","Placement referral network","Completion certificate"] },
          ].map((f,i) => {
            const cls = {green:{border:"border-green-200",bg:"bg-green-50",header:"bg-green-600",dot:"bg-green-400"},indigo:{border:"border-indigo-200",bg:"bg-indigo-50",header:"bg-indigo-600",dot:"bg-indigo-400"},purple:{border:"border-purple-200",bg:"bg-purple-50",header:"bg-purple-600",dot:"bg-purple-400"}};
            const cl = cls[f.color];
            return (
              <div key={i} className={`rounded-2xl border-2 ${cl.border} overflow-hidden`}>
                <div className={`${cl.header} px-4 py-2.5 flex items-center gap-2`}>
                  <span className="text-xl">{f.icon}</span>
                  <p className="text-white font-black">{f.tier}</p>
                </div>
                <div className={`${cl.bg} p-3 space-y-1.5`}>
                  {f.features.map((feat,j) => (
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
            { name:"Free", price:"৳০", period:"", color:"green", note:"Credit card লাগবে না", features:["AI Roadmap","Week 1–2","Daily streak","1 review/mo"] },
            { name:"Pro", price:"৳৪৯৯", period:"/month", color:"indigo", note:"৳১৬/দিন — চায়ের দাম", features:["Unlimited review","Full 12 weeks","AI analysis","Interview Qs"] },
            { name:"Pro Max", price:"৳১,২৯৯", period:"/month", color:"purple", note:"Job পেলে উঠে যাবে", features:["Mentor sessions","Portfolio review","CV help","Certificate"] },
          ].map((p,i) => {
            const cls={green:{border:"border-green-200",bg:"bg-green-50",header:"bg-green-600",text:"text-green-600"},indigo:{border:"border-indigo-200",bg:"bg-indigo-50",header:"bg-indigo-600",text:"text-indigo-600"},purple:{border:"border-purple-200",bg:"bg-purple-50",header:"bg-purple-600",text:"text-purple-600"}};
            const cl=cls[p.color];
            return (
              <div key={i} className={`rounded-2xl border-2 ${cl.border} overflow-hidden ${i===1?"ring-2 ring-indigo-400 ring-offset-1":""}`}>
                <div className={`${cl.header} px-4 py-3 flex justify-between items-center`}>
                  <p className="text-white font-black">{p.name}</p>
                  {i===1 && <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">🔥 Most Popular</span>}
                </div>
                <div className={`${cl.bg} p-4`}>
                  <div className="flex items-end gap-1 mb-3">
                    <span className={`text-3xl font-black ${cl.text}`}>{p.price}</span>
                    <span className="text-gray-400 text-sm mb-1">{p.period}</span>
                  </div>
                  <div className="space-y-1 mb-3">
                    {p.features.map((f,j) => <div key={j} className="flex items-center gap-2 text-sm text-gray-700"><span className={`text-sm ${cl.text}`}>✓</span>{f}</div>)}
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
              { week:"Week 1", action:"Waitlist page live", detail:"Simple landing — 'Coming soon, early access'" },
              { week:"Week 2", action:"Beta group তৈরি", detail:"Facebook/WhatsApp এ ৫০ জন early tester" },
              { week:"Week 3", action:"Beta launch", detail:"Free access, feedback collect করো" },
              { week:"Week 4", action:"Paid launch", detail:"First 100 users কে 50% discount" },
            ].map((s,i) => (
              <div key={i} className="bg-white rounded-xl px-3 py-2 mb-1.5 flex items-start gap-3 border border-amber-100">
                <span className="text-xs font-black text-amber-600 shrink-0 w-14">{s.week}</span>
                <div><p className="text-sm font-bold text-gray-800">{s.action}</p><p className="text-xs text-gray-500">{s.detail}</p></div>
              </div>
            ))}
          </div>
          {[
            { ch:"Facebook Groups", impact:"High", tactics:["Programming Hero, Dev Community BD তে active হও","Free Roadmap Generator share করো","৳৫০০/day paid ad — developer audience"] },
            { ch:"YouTube", impact:"Very High", tactics:["Short tutorials — '৫ মিনিটে Laravel routing'","Success stories — '৩ মাসে job পেয়েছে'","SEO: 'PHP শেখার উপায়'"] },
            { ch:"University Partnership", impact:"High", tactics:["CSE dept এ demo দাও","Student club কে free Pro দাও","Campus ambassador — commission দাও"] },
          ].map((c,i) => (
            <div key={i} className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
              <div className="bg-gray-700 px-4 py-2.5 flex justify-between items-center">
                <p className="text-white font-bold text-sm">{c.ch}</p>
                <span className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full">Impact: {c.impact}</span>
              </div>
              <div className="p-3 space-y-1.5">
                {c.tactics.map((t,j) => (
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
                  {[["M1","10","৳7,590"],["M2","30","৳21,470"],["M3","80","৳59,420"],["M6","250","৳189,950"],["M12","800","৳593,950"]].map((r,i) => (
                    <tr key={i} className={`border-b border-gray-100 ${i===4?"font-bold text-green-700":""}`}>
                      <td className="py-2">{r[0]}</td><td className="text-right">{r[1]}</td><td className="text-right font-bold">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[{m:"CAC",v:"~৳200",n:"Facebook + organic"},{m:"LTV (Pro)",v:"~৳2,994",n:"৳499 × 6mo avg"},{m:"LTV:CAC",v:"15:1",n:"Excellent (>3 = good)"},{m:"Churn Target",v:"<5%/mo",n:"Streak করবে কমাবে"}].map((u,i) => (
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

// ── PAGE: TECH STACK ──────────────────────────────────────────────────────────
function PageTech() {
  const [tab, setTab] = useState("stack");
  const tabs = [
    { id:"stack",  label:"🧱 Stack"      },
    { id:"arch",   label:"🏗️ Architecture"},
    { id:"folder", label:"📁 Folders"    },
    { id:"db",     label:"🗄️ Database"   },
    { id:"api",    label:"🔌 API"        },
    { id:"sprint", label:"🗓️ Sprints"    },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-purple-700 to-indigo-700 rounded-2xl p-4 text-white">
        <h2 className="text-lg font-black">🧱 Technical Architecture</h2>
        <p className="text-purple-300 text-xs mt-1">Laravel 11 + Vue 3 + Inertia.js + MySQL + Redis</p>
      </div>
      <div className="flex gap-1.5 flex-wrap">
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border-2 transition-all ${tab===t.id?"bg-purple-600 text-white border-transparent":"bg-white text-gray-600 border-gray-200 hover:border-purple-300"}`}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === "stack" && (
        <div className="space-y-3">
          {[
            { layer:"Frontend", color:"indigo", icon:"🖥️", items:[{n:"Vue 3",r:"Composition API",w:"Laravel এর সাথে Inertia দিয়ে seamless"},{n:"Inertia.js",r:"SPA Bridge",w:"API ছাড়াই Vue+Laravel কথা বলে"},{n:"Tailwind CSS",r:"Styling",w:"Utility-first, দ্রুত UI"},{n:"Pinia",r:"State",w:"Vue 3 official store"},{n:"Vite",r:"Build",w:"Super fast HMR"}] },
            { layer:"Backend", color:"purple", icon:"⚙️", items:[{n:"Laravel 11",r:"PHP Framework",w:"Full-featured"},{n:"Sanctum",r:"Auth",w:"SPA auth + API token"},{n:"Horizon",r:"Queue Monitor",w:"AI jobs background এ"},{n:"Spatie",r:"Roles",w:"Admin, User, Mentor roles"}] },
            { layer:"Database", color:"green", icon:"🗄️", items:[{n:"MySQL 8",r:"Primary DB",w:"Relational data, transactions"},{n:"Redis",r:"Cache+Queue",w:"AI cache, sessions, jobs"},{n:"Scout",r:"Search",w:"Course/user search"}] },
            { layer:"External", color:"amber", icon:"🤖", items:[{n:"Claude API",r:"AI Engine",w:"Course plan, review, analysis"},{n:"SSLCommerz",r:"BD Payment",w:"bKash, Nagad, Card"},{n:"Mailgun",r:"Email",w:"Transactional emails"}] },
          ].map((layer,i) => {
            const cls={indigo:{border:"border-indigo-200",bg:"bg-indigo-50",header:"bg-indigo-600",badge:"bg-indigo-100 text-indigo-800"},purple:{border:"border-purple-200",bg:"bg-purple-50",header:"bg-purple-600",badge:"bg-purple-100 text-purple-800"},green:{border:"border-green-200",bg:"bg-green-50",header:"bg-green-600",badge:"bg-green-100 text-green-800"},amber:{border:"border-amber-200",bg:"bg-amber-50",header:"bg-amber-500",badge:"bg-amber-100 text-amber-800"}};
            const cl=cls[layer.color];
            return (
              <div key={i} className={`rounded-2xl border-2 ${cl.border} overflow-hidden`}>
                <div className={`${cl.header} px-4 py-2.5 flex items-center gap-2`}>
                  <span>{layer.icon}</span><p className="text-white font-bold text-sm">{layer.layer}</p>
                </div>
                <div className={`${cl.bg} p-3 space-y-1.5`}>
                  {layer.items.map((item,j) => (
                    <div key={j} className="bg-white rounded-xl p-3 flex items-start gap-3 border border-gray-100">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap mb-0.5">
                          <span className="text-sm font-bold text-gray-800">{item.n}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${cl.badge}`}>{item.r}</span>
                        </div>
                        <p className="text-xs text-gray-500">{item.w}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {tab === "arch" && (
        <div className="space-y-3">
          <div className="rounded-2xl border-2 border-indigo-200 overflow-hidden">
            <div className="bg-indigo-600 px-4 py-2.5"><p className="text-white font-bold text-sm">🏗️ System Architecture</p></div>
            <div className="bg-indigo-50 p-3">
              <Code lang="text" code={`BROWSER (Vue 3 + Inertia.js + Tailwind)
        │ HTTPS
Cloudflare CDN + WAF
        │
Nginx (Reverse Proxy + SSL)
   ┌────┴──────────────────┐
Laravel App (PHP-FPM)   Queue Workers
Controllers             ├ GenerateCourseJob
Models / Services       ├ ReviewAssignmentJob
Policies                └ SendEmailJob
   │
   ├── MySQL 8  (users, courses, payments)
   ├── Redis    (cache + queue + sessions)
   └── External APIs
       Claude API | SSLCommerz | Mailgun`} />
            </div>
          </div>
          <div className="rounded-2xl border-2 border-purple-200 overflow-hidden">
            <div className="bg-purple-600 px-4 py-2.5"><p className="text-white font-bold text-sm">🔄 AI Request Flow</p></div>
            <div className="bg-purple-50 p-3">
              <Code lang="text" code={`1. User submits goal (Vue form)
2. Inertia POST → Laravel Controller
3. Validate → Store course (status: pending)
4. Dispatch GenerateCourseJob → Redis Queue
5. Return instantly to Vue

Background Worker:
6. Check Redis cache (hit → return cached)
7. Miss → Call Claude API
8. Parse JSON → Save weeks to MySQL
9. Cache in Redis (24h TTL)
10. course status → "ready"
11. Broadcast → Vue updates live`} />
            </div>
          </div>
        </div>
      )}

      {tab === "folder" && (
        <div className="space-y-3">
          <div className="rounded-2xl border-2 border-indigo-200 overflow-hidden">
            <div className="bg-indigo-600 px-4 py-2.5"><p className="text-white font-bold text-sm">📁 Backend — Laravel</p></div>
            <div className="bg-indigo-50 p-3">
              <Code lang="bash" code={`app/
├── Http/Controllers/
│   ├── Auth/LoginController.php
│   ├── Auth/RegisterController.php
│   ├── CourseController.php
│   ├── AssignmentController.php
│   ├── ProgressController.php
│   ├── PaymentController.php
│   └── Admin/DashboardController.php
├── Jobs/
│   ├── GenerateCourseJob.php
│   ├── ReviewAssignmentJob.php
│   └── AnalyzeProgressJob.php
├── Models/
│   ├── User.php / Course.php
│   ├── Week.php / Assignment.php
│   └── Payment.php / Subscription.php
├── Services/
│   ├── AI/ClaudeService.php
│   ├── AI/CourseGeneratorService.php
│   └── Payment/SSLCommerzService.php
routes/
├── web.php      # Inertia routes
├── api.php      # Mobile API
└── admin.php    # Admin panel`} />
            </div>
          </div>
          <div className="rounded-2xl border-2 border-purple-200 overflow-hidden">
            <div className="bg-purple-600 px-4 py-2.5"><p className="text-white font-bold text-sm">📁 Frontend — Vue 3</p></div>
            <div className="bg-purple-50 p-3">
              <Code lang="bash" code={`resources/js/
├── app.js                 # Inertia init
├── Components/
│   ├── UI/ (Button, Card, Modal)
│   ├── Course/ (CourseCard, WeekCard)
│   ├── Assignment/ (SubmissionForm, AIFeedback)
│   └── Layout/ (AppLayout, Navbar)
├── Pages/
│   ├── Auth/ (Login, Register)
│   ├── Dashboard/Index.vue
│   ├── Course/ (Show, Week)
│   ├── Assignment/ (Show, Review)
│   ├── Progress/Index.vue
│   ├── Billing/ (Plans, Checkout)
│   └── Admin/ (Dashboard, Users, Revenue)
├── Stores/          # Pinia
│   ├── auth.js
│   └── course.js
└── Composables/
    ├── useAI.js
    └── useProgress.js`} />
            </div>
          </div>
          <div className="rounded-2xl border-2 border-green-200 overflow-hidden">
            <div className="bg-green-600 px-4 py-2.5"><p className="text-white font-bold text-sm">⚡ Setup Commands</p></div>
            <div className="bg-green-50 p-3">
              <Code lang="bash" code={`composer create-project laravel/laravel learnai-bd
cd learnai-bd

# Inertia (server)
composer require inertiajs/inertia-laravel

# Vue 3 + Pinia + Inertia (client)
npm install @inertiajs/vue3 vue@3 @vitejs/plugin-vue pinia

# Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Laravel packages
composer require laravel/sanctum
composer require spatie/laravel-permission
composer require laravel/horizon
composer require laravel/telescope --dev

php artisan migrate
npm run dev && php artisan horizon`} />
            </div>
          </div>
        </div>
      )}

      {tab === "db" && (
        <div className="space-y-3">
          <div className="rounded-2xl border-2 border-indigo-200 overflow-hidden">
            <div className="bg-indigo-600 px-4 py-2.5"><p className="text-white font-bold text-sm">🗄️ Core Tables</p></div>
            <div className="bg-indigo-50 p-3">
              <Code lang="sql" code={`CREATE TABLE users (
  id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name            VARCHAR(255) NOT NULL,
  email           VARCHAR(255) UNIQUE NOT NULL,
  plan            ENUM('free','pro','pro_max') DEFAULT 'free',
  plan_expires_at TIMESTAMP NULL,
  streak_count    INT DEFAULT 0
);

CREATE TABLE courses (
  id     BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT UNSIGNED NOT NULL,
  goal   TEXT NOT NULL,
  level  ENUM('beginner','intermediate','advanced'),
  status ENUM('generating','ready','completed') DEFAULT 'generating'
);

CREATE TABLE weeks (
  id          BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  course_id   BIGINT UNSIGNED NOT NULL,
  week_number TINYINT NOT NULL,
  title       VARCHAR(255),
  topics      JSON,
  outcomes    JSON,
  assignment  TEXT,
  resources   JSON,
  is_completed BOOLEAN DEFAULT FALSE
);

CREATE TABLE assignments (
  id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id         BIGINT UNSIGNED NOT NULL,
  week_id         BIGINT UNSIGNED NOT NULL,
  submission      TEXT NOT NULL,
  ai_score        TINYINT,
  ai_summary      TEXT,
  ai_strengths    JSON,
  ai_improvements JSON
);

CREATE TABLE payments (
  id             BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id        BIGINT UNSIGNED NOT NULL,
  gateway        ENUM('sslcommerz','stripe','bkash'),
  gateway_txn_id VARCHAR(255) UNIQUE,
  amount         DECIMAL(10,2),
  status         ENUM('pending','success','failed') DEFAULT 'pending'
);`} />
            </div>
          </div>
        </div>
      )}

      {tab === "api" && (
        <div className="space-y-3">
          {[
            { group:"Auth", color:"blue", routes:[{m:"POST",p:"/auth/register",d:"নতুন account"},{m:"POST",p:"/auth/login",d:"Login"},{m:"POST",p:"/auth/logout",d:"Logout",a:true},{m:"GET",p:"/auth/me",d:"Current user",a:true}] },
            { group:"Courses", color:"indigo", routes:[{m:"POST",p:"/courses",d:"AI generate",a:true},{m:"GET",p:"/courses",d:"User courses",a:true},{m:"GET",p:"/courses/{id}/status",d:"Generation status",a:true}] },
            { group:"Assignments", color:"green", routes:[{m:"POST",p:"/assignments",d:"Submit → AI review",a:true},{m:"GET",p:"/assignments/{id}",d:"Review result",a:true}] },
            { group:"Progress", color:"amber", routes:[{m:"POST",p:"/progress/log",d:"Daily log → streak",a:true},{m:"POST",p:"/progress/analyze",d:"AI analysis",a:true,pro:true}] },
            { group:"Payment", color:"rose", routes:[{m:"GET",p:"/plans",d:"Pricing"},{m:"POST",p:"/subscribe",d:"Subscribe",a:true},{m:"POST",p:"/payment/ssl/init",d:"SSLCommerz",a:true},{m:"POST",p:"/payment/ssl/ipn",d:"Webhook"}] },
          ].map((g,gi) => {
            const mc={GET:"bg-green-100 text-green-700",POST:"bg-blue-100 text-blue-700",PATCH:"bg-amber-100 text-amber-700"};
            const cls={blue:{border:"border-blue-200",bg:"bg-blue-50",header:"bg-blue-600"},indigo:{border:"border-indigo-200",bg:"bg-indigo-50",header:"bg-indigo-600"},green:{border:"border-green-200",bg:"bg-green-50",header:"bg-green-600"},amber:{border:"border-amber-200",bg:"bg-amber-50",header:"bg-amber-500"},rose:{border:"border-rose-200",bg:"bg-rose-50",header:"bg-rose-600"}};
            const cl=cls[g.color];
            return (
              <div key={gi} className={`rounded-2xl border-2 ${cl.border} overflow-hidden`}>
                <div className={`${cl.header} px-4 py-2.5`}><p className="text-white font-bold text-sm">{g.group}</p></div>
                <div className={`${cl.bg} p-3 space-y-1.5`}>
                  {g.routes.map((r,ri) => (
                    <div key={ri} className="bg-white rounded-xl px-3 py-2 flex items-center gap-2 flex-wrap border border-gray-100">
                      <span className={`text-xs font-black px-2 py-0.5 rounded-lg shrink-0 ${mc[r.m]||"bg-gray-100 text-gray-600"}`}>{r.m}</span>
                      <code className="text-xs text-gray-700 font-mono flex-1">{r.p}</code>
                      <span className="text-xs text-gray-400">{r.d}</span>
                      {r.pro && <span className="text-xs bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded-full font-bold">PRO</span>}
                      {r.a && <span className="text-xs bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-full">🔒</span>}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {tab === "sprint" && (
        <div className="space-y-3">
          <div className="bg-white rounded-2xl p-4 grid grid-cols-4 gap-2 text-center shadow-sm">
            {[{l:"Sprints",v:"7"},{l:"Weeks",v:"14"},{l:"Timeline",v:"3.5mo"},{l:"Solo?",v:"Yes ✅"}].map((s,i) => (
              <div key={i}><p className="text-xl font-black text-purple-600">{s.v}</p><p className="text-xs text-gray-400">{s.l}</p></div>
            ))}
          </div>
          {[
            { s:"Sprint 1", w:"Week 1–2", c:"green",  g:"Setup + Auth + Onboarding",      t:["Laravel+Vue+Inertia setup","Auth system","Roles (Spatie)","Onboarding flow"], d:"✅ Login → Onboarding কাজ করছে" },
            { s:"Sprint 2", w:"Week 3–4", c:"blue",   g:"AI Course Generation",            t:["ClaudeService.php","CourseGeneratorService","GenerateCourseJob","Redis cache"], d:"✅ AI course তৈরি হচ্ছে" },
            { s:"Sprint 3", w:"Week 5–6", c:"indigo", g:"Dashboard + Progress",            t:["Dashboard.vue","Daily streak","Week complete","Progress timeline"], d:"✅ Dashboard কাজ করছে" },
            { s:"Sprint 4", w:"Week 7–8", c:"purple", g:"AI Assignment Review",            t:["SubmissionForm.vue","ReviewAssignmentJob","AIFeedback.vue","Resources page"], d:"✅ AI review আসছে" },
            { s:"Sprint 5", w:"Week 9–10",c:"amber",  g:"Payment + Subscription",          t:["SSLCommerzService","Plans.vue","Checkout flow","IPN webhook"], d:"✅ bKash upgrade কাজ করছে" },
            { s:"Sprint 6", w:"Week 11–12",c:"rose",  g:"Admin Panel",                     t:["Admin Dashboard","Users list","Revenue charts","Horizon setup"], d:"✅ Admin panel ready" },
            { s:"Sprint 7", w:"Week 13–14",c:"gray",  g:"Polish + Launch",                 t:["Email notifications","Cron jobs","Tests","DigitalOcean deploy"], d:"🚀 Production live!" },
          ].map((sp,i) => {
            const cls={green:{border:"border-green-200",bg:"bg-green-50",header:"bg-green-600",dot:"bg-green-400"},blue:{border:"border-blue-200",bg:"bg-blue-50",header:"bg-blue-600",dot:"bg-blue-400"},indigo:{border:"border-indigo-200",bg:"bg-indigo-50",header:"bg-indigo-600",dot:"bg-indigo-400"},purple:{border:"border-purple-200",bg:"bg-purple-50",header:"bg-purple-600",dot:"bg-purple-400"},amber:{border:"border-amber-200",bg:"bg-amber-50",header:"bg-amber-500",dot:"bg-amber-400"},rose:{border:"border-rose-200",bg:"bg-rose-50",header:"bg-rose-600",dot:"bg-rose-400"},gray:{border:"border-gray-200",bg:"bg-gray-50",header:"bg-gray-700",dot:"bg-gray-400"}};
            const cl=cls[sp.c];
            return (
              <div key={i} className={`rounded-2xl border-2 ${cl.border} overflow-hidden`}>
                <div className={`${cl.header} px-4 py-3`}>
                  <p className="text-white/70 text-xs">{sp.w}</p>
                  <p className="text-white font-black">{sp.s} — {sp.g}</p>
                </div>
                <div className={`${cl.bg} p-3`}>
                  <div className="grid grid-cols-2 gap-1.5 mb-2">
                    {sp.t.map((t,j) => (
                      <div key={j} className="flex items-center gap-2 bg-white rounded-lg px-3 py-1.5 border border-gray-100">
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${cl.dot}`} />
                        <span className="text-xs text-gray-700">{t}</span>
                      </div>
                    ))}
                  </div>
                  <div className={`rounded-xl px-3 py-2 bg-white border ${cl.border}`}>
                    <p className="text-xs font-bold text-gray-700">{sp.d}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ── PAGE: LESSON PLAN ─────────────────────────────────────────────────────────
function PageLessons() {
  const [activeMonth, setActiveMonth] = useState(1);
  const months = [
    { id:1, label:"Month 1", sub:"PHP Foundations", color:"blue",   weeks:["Week 1: Programming Logic","Week 2: Core PHP","Week 3: PHP + Database","Week 4: Git + Workflow"] },
    { id:2, label:"Month 2", sub:"Laravel",          color:"purple", weeks:["Week 5: Laravel Fundamentals","Week 6: Models & Migrations","Week 7: CRUD Application","Week 8: API Development"] },
    { id:3, label:"Month 3", sub:"Engineering",      color:"green",  weeks:["Week 9: Debugging","Week 10: External APIs","Week 11: Automation Tools","Week 12: Final Project"] },
  ];
  const cls={blue:{border:"border-blue-200",bg:"bg-blue-50",header:"bg-blue-600",badge:"bg-blue-100 text-blue-800"},purple:{border:"border-purple-200",bg:"bg-purple-50",header:"bg-purple-600",badge:"bg-purple-100 text-purple-800"},green:{border:"border-green-200",bg:"bg-green-50",header:"bg-green-600",badge:"bg-green-100 text-green-800"}};
  const m = months.find(x => x.id === activeMonth);
  const cl = cls[m.color];

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-green-700 to-blue-700 rounded-2xl p-4 text-white">
        <h2 className="text-lg font-black">📅 12-Week Lesson Plan</h2>
        <p className="text-green-200 text-xs mt-1">প্রতি সপ্তাহে ২ class × ২ ঘণ্টা = ৪ ঘণ্টা</p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {months.map(mo => {
          const c=cls[mo.color];
          return (
            <button key={mo.id} onClick={() => setActiveMonth(mo.id)}
              className={`rounded-xl py-2.5 px-2 text-xs font-bold border-2 transition-all ${activeMonth===mo.id?`${c.header} text-white border-transparent`:`bg-white ${c.border} text-gray-600`}`}>
              {mo.label}<br/><span className="font-normal opacity-75">{mo.sub}</span>
            </button>
          );
        })}
      </div>
      <div className={`rounded-2xl border-2 ${cl.border} overflow-hidden`}>
        <div className={`${cl.header} px-4 py-3`}>
          <p className="text-white font-black">{m.label} — {m.sub}</p>
        </div>
        <div className={`${cl.bg} p-3 space-y-2`}>
          {m.weeks.map((w,i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${cl.badge}`}>Week {m.id*4-3+i}</span>
                <span className="font-bold text-gray-800 text-sm">{w.split(": ")[1]}</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {["Class 1 — Theory + Demo (2h)", "Class 2 — Practice + Review (2h)"].map((c,j) => (
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
        {[{d:"Mon–Tue",t:"📚 Learning sessions (2–3টা)"},{d:"Wed–Thu",t:"💻 Coding assignments"},{d:"Friday",t:"🔍 Code review session"},{d:"Weekend",t:"📝 Learning log + prep"}].map((r,i) => (
          <div key={i} className="flex items-center gap-3 py-1.5 border-b border-gray-100 last:border-0">
            <span className="text-xs font-bold text-gray-500 w-20 shrink-0">{r.d}</span>
            <span className="text-sm text-gray-700">{r.t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── PAGE: HOW TO DEPLOY ───────────────────────────────────────────────────────
function PageDeploy() {
  return (
    <div className="space-y-3">
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-4 text-white">
        <h2 className="text-lg font-black">🚀 How to Host This Site</h2>
        <p className="text-gray-400 text-xs mt-1">এই docs site টা কীভাবে real URL এ host করবে</p>
      </div>

      {[
        {
          step:"Option 1 — Vercel (Fastest, Free)", color:"indigo", icon:"⚡",
          desc:"সবচেয়ে সহজ। ৫ মিনিটে live।",
          code:`# 1. React app বানাও
npx create-react-app learnai-docs
cd learnai-docs

# 2. এই artifact এর code App.js তে paste করো

# 3. Vercel এ deploy করো
npm install -g vercel
vercel

# Done! তোমাকে একটা URL দেবে:
# https://learnai-docs.vercel.app`
        },
        {
          step:"Option 2 — Netlify (Drag & Drop)", color:"green", icon:"🌐",
          desc:"Code না জানলেও হবে — folder drag করো।",
          code:`# 1. Build করো
npm run build

# 2. netlify.com এ যাও
# 3. "build" folder টা drag & drop করো
# Done! Free URL পাবে।`
        },
        {
          step:"Option 3 — GitHub Pages (Free)", color:"purple", icon:"🐙",
          desc:"GitHub account থাকলে সবচেয়ে ভালো।",
          code:`# 1. GitHub repo তৈরি করো
git init && git add . && git commit -m "init"
git remote add origin https://github.com/user/learnai-docs
git push

# 2. package.json এ add করো:
"homepage": "https://username.github.io/learnai-docs"

# 3. Deploy করো
npm install gh-pages --save-dev
npm run deploy

# URL: https://username.github.io/learnai-docs`
        },
      ].map((o,i) => {
        const cls={indigo:{border:"border-indigo-200",bg:"bg-indigo-50",header:"bg-indigo-600"},green:{border:"border-green-200",bg:"bg-green-50",header:"bg-green-600"},purple:{border:"border-purple-200",bg:"bg-purple-50",header:"bg-purple-600"}};
        const cl=cls[o.color];
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
            "DNS এ CNAME record যোগ করো — ব্যস!"
          ].map((t,i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-amber-600 font-bold text-sm shrink-0">{i+1}.</span>
              <p className="text-xs text-amber-800">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── MAIN APP ──────────────────────────────────────────────────────────────────
const PAGES = [
  { id:"strategy", icon:"🎯", label:"Strategy"    },
  { id:"tech",     icon:"🧱", label:"Tech"        },
  { id:"lessons",  icon:"📅", label:"Lessons"     },
  { id:"deploy",   icon:"🚀", label:"Deploy Guide"},
];

export default function App() {
  const [page, setPage] = useState("strategy");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top nav */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🧠</span>
            <div>
              <p className="font-black text-indigo-700 text-sm leading-none">LearnAI BD</p>
              <p className="text-gray-400 text-xs">Documentation</p>
            </div>
          </div>
          <div className="flex gap-1">
            {PAGES.map(p => (
              <button key={p.id} onClick={() => setPage(p.id)}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all ${page===p.id?"bg-indigo-600 text-white":"text-gray-500 hover:bg-gray-100"}`}>
                <span>{p.icon}</span>
                <span className="hidden sm:inline">{p.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto p-4 pb-10">
        {page === "strategy" && <PageStrategy />}
        {page === "tech"     && <PageTech />}
        {page === "lessons"  && <PageLessons />}
        {page === "deploy"   && <PageDeploy />}
      </div>
    </div>
  );
}
