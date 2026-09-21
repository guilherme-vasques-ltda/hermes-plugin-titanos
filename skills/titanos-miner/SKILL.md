---
name: titanos-miner
description: Use when researching products, markets, keywords, reviews, competitors, CNPJ, NCM, or INPI with live Titanos data.
license: UNLICENSED
compatibility: Hermes Agent Plugin v1 with Titanos MCP enabled.
---

# Titanos Miner

Use Titanos MCP as the source of truth for current marketplace research. Never invent demand, competition, keyword, tax, company, or trademark data.

## Workflow

1. Call `titanos_search_tools` with the user goal or `domain="titanos-miner"`.
2. Call `titanos_describe_tool` before the first use of an unfamiliar tool.
3. Run narrow searches first; widen only when the result is insufficient.
4. Separate facts returned by Titanos from interpretation and recommendations.
5. State marketplace, country, query, and data limitations in the answer.

## Common jobs

- Product and category discovery: demand, competition, price bands, top sellers.
- Keyword research: expansion, ranking, reverse ASIN, SERP.
- Review mining: recurring praise, complaints, objections, and opportunities.
- Brazilian due diligence: CNPJ, NCM/tax, and INPI brand searches.
- Private-label assessment: entry signals, differentiation, and margin risks.

## Guardrails

- Do not claim profitability without costs, fees, taxes, and logistics inputs.
- Do not treat estimated marketplace signals as audited sales.
- Ask for the target marketplace when it changes the query.
- Prefer generic, importable, non-regulated opportunities unless the user asks otherwise.
- For an unavailable typed tool, use Titanos discovery tools; do not substitute stale memory.
