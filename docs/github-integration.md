# GitHub Integration

RepoLens is designed to integrate with the GitHub API for repository discovery, metadata retrieval, pull request analysis, and repository tree extraction. The live product abstraction should fetch metadata, tree data, and file contents only after the user authorizes access.

## Production intent

- GitHub OAuth for user authentication
- Server-side token handling
- Repository visibility filtering
- Repository tree traversal with exclusion patterns for generated content
- Rate-limit-aware processing for large repos

## Demo note

This repository includes a demo dataset so the app remains runnable without a real GitHub connection.
