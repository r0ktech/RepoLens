# RAG Pipeline

RepoLens uses retrieval-augmented generation to keep answers grounded in repository evidence.

1. A user asks a repository question.
2. The query is embedded and compared against indexed code chunks.
3. The system retrieves the strongest matches from repository context.
4. Citation metadata is collected from matching files and line ranges.
5. A prompt is assembled with relevant code context.
6. The LLM responds with citations and explicit confidence boundaries.

If enough evidence is not found, the system responds with the repository-grounded fallback message instead of guessing.
