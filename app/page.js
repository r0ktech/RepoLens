"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Blocks,
  Bot,
  Code2,
  GitBranch,
  Lock,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Codebase Intelligence",
    text: "Map architecture, hotspots, and domain logic from real repository context.",
  },
  {
    icon: Search,
    title: "AI Repository Chat",
    text: "Ask technical questions and get grounded answers with citations to source files.",
  },
  {
    icon: Workflow,
    title: "Architecture Explorer",
    text: "Visualize service boundaries, file relationships, and dependency chains.",
  },
  {
    icon: Blocks,
    title: "Dependency Analysis",
    text: "Trace internal modules, external packages, and risky dependency paths.",
  },
  {
    icon: BarChart3,
    title: "Pull Request Analysis",
    text: "Review touched files and detect likely risk areas before merge.",
  },
  {
    icon: ShieldCheck,
    title: "Security Insights",
    text: "Surface likely misconfigurations, auth gaps, and unsafe code patterns.",
  },
  {
    icon: Code2,
    title: "Code Search",
    text: "Search semantically or exactly across the repository with file and line context.",
  },
  {
    icon: Sparkles,
    title: "Repository Analytics",
    text: "Track health, complexity, maintenance, and documentation coverage.",
  },
];

const steps = [
  "Connect GitHub",
  "Index Repository",
  "Understand Code",
  "Ask Questions",
  "Get Cited Answers",
];

export default function HomePage() {
  return (
    <main className="min-h-screen text-slate-100">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-500/10 text-emerald-300">
            <GitBranch className="h-5 w-5" />
          </div>
          <div>
            <div className="text-lg font-semibold tracking-tight">RepoLens</div>
            <div className="text-xs text-slate-400">
              Understand any codebase
            </div>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#features" className="transition hover:text-white">
            Features
          </a>
          <a href="#workflow" className="transition hover:text-white">
            How it works
          </a>
          <a href="#demo" className="transition hover:text-white">
            Demo
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/demo"
            className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500 hover:text-white"
          >
            View Demo
          </Link>
          <Link
            href="/demo"
            className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-emerald-300"
          >
            Analyze a Repository
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-10 md:grid-cols-[1.1fr_0.9fr] md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
            <Sparkles className="h-3.5 w-3.5" />
            AI-powered repository intelligence
          </div>
          <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Understand any codebase. Ask it anything.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            RepoLens uses AI to analyze your GitHub repositories, understand
            their architecture, and answer technical questions with references
            to the actual code.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 font-medium text-slate-950 transition hover:bg-emerald-300"
            >
              Analyze a Repository <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#demo"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-5 py-3 font-medium text-slate-200 transition hover:border-slate-500 hover:text-white"
            >
              View Demo
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-emerald-300" /> Secure GitHub access
            </div>
            <div className="flex items-center gap-2">
              <Code2 className="h-4 w-4 text-emerald-300" /> Source-grounded
              answers
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-emerald-300" /> Architecture
              insights
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          <div className="surface relative overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-950/80 p-4">
            <div className="mb-4 flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex gap-2">
                {["#f87171", "#fbbf24", "#34d399"].map((color) => (
                  <span
                    key={color}
                    className="h-3 w-3 rounded-full"
                    style={{ background: color }}
                  />
                ))}
              </div>
              <div className="rounded-full border border-slate-700 bg-slate-900 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-400">
                RepoLens
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
              <div className="soft-card rounded-2xl p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-sm font-medium text-white">
                    Repositories
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-widest text-emerald-200">
                    live
                  </span>
                </div>
                <div className="space-y-3">
                  {["dashboard", "api-service", "auth-proxy", "web-app"].map(
                    (name, idx) => (
                      <div
                        key={name}
                        className={`flex items-center justify-between rounded-xl border px-3 py-2 ${idx === 0 ? "border-emerald-400/30 bg-emerald-500/5" : "border-slate-800 bg-slate-900/70"}`}
                      >
                        <div>
                          <div className="text-sm font-medium text-slate-100">
                            {name}
                          </div>
                          <div className="text-[11px] text-slate-400">
                            {idx + 1}k LOC
                          </div>
                        </div>
                        <div className="text-xs text-slate-300">
                          {idx === 0 ? "Indexed" : "Queued"}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
              <div className="space-y-4">
                <div className="soft-card rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-white">
                      Architecture map
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                      graph
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-center gap-4">
                    <div className="rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-200">
                      Frontend
                    </div>
                    <ArrowRight className="h-4 w-4 text-slate-500" />
                    <div className="rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-200">
                      API
                    </div>
                    <ArrowRight className="h-4 w-4 text-slate-500" />
                    <div className="rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-200">
                      DB
                    </div>
                  </div>
                </div>
                <div className="soft-card rounded-2xl p-4">
                  <div className="mb-3 text-sm font-medium text-white">
                    Repository query
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3 text-sm text-slate-200">
                    “How does authentication work in this project?”
                  </div>
                  <div className="mt-3 rounded-xl border border-emerald-400/20 bg-emerald-500/5 p-3 text-sm leading-6 text-emerald-50">
                    Authentication is handled through a shared middleware layer,
                    and JWTs are validated in the API gateway before route
                    access.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-300">
            Built for developers
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
            Everything you need to understand a codebase
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="soft-card rounded-2xl p-5 transition hover:border-slate-600"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="workflow" className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            From GitHub to grounded answers
          </h2>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/10 text-sm font-medium text-emerald-200">
                {index + 1}
              </div>
              <div className="hidden text-sm text-slate-300 md:block">
                {step}
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden h-4 w-4 text-slate-500 md:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="demo" className="mx-auto max-w-7xl px-6 pb-24 pt-14">
        <div className="soft-card rounded-3xl p-8 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-300">
            Live demo
          </p>
          <h3 className="mt-3 text-3xl font-semibold text-white">
            Try RepoLens against a realistic sample repository
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Explore architecture, search code, inspect a pull request, and ask
            the AI about authentication, services, and security patterns.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 font-medium text-slate-950 transition hover:bg-emerald-300"
            >
              Open Demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
