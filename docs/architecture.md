# Architecture Overview

RepoLens combines a Next.js application shell with a repository intelligence backend. The design follows a modular flow: GitHub metadata is fetched, indexed content is stored for semantic retrieval, and AI flows examine repository context before answering developer questions.

## Frontend

The app shell is built in Next.js with App Router. The landing page presents the product story and the demo environment showcases the dashboard and repository intelligence workflows.

## Data and retrieval

Repository metadata, file relationships, and vector embeddings are stored in PostgreSQL and pgvector for similarity-based retrieval. The retrieval pipeline selects the most relevant code chunks and attaches citations before sending context to an LLM.

## AI analysis

The analysis layer uses grounded prompts that include retrieved context from the repository. This ensures answers cite actual files and avoid unsupported claims.

## Security and authorization

The actual production implementation uses server-side auth checks, scoped repository access, and environment-based secrets. The demo mode intentionally uses seeded data without exposing any live credentials.
