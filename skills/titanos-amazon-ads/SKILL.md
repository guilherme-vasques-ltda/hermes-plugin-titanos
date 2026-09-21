---
name: titanos-amazon-ads
description: Use when reading, diagnosing, planning, or changing Amazon Ads campaigns, budgets, bids, targets, search terms, or reports through Titanos.
license: UNLICENSED
compatibility: Hermes Agent Plugin v1 with Titanos MCP enabled.
---

# Titanos Amazon Ads

Use Titanos MCP for live Amazon Ads data and operations. Diagnose first; separate recommendations from writes.

## Workflow

1. Discover Ads tools with `titanos_search_tools` using `domain="amazon-ads"`.
2. Identify integration, profile, marketplace, brand, and requested date window.
3. Pull live campaign/resource state and completed report coverage.
4. Analyze with business context: margin, stock, listing health, Buy Box, and campaign intent.
5. Rank actions by expected impact and reversibility.

## Analysis rules

- Report exact spend, sales, ACoS/ROAS, orders, and coverage when available.
- Use TACoS when total product sales are available; do not judge ACoS alone.
- Treat Sponsored Brands awareness differently from direct-response campaigns.
- A `PENDING` or partial report is not zero performance.
- Cross-check major cuts or scale decisions against Seller inventory and listing health.

## Writes

Bid, budget, state, targeting, negative keyword, campaign, or rule changes require explicit approval. Present the exact targets, before/after values, payload, and rollback approach first. Execute small reversible batches and verify by reading the changed resource back.

## Failure handling

Do not loop repeated report or schema failures. Simplify the query, inspect the tool schema, verify account scope and data freshness, then report the exact blocker if it persists.
