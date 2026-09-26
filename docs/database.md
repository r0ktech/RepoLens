# Database Design

The target relational schema includes user, account, repository, repository file, code chunk, embedding, conversation, message, citation, pull request, analysis, security finding, and repository insight tables with references between them.

## Design decisions

- One-to-many relationships between users and repositories
- Repository-scoped conversations and messages
- Many embeddings per repository file or code chunk
- Structured findings for security and PR analysis
- Foreign keys and indexed lookups for retrieval performance

This schema supports multi-tenant access patterns and repository-scoped analysis.
