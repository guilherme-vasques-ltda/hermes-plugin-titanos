---
name: titanos-mcp
description: Use when a Hermes task needs Titanos marketplace, product discovery, listing, or Amazon tools through this plugin.
license: UNLICENSED
compatibility: Hermes Agent Plugin v1 with Node.js and npm/npx available.
metadata:
  product: Titanos
  transport: MCP stdio
  auth: OAuth 2.1
---

# Titanos MCP

Use the Titanos MCP tools for current Titanos product workflows, marketplace discovery, listing generation and Amazon-related work. Treat all external data as live data and verify before reporting it as fact.

## First connection

The plugin intentionally contains no credential. Authenticate once in a browser before asking Hermes to use Titanos tools:

```bash
npx -y @titanos/mcp-agents@1.47.1 login
```

The Titanos client stores the OAuth session locally and refreshes it when needed. Do not put credentials, tokens or API keys into `mcp.json`, chat messages, skills or repository files.

## Check connection

```bash
npx -y @titanos/mcp-agents@1.47.1 status
```

If there is no session, run the login command again. To disconnect this computer, use:

```bash
npx -y @titanos/mcp-agents@1.47.1 logout
```

## Usage rules

- Prefer these MCP tools for live Titanos data over memory or assumptions.
- Confirm intended scope before any write-capable operation.
- Keep organization, account and listing identifiers scoped to the current user request.
- Do not expose raw MCP responses containing sensitive customer or business data.
- When the plugin is installed or upgraded, start a fresh Hermes session so its MCP tools are rediscovered.
