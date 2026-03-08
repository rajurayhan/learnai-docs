import { useState } from "react";
import { Code } from "../components/Code.jsx";

export default function Tech() {
  const [tab, setTab] = useState("stack");
  const tabs = [
    { id: "stack", label: "🧱 Stack" },
    { id: "arch", label: "🏗️ Architecture" },
    { id: "folder", label: "📁 Folders" },
    { id: "db", label: "🗄️ Database" },
    { id: "api", label: "🔌 API" },
    { id: "sprint", label: "🗓️ Sprints" },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-purple-700 to-indigo-700 rounded-2xl p-4 text-white">
        <h2 className="text-lg font-black">🧱 Technical Architecture</h2>
        <p className="text-purple-300 text-xs mt-1">Laravel 11 + Vue 3 + Inertia.js + MySQL + Redis + Docker · Mobile (future): NativePHP</p>
      </div>
      <div className="flex gap-1.5 flex-wrap">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border-2 transition-all ${tab === t.id ? "bg-purple-600 text-white border-transparent" : "bg-white text-gray-600 border-gray-200 hover:border-purple-300"}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "stack" && (
        <div className="space-y-3">
          {[
            { layer: "Frontend", color: "indigo", icon: "🖥️", items: [{ n: "Vue 3", r: "Composition API", w: "Laravel এর সাথে Inertia দিয়ে seamless" }, { n: "Inertia.js", r: "SPA Bridge", w: "API ছাড়াই Vue+Laravel কথা বলে" }, { n: "Tailwind CSS", r: "Styling", w: "Utility-first, দ্রুত UI" }, { n: "Pinia", r: "State", w: "Vue 3 official store" }, { n: "Vite", r: "Build", w: "Super fast HMR" }] },
            { layer: "Backend", color: "purple", icon: "⚙️", items: [{ n: "Laravel 11", r: "PHP Framework", w: "Full-featured" }, { n: "Sanctum", r: "Auth", w: "SPA auth + API token" }, { n: "Horizon", r: "Queue Monitor", w: "AI jobs background এ" }, { n: "Spatie", r: "Roles", w: "Admin, User, Mentor roles" }] },
            { layer: "Database", color: "green", icon: "🗄️", items: [{ n: "MySQL 8", r: "Primary DB", w: "Relational data, transactions" }, { n: "Redis", r: "Cache+Queue", w: "AI cache, sessions, jobs" }, { n: "Scout", r: "Search", w: "Course/user search" }] },
            { layer: "DevOps", color: "sky", icon: "🐳", items: [{ n: "Docker", r: "Containers", w: "Consistent dev & deploy environment" }, { n: "Docker Compose", r: "Orchestration", w: "Multi-service local setup, single command" }] },
            { layer: "External", color: "amber", icon: "🤖", items: [{ n: "Claude API", r: "AI Engine", w: "Course plan, review, analysis" }, { n: "SSLCommerz", r: "BD Payment", w: "bKash, Nagad, Card" }, { n: "Mailgun", r: "Email", w: "Transactional emails" }] },
            { layer: "Mobile (future)", color: "teal", icon: "📱", items: [{ n: "NativePHP", r: "Native apps", w: "iOS & Android with PHP/Laravel — same stack, no rewrite. nativephp.com" }] },
          ].map((layer, i) => {
            const cls = { indigo: { border: "border-indigo-200", bg: "bg-indigo-50", header: "bg-indigo-600", badge: "bg-indigo-100 text-indigo-800" }, purple: { border: "border-purple-200", bg: "bg-purple-50", header: "bg-purple-600", badge: "bg-purple-100 text-purple-800" }, green: { border: "border-green-200", bg: "bg-green-50", header: "bg-green-600", badge: "bg-green-100 text-green-800" }, sky: { border: "border-sky-200", bg: "bg-sky-50", header: "bg-sky-600", badge: "bg-sky-100 text-sky-800" }, amber: { border: "border-amber-200", bg: "bg-amber-50", header: "bg-amber-500", badge: "bg-amber-100 text-amber-800" }, teal: { border: "border-teal-200", bg: "bg-teal-50", header: "bg-teal-600", badge: "bg-teal-100 text-teal-800" } };
            const cl = cls[layer.color];
            return (
              <div key={i} className={`rounded-2xl border-2 ${cl.border} overflow-hidden`}>
                <div className={`${cl.header} px-4 py-2.5 flex items-center gap-2`}>
                  <span>{layer.icon}</span>
                  <p className="text-white font-bold text-sm">{layer.layer}</p>
                </div>
                <div className={`${cl.bg} p-3 space-y-1.5`}>
                  {layer.items.map((item, j) => (
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
            { group: "Auth", color: "blue", routes: [{ m: "POST", p: "/auth/register", d: "নতুন account" }, { m: "POST", p: "/auth/login", d: "Login" }, { m: "POST", p: "/auth/logout", d: "Logout", a: true }, { m: "GET", p: "/auth/me", d: "Current user", a: true }] },
            { group: "Courses", color: "indigo", routes: [{ m: "POST", p: "/courses", d: "AI generate", a: true }, { m: "GET", p: "/courses", d: "User courses", a: true }, { m: "GET", p: "/courses/{id}/status", d: "Generation status", a: true }] },
            { group: "Assignments", color: "green", routes: [{ m: "POST", p: "/assignments", d: "Submit → AI review", a: true }, { m: "GET", p: "/assignments/{id}", d: "Review result", a: true }] },
            { group: "Progress", color: "amber", routes: [{ m: "POST", p: "/progress/log", d: "Daily log → streak", a: true }, { m: "POST", p: "/progress/analyze", d: "AI analysis", a: true, pro: true }] },
            { group: "Payment", color: "rose", routes: [{ m: "GET", p: "/plans", d: "Pricing" }, { m: "POST", p: "/subscribe", d: "Subscribe", a: true }, { m: "POST", p: "/payment/ssl/init", d: "SSLCommerz", a: true }, { m: "POST", p: "/payment/ssl/ipn", d: "Webhook" }] },
          ].map((g, gi) => {
            const mc = { GET: "bg-green-100 text-green-700", POST: "bg-blue-100 text-blue-700", PATCH: "bg-amber-100 text-amber-700" };
            const cls = { blue: { border: "border-blue-200", bg: "bg-blue-50", header: "bg-blue-600" }, indigo: { border: "border-indigo-200", bg: "bg-indigo-50", header: "bg-indigo-600" }, green: { border: "border-green-200", bg: "bg-green-50", header: "bg-green-600" }, amber: { border: "border-amber-200", bg: "bg-amber-50", header: "bg-amber-500" }, rose: { border: "border-rose-200", bg: "bg-rose-50", header: "bg-rose-600" } };
            const cl = cls[g.color];
            return (
              <div key={gi} className={`rounded-2xl border-2 ${cl.border} overflow-hidden`}>
                <div className={`${cl.header} px-4 py-2.5`}><p className="text-white font-bold text-sm">{g.group}</p></div>
                <div className={`${cl.bg} p-3 space-y-1.5`}>
                  {g.routes.map((r, ri) => (
                    <div key={ri} className="bg-white rounded-xl px-3 py-2 flex items-center gap-2 flex-wrap border border-gray-100">
                      <span className={`text-xs font-black px-2 py-0.5 rounded-lg shrink-0 ${mc[r.m] || "bg-gray-100 text-gray-600"}`}>{r.m}</span>
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
            {[{ l: "Sprints", v: "7" }, { l: "Weeks", v: "14" }, { l: "Timeline", v: "3.5mo" }, { l: "Solo?", v: "Yes ✅" }].map((s, i) => (
              <div key={i}><p className="text-xl font-black text-purple-600">{s.v}</p><p className="text-xs text-gray-400">{s.l}</p></div>
            ))}
          </div>
          {[
            { s: "Sprint 1", w: "Week 1–2", c: "green", g: "Setup + Auth + Onboarding", t: ["Laravel+Vue+Inertia setup", "Auth system", "Roles (Spatie)", "Onboarding flow"], d: "✅ Login → Onboarding কাজ করছে" },
            { s: "Sprint 2", w: "Week 3–4", c: "blue", g: "AI Course Generation", t: ["ClaudeService.php", "CourseGeneratorService", "GenerateCourseJob", "Redis cache"], d: "✅ AI course তৈরি হচ্ছে" },
            { s: "Sprint 3", w: "Week 5–6", c: "indigo", g: "Dashboard + Progress", t: ["Dashboard.vue", "Daily streak", "Week complete", "Progress timeline"], d: "✅ Dashboard কাজ করছে" },
            { s: "Sprint 4", w: "Week 7–8", c: "purple", g: "AI Assignment Review", t: ["SubmissionForm.vue", "ReviewAssignmentJob", "AIFeedback.vue", "Resources page"], d: "✅ AI review আসছে" },
            { s: "Sprint 5", w: "Week 9–10", c: "amber", g: "Payment + Subscription", t: ["SSLCommerzService", "Plans.vue", "Checkout flow", "IPN webhook"], d: "✅ bKash upgrade কাজ করছে" },
            { s: "Sprint 6", w: "Week 11–12", c: "rose", g: "Admin Panel", t: ["Admin Dashboard", "Users list", "Revenue charts", "Horizon setup"], d: "✅ Admin panel ready" },
            { s: "Sprint 7", w: "Week 13–14", c: "gray", g: "Polish + Launch", t: ["Email notifications", "Cron jobs", "Tests", "DigitalOcean deploy"], d: "🚀 Production live!" },
          ].map((sp, i) => {
            const cls = { green: { border: "border-green-200", bg: "bg-green-50", header: "bg-green-600", dot: "bg-green-400" }, blue: { border: "border-blue-200", bg: "bg-blue-50", header: "bg-blue-600", dot: "bg-blue-400" }, indigo: { border: "border-indigo-200", bg: "bg-indigo-50", header: "bg-indigo-600", dot: "bg-indigo-400" }, purple: { border: "border-purple-200", bg: "bg-purple-50", header: "bg-purple-600", dot: "bg-purple-400" }, amber: { border: "border-amber-200", bg: "bg-amber-50", header: "bg-amber-500", dot: "bg-amber-400" }, rose: { border: "border-rose-200", bg: "bg-rose-50", header: "bg-rose-600", dot: "bg-rose-400" }, gray: { border: "border-gray-200", bg: "bg-gray-50", header: "bg-gray-700", dot: "bg-gray-400" } };
            const cl = cls[sp.c];
            return (
              <div key={i} className={`rounded-2xl border-2 ${cl.border} overflow-hidden`}>
                <div className={`${cl.header} px-4 py-3`}>
                  <p className="text-white/70 text-xs">{sp.w}</p>
                  <p className="text-white font-black">{sp.s} — {sp.g}</p>
                </div>
                <div className={`${cl.bg} p-3`}>
                  <div className="grid grid-cols-2 gap-1.5 mb-2">
                    {sp.t.map((t, j) => (
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
