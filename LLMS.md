# LLMS.md (Root-Level Spec)

> This file provides structured guidance for Large Language Models (LLMs) interacting with this repository.

---

## Key Directories

* `/src/core` — domain logic
* `/src/infrastructure` — persistence, adapters
* `/tests` — unit and integration

## Entry Points

* `main.py` — CLI entry
* `app/server.ts` — starts web server

## Ignore

* `/dist`, `/build` — generated
* `/node_modules`, `/venv` — dependencies

## Run & Test

* Install: `npm install`
* Run: `npm start`
* Test: `npm test`

## Reasoning Hints

* Always read `/src/core/*` first before modifying features.
* Write or update tests before implementing new logic.

## Variables

* {{API\_KEY}} — external API key (never commit secrets)
* {{DB\_URI}} — database connection string

---

> ℹ️ This repository also includes [AGENTS.md](./AGENTS.md).  
> `LLMS.md` provides **structured, machine-parseable context** for LLMs.  
> For broader, freeform guidance to coding agents, see `AGENTS.md`.

For more details, see the [RFC document](./rfc/0001-llms-md-spec.md).
