# RepoLens

RepoLens is an AI-powered repository intelligence platform that helps developers understand a codebase, trace architecture, evaluate risk, and ask grounded technical questions using repository context.

## Why it exists

Modern codebases are complex. Teams need a way to understand architecture, dependency flow, auth boundaries, and quality signals without manually reading dozens of files. RepoLens brings repository analysis, code search, AI chat, security review, and dependency mapping into a single developer-focused workflow.

## Architecture

- Next.js app router frontend
- Server-side data layer abstraction
- GitHub integration layer
- Retrieval-augmented generation pipeline for repository context
- PostgreSQL + pgvector storage for repository embeddings and metadata
- LLM-based analysis for chat, security, and PR review

## Stack

- Next.js
- React
- Tailwind CSS
- Framer Motion
- Recharts
- PostgreSQL
- Prisma
- pgvector
- GitHub OAuth
- OpenAI-compatible LLM APIs
- Zod

## Demo mode

The included demo mode is intentionally seeded with a realistic repository structure and analysis data so recruiters and engineers can immediately explore the product without a GitHub connection.

## Setup

1. Copy `.env.example` to `.env.local`.
2. Set the environment variables for GitHub OAuth, database, and LLM access.
3. Run `npm install`.
4. Run `npm run dev`.

## Scripts

- `npm run dev` — local development server
- `npm run build` — production build
- `npm run start` — production server
- `npm run lint` — lint check

## Important caveats

This repository includes a demo implementation with realistic pre-indexed repository data. Production integrations such as GitHub OAuth, live repository indexing, and LLM-backed Q&A require valid provider credentials and a configured database environment.

## Documentation

See the docs folder for architecture and integration notes.
