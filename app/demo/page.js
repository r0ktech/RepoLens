"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Bot,
  CheckCircle2,
  ChevronRight,
  CircleDashed,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  KeyRound,
  Lock,
  Search,
  ShieldAlert,
  Sparkles,
  Star,
  TerminalSquare,
  UserRound,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  activity,
  aiMessages,
  architectureNodes,
  codeFiles,
  conversations,
  dependencyGraph,
  fileTree,
  pullRequest,
  repoOverview,
  repositoryHealth,
  repositoryInsights,
  searchResults,
  securityFindings,
} from "@/lib/demo-data";

const chartData = [
  { name: "Mon", value: 20 },
  { name: "Tue", value: 35 },
  { name: "Wed", value: 30 },
  { name: "Thu", value: 42 },
  { name: "Fri", value: 55 },
  { name: "Sat", value: 48 },
  { name: "Sun", value: 64 },
];

const selectedFile = "src/lib/auth.ts";

export default function DemoPage() {
  const [query, setQuery] = useState(
    "How does authentication work in this project?",
  );
  const [activeTab, setActiveTab] = useState("overview");

  const metrics = useMemo(
    () => [
      { label: "Repositories analyzed", value: "12" },
      { label: "Files indexed", value: "8,431" },
      { label: "AI questions asked", value: "1,284" },
      { label: "Issues detected", value: "47" },
    ],
    [query],
  );

  return (
    <main className="min-h-screen bg-[#070b11] text-slate-100">
      <header className="border-b border-slate-800 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
              <GitBranch className="h-5 w-5" />
            </div>
            <div>
              <div className="text-lg font-semibold">RepoLens</div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                demo mode
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="rounded-full border border-slate-700 px-3 py-2 text-sm text-slate-200 hover:border-slate-500"
            >
              Home
            </Link>
            <button className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-medium text-slate-950">
              Analyze repository
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="surface rounded-2xl p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="text-sm font-medium text-slate-200">
              Connected repositories
            </div>
            <button className="rounded-full border border-slate-700 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-300">
              Add
            </button>
          </div>
          <div className="space-y-3">
            {[
              { name: "atlas-dashboard", active: true },
              { name: "payments-service", active: false },
              { name: "content-engine", active: false },
            ].map((repo) => (
              <button
                key={repo.name}
                className={`flex w-full items-center justify-between rounded-xl border px-3 py-3 text-left ${repo.active ? "border-emerald-400/30 bg-emerald-500/5" : "border-slate-800 bg-slate-950/40"}`}
              >
                <div>
                  <div className="text-sm font-medium text-white">
                    {repo.name}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    acme-platform
                  </div>
                </div>
                {repo.active ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-slate-500" />
                )}
              </button>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/60 p-3">
            <div className="flex items-center justify-between text-sm text-slate-200">
              <span>Repo health</span>
              <span className="font-medium text-emerald-300">82</span>
            </div>
            <div className="mt-3 h-2 rounded-full bg-slate-800">
              <div className="h-2 w-[82%] rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300" />
            </div>
          </div>
        </aside>

        <div className="space-y-6">
          <section className="surface rounded-2xl p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-emerald-200">
                  <Sparkles className="h-3.5 w-3.5" />
                  Repository Overview
                </div>
                <h1 className="mt-4 text-3xl font-semibold text-white">
                  {repoOverview.name}
                </h1>
                <p className="mt-2 max-w-2xl text-slate-300">
                  {repoOverview.description}
                </p>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-200">
                <Star className="h-4 w-4 text-yellow-300" />{" "}
                {repoOverview.stars} stars
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {metrics.map(({ label, value }) => (
                <div key={label} className="soft-card rounded-2xl p-4">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                    {label}
                  </div>
                  <div className="mt-3 text-2xl font-semibold text-white">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="surface rounded-2xl p-5">
              <div className="mb-5 flex items-center justify-between">
                <div className="text-lg font-medium text-white">
                  Architecture
                </div>
                <div className="rounded-full border border-slate-700 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">
                  dependency graph
                </div>
              </div>
              <div className="relative h-72 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                {architectureNodes.map((node) => (
                  <div
                    key={node.id}
                    className="absolute flex items-center justify-center rounded-xl border text-xs font-medium text-slate-100"
                    style={{
                      left: `${node.x}px`,
                      top: `${node.y}px`,
                      width: node.type === "data" ? "116px" : "128px",
                      height: "44px",
                      borderColor:
                        node.type === "data"
                          ? "rgba(52,211,153,0.28)"
                          : "rgba(148,163,184,0.18)",
                      background:
                        node.type === "data"
                          ? "rgba(52,211,153,0.08)"
                          : "rgba(15,23,42,0.9)",
                    }}
                  >
                    {node.label}
                  </div>
                ))}
                <div className="absolute left-[240px] top-[120px] h-px w-56 bg-slate-700" />
                <div className="absolute left-[430px] top-[120px] h-px w-56 bg-slate-700" />
                <div className="absolute left-[610px] top-[220px] h-px w-44 bg-slate-700" />
                <div className="absolute left-[300px] top-[160px] h-px w-28 bg-slate-700 rotate-[90deg] origin-left" />
              </div>
            </div>

            <div className="surface rounded-2xl p-5">
              <div className="mb-4 text-lg font-medium text-white">
                Health breakdown
              </div>
              <div className="space-y-4">
                {Object.entries(repositoryHealth).map(([label, score]) => (
                  <div key={label}>
                    <div className="mb-2 flex items-center justify-between text-sm text-slate-200">
                      <span>{label}</span>
                      <span>{score}</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300"
                        style={{ width: `${score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="surface rounded-2xl p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-lg font-medium text-white">
                  Repository explorer
                </div>
                <button className="rounded-full border border-slate-700 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">
                  VS Code
                </button>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
                <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-400">
                  <FileCode2 className="h-4 w-4" /> src/
                </div>
                <div className="space-y-2 text-sm text-slate-300">
                  {fileTree.map((item) => (
                    <div
                      key={item}
                      className={`rounded-lg px-2 py-1 ${item.includes(selectedFile) ? "bg-emerald-500/10 text-emerald-100" : "hover:bg-slate-900"}`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="surface rounded-2xl p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-lg font-medium text-white">
                  Selected file
                </div>
                <div className="rounded-full border border-slate-700 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">
                  {selectedFile}
                </div>
              </div>
              <pre className="overflow-x-auto rounded-2xl border border-slate-800 bg-[#0a1117] p-4 text-xs leading-6 text-slate-200">
                <code>{codeFiles[selectedFile].content}</code>
              </pre>
            </div>
          </section>

          <section className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="surface rounded-2xl p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-lg font-medium text-white">
                  AI repository chat
                </div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-400">
                  <Bot className="h-4 w-4 text-emerald-300" /> grounded
                </div>
              </div>

              <div className="space-y-3">
                {aiMessages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={`rounded-2xl border p-3 text-sm leading-6 ${message.role === "assistant" ? "border-emerald-500/15 bg-emerald-500/5 text-emerald-50" : "border-slate-800 bg-slate-950/60 text-slate-200"}`}
                  >
                    {message.text}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex gap-3">
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="flex-1 rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-3 text-sm text-slate-100 outline-none ring-0 transition focus:border-emerald-400"
                  aria-label="Ask AI question"
                />
                <button className="rounded-xl bg-emerald-400 px-4 py-3 text-sm font-medium text-slate-950">
                  Ask
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="surface rounded-2xl p-5">
                <div className="mb-4 text-lg font-medium text-white">
                  Code search
                </div>
                <div className="space-y-3">
                  {searchResults.map((result) => (
                    <div
                      key={`${result.file}-${result.line}`}
                      className="rounded-xl border border-slate-800 bg-slate-950/60 p-3"
                    >
                      <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-400">
                        <span>{result.file}</span>
                        <span>{result.score.toFixed(2)}</span>
                      </div>
                      <div className="text-sm text-slate-200">
                        {result.snippet}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="surface rounded-2xl p-5">
                <div className="mb-4 text-lg font-medium text-white">
                  Security review
                </div>
                <div className="space-y-3">
                  {securityFindings.map((finding) => (
                    <div
                      key={`${finding.file}-${finding.line}`}
                      className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-3"
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-xs uppercase tracking-[0.18em] text-amber-200">
                          {finding.severity}
                        </span>
                        <ShieldAlert className="h-4 w-4 text-amber-300" />
                      </div>
                      <div className="text-sm text-slate-100">
                        {finding.problem}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
            <div className="surface rounded-2xl p-5">
              <div className="mb-4 text-lg font-medium text-white">
                Conversations
              </div>
              <div className="space-y-2">
                {conversations.map((conversation) => (
                  <button
                    key={conversation}
                    className="flex w-full items-center justify-between rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-3 text-left text-sm text-slate-200"
                  >
                    <span>{conversation}</span>
                    <ChevronRight className="h-4 w-4 text-slate-500" />
                  </button>
                ))}
              </div>
            </div>

            <div className="surface rounded-2xl p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-lg font-medium text-white">Activity</div>
                <div className="rounded-full border border-slate-700 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">
                  commits
                </div>
              </div>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="colorUv" x1="0" x2="0" y1="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#34d399"
                          stopOpacity={0.6}
                        />
                        <stop
                          offset="95%"
                          stopColor="#34d399"
                          stopOpacity={0.02}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      stroke="rgba(148,163,184,0.12)"
                      vertical={false}
                    />
                    <XAxis
                      dataKey="name"
                      stroke="#94a3b8"
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#34d399"
                      fill="url(#colorUv)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>

          <section className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
            <div className="surface rounded-2xl p-5">
              <div className="mb-4 text-lg font-medium text-white">
                Insights
              </div>
              <div className="space-y-3">
                {repositoryInsights.map((insight) => (
                  <div
                    key={insight.label}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 p-3"
                  >
                    <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                      {insight.label}
                    </div>
                    <ul className="mt-2 space-y-1 text-sm text-slate-200">
                      {insight.value.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface rounded-2xl p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-lg font-medium text-white">
                  Pull request analyzer
                </div>
                <div className="rounded-full border border-amber-500/25 bg-amber-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-amber-200">
                  PR #{pullRequest.number}
                </div>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <div className="flex items-center justify-between text-sm text-slate-200">
                  <span>Risk level</span>
                  <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-2 py-1 text-xs text-amber-200">
                    {pullRequest.risk}
                  </span>
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-4">
                  <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                      Files
                    </div>
                    <div className="mt-2 text-xl font-semibold text-white">
                      {pullRequest.filesChanged}
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                      Issues
                    </div>
                    <div className="mt-2 text-xl font-semibold text-white">
                      {pullRequest.potentialIssues}
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                      Security
                    </div>
                    <div className="mt-2 text-xl font-semibold text-white">
                      {pullRequest.securityConcerns}
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                      Tests
                    </div>
                    <div className="mt-2 text-xl font-semibold text-white">
                      {pullRequest.recommendedTests}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {pullRequest.summary}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
