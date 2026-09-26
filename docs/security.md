# Security Notes

RepoLens treats security as a first-class concern.

- Keep all secrets server-side.
- Never expose GitHub tokens or provider keys to frontend clients.
- Validate repository and prompt inputs.
- Restrict repository access to the owning user or workspace.
- Avoid executing arbitrary repository code on the server.
- Flag AI findings as potential issues, not guaranteed vulnerabilities.

This project includes a demo-safe data layer, but the production code path should enforce server-side authorization and strict secret management.
