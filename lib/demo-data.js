export const repoOverview = {
  name: "atlas-dashboard",
  owner: "acme-platform",
  description:
    "Operations dashboard and API platform for internal engineering workflows.",
  language: "TypeScript",
  primaryLanguage: "TypeScript",
  stars: 482,
  forks: 67,
  visibility: "Private",
  lastUpdated: "2 days ago",
  files: 1432,
  loc: 28431,
  contributors: 19,
  commitActivity: "Weekly",
  size: "38 MB",
  health: 82,
  overview: {
    architecture: 82,
    security: 74,
    maintainability: 88,
    testing: 61,
    documentation: 70,
    dependencies: 91,
  },
  insights: [
    "The auth layer is concentrated in a handful of middleware files, making access control changes high impact.",
    "Repository complexity is concentrated in the incident service and notification workers.",
    "Documentation coverage is strongest around API contracts and weakest around background jobs.",
  ],
};

export const fileTree = [
  "src/",
  "src/app/",
  "src/app/(auth)/login/page.tsx",
  "src/app/api/auth/login/route.ts",
  "src/app/api/health/route.ts",
  "src/components/",
  "src/components/dashboard/overview.tsx",
  "src/components/layout/sidebar.tsx",
  "src/lib/",
  "src/lib/auth.ts",
  "src/lib/db.ts",
  "src/services/",
  "src/services/notifications.ts",
  "src/services/incidents.ts",
  "src/services/payments.ts",
  "src/utils/",
  "src/utils/validation.ts",
  "prisma/schema.prisma",
  "README.md",
  ".env.example",
];

export const codeFiles = {
  "src/lib/auth.ts": {
    language: "ts",
    metadata: {
      imports: ["jsonwebtoken", "bcryptjs", "zod"],
      exports: ["signToken", "verifyToken"],
      functions: ["issueSession", "validateRole"],
      classes: [],
      related: [
        "src/app/api/auth/login/route.ts",
        "src/app/components/AuthGate.tsx",
      ],
    },
    content: `import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export async function issueSession(user) {
  const token = jwt.sign({ sub: user.id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '8h',
  });

  return { token, user: { id: user.id, email: user.email } };
}

export function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}

export function validateRole(role, required) {
  return role === required || role === 'admin';
}`,
  },
  "src/app/api/auth/login/route.ts": {
    language: "ts",
    metadata: {
      imports: ["NextRequest", "db", "issueSession"],
      exports: [],
      functions: ["POST"],
      classes: [],
      related: ["src/lib/auth.ts", "src/lib/db.ts"],
    },
    content: `import { NextRequest } from 'next/server';
import { db } from '@/lib/db';
import { issueSession, verifyToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const user = await db.user.findUnique({ where: { email: body.email } });

  if (!user || !(await bcrypt.compare(body.password, user.passwordHash))) {
    return Response.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const session = await issueSession(user);
  return Response.json({ session });
}`,
  },
  "src/lib/db.ts": {
    language: "ts",
    metadata: {
      imports: ["postgres"],
      exports: ["db"],
      functions: [],
      classes: ["Database"],
      related: ["prisma/schema.prisma", "src/services/incidents.ts"],
    },
    content: `import postgres from 'postgres';

export const db = postgres(process.env.DATABASE_URL, {
  ssl: 'require',
  max: 10,
});
`,
  },
};

export const aiMessages = [
  {
    role: "assistant",
    text: "Authentication is handled through a middleware layer and JWT issuance in the auth service. The login route validates credentials, then signs a session and returns a bearer token.",
  },
  { role: "user", text: "How does authentication work in this project?" },
  {
    role: "assistant",
    text: "The login route checks a user record in the database, verifies the password, and then calls the shared auth service to issue a signed token. Source: src/app/api/auth/login/route.ts and src/lib/auth.ts.",
  },
  { role: "user", text: "Where is the database connection initialized?" },
  {
    role: "assistant",
    text: "The database is initialized in src/lib/db.ts using the PostgreSQL client and the DATABASE_URL environment variable.",
  },
];

export const architectureNodes = [
  { id: "frontend", label: "Frontend", type: "service", x: 110, y: 40 },
  { id: "api", label: "API Routes", type: "service", x: 280, y: 120 },
  { id: "controllers", label: "Controllers", type: "service", x: 500, y: 120 },
  { id: "services", label: "Services", type: "service", x: 680, y: 200 },
  { id: "db", label: "Database", type: "data", x: 640, y: 330 },
  { id: "auth", label: "Auth", type: "service", x: 240, y: 315 },
];

export const dependencyGraph = {
  nodes: [
    { id: "authController", label: "authController.ts" },
    { id: "authService", label: "authService.ts" },
    { id: "userRepository", label: "userRepository.ts" },
    { id: "database", label: "database.ts" },
  ],
  edges: [
    ["authController", "authService"],
    ["authService", "userRepository"],
    ["userRepository", "database"],
  ],
};

export const securityFindings = [
  {
    severity: "Medium",
    file: "src/lib/auth.ts",
    line: 13,
    problem:
      "JWT secret is read directly from environment and may be weak if not rotated.",
    why: "A missing rotation policy can increase token replay risk across sessions.",
    remediation:
      "Set rotation policy, use environment validation, and keep secret length above 32 bytes.",
  },
  {
    severity: "Low",
    file: "src/app/api/auth/login/route.ts",
    line: 6,
    problem:
      "Error handling surface reveals provider-specific authentication details.",
    why: "Vague error responses may leak user existence or password schema details to attackers.",
    remediation:
      "Standardize error payloads and avoid distinguishing invalid user from invalid password.",
  },
];

export const repositoryHealth = {
  architecture: 82,
  security: 74,
  maintainability: 88,
  testing: 61,
  documentation: 70,
  dependencies: 91,
};

export const repositoryInsights = [
  {
    label: "Most complex files",
    value: [
      "src/services/incidents.ts",
      "src/services/payments.ts",
      "src/lib/auth.ts",
    ],
  },
  {
    label: "Largest files",
    value: [
      "src/app/api/health/route.ts",
      "src/components/dashboard/overview.tsx",
    ],
  },
  {
    label: "Low coverage",
    value: [
      "notifications worker",
      "billing callbacks",
      "permission middleware",
    ],
  },
];

export const pullRequest = {
  number: 42,
  risk: "Medium",
  filesChanged: 8,
  potentialIssues: 3,
  securityConcerns: 1,
  recommendedTests: 2,
  summary:
    "Potential issue detected around a permission check in the incident approval flow and a missing integration test for billing reconciliation.",
};

export const searchResults = [
  {
    file: "src/lib/auth.ts",
    line: 4,
    snippet:
      'const token = jwt.sign({ sub: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "8h" });',
    score: 0.95,
  },
  {
    file: "src/app/api/auth/login/route.ts",
    line: 10,
    snippet:
      "const user = await db.user.findUnique({ where: { email: body.email } });",
    score: 0.91,
  },
  {
    file: "src/services/payments.ts",
    line: 32,
    snippet: "verifyWebhookSignature(payload, secret)",
    score: 0.84,
  },
];

export const activity = [
  { date: "Today", commits: 14, pullRequests: 3, issues: 2 },
  { date: "This week", commits: 58, pullRequests: 9, issues: 7 },
  { date: "This month", commits: 230, pullRequests: 27, issues: 19 },
];

export const conversations = [
  "Authentication architecture",
  "Payment flow",
  "Database structure",
  "Security review",
  "Adding OAuth",
];
