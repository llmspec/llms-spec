# RFC: LLMS.md Specification (v0.1)

**RFC Metadata**

* **Author:** Huan Li (@huan)
* **Date:** 2025-08-31
* **Status:** Draft v0.1
* **Repository:** [llmspec/llms-spec](https://github.com/llmspec/llms-spec)
* **License:** MIT

---

## 1. Purpose

`LLMS.md` is a plain-text/Markdown convention for code repositories. It provides **structured guidance to Large Language Models (LLMs)** about:

* The purpose of the repository
* Which directories/files are most important
* Which files should be ignored
* How to run/test the project
* Hints for reasoning, environment variables, and prompt usage

It is inspired by [`llms.txt`](https://llmstxt.org) for websites, `robots.txt`, and conventions like `README.md`.

---

## 2. Location and Format

* File **must** be placed in the repository root.
* File **should** be named \`\`.
* Tools **should also accept** `llms.md` (alias), similar to `README.md` vs `readme.md`.
* Encoding: UTF-8.
* Recommended size: ≤100 KB.
* Format: **Markdown** (human-friendly and machine-parseable).

---

## 3. Suggested Structure

### 3.1 Title & Summary

```markdown
# Project Name

> One-line purpose of the repo

Additional description (1–2 paragraphs).
```

### 3.2 Key Directories

```markdown
## Key Directories
- `/src/core` — domain logic
- `/src/infrastructure` — persistence, adapters
- `/tests` — unit and integration
```

### 3.3 Entry Points

```markdown
## Entry Points
- `main.py` — CLI entry
- `app/server.ts` — starts web server
```

### 3.4 Ignore / Deprioritize

```markdown
## Ignore
- `/dist`, `/build` — generated
- `/node_modules`, `/venv` — dependencies
```

### 3.5 Run & Test

```markdown
## Run & Test
- Install: `npm install`
- Run: `npm start`
- Test: `npm test`
```

### 3.6 Reasoning Hints (Optional)

```markdown
## Reasoning Hints
- Always read `/src/core/*` first before modifying features.
- Write or update tests before implementing new logic.
```

### 3.7 Variables & Secrets (Optional)

```markdown
## Variables
- {{API_KEY}} — external API key (never commit secrets)
- {{DB_URI}} — database connection string
```

---

## 4. Best Practices

* **Keep it concise.** Don’t duplicate README content.
* **Update alongside code.** Treat it like configuration.
* **Version if needed.** e.g., `LLMS.v1.md`, `LLMS.v2.md`.
* **Use Markdown links.** Point to deeper docs.
* **Never expose secrets.** Document names and roles only.

---

## 5. Example

```markdown
# ReKey

> An AI-powered keyboard extension that rewrites text into fluent English.

Implements Clean Architecture with modular packages.

## Key Directories
- `/apps/ios` — SwiftUI iOS client
- `/packages/core` — text rewriting logic
- `/packages/api` — serverless backend (Firebase)

## Entry Points
- `apps/ios/App.swift`
- `packages/api/index.ts`

## Ignore
- `/dist`, `/build`
- `/node_modules`

## Run & Test
- Install: `npm install`
- Test: `npm run test`

## Reasoning Hints
- Transformers live in `/packages/core/transformers/*`.
- Do not edit `/dist` files; regenerate from source.
```

---

## 6. Future Work

* Schema definition (YAML/JSON) for strict machine parsing.
* Repo linters/validators for `LLMS.md`.
* IDE/CLI integration (Copilot, Cursor, Gemini CLI, Claude Code).
* Alignment with [Model Context Protocol (MCP)](https://github.com/modelcontextprotocol).

---

✅ **Canonical name: **`\
🔄 **Alias: **`** accepted for portability**
