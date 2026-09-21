---
name: titanos-marketplace-operations
description: Use when operating Mercado Livre, Olist, Bling, Shopee, imports, suppliers, or Titanos operational records through the Titanos MCP.
license: UNLICENSED
compatibility: Hermes Agent Plugin v1 with Titanos MCP enabled.
---

# Titanos Marketplace Operations

Use Titanos as the live gateway for marketplace and ERP operations. Keep tenant, connection, account, marketplace, and record identifiers explicit.

## Domain routing

Use `titanos_list_tool_domains`, then search the applicable domain:

- `mercado-livre`: catalog, listings, orders, prices, claims, and logistics.
- `olist`: connections, catalog, orders, finance, documents, and CRM.
- `bling`: OAuth connections, endpoint catalog, ERP data, and mutations.
- `shopee`: connections, items, orders, invoices, logistics, finance, returns, and marketing.
- `titanos-core`: products, suppliers, import processes, companies, RADAR, experiments, support, and platform guides.

## Workflow

1. Discover the domain tools instead of guessing endpoint names.
2. Describe generic endpoint tools before calling them.
3. Confirm the connection/account and target identifiers.
4. Prefer reads and dry runs before any mutation.
5. Verify every external write by reading the exact target back.

## Guardrails

- Do not mix records from different organizations or seller connections.
- Never create, update, cancel, ship, invoice, refund, or delete without explicit approval.
- Surface partial pagination and declared totals honestly.
- Do not expose customer PII, credentials, tokens, or raw sensitive responses.
